import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";
import * as pdfjs from "https://esm.sh/pdfjs-dist@4.4.168/build/pdf.min.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function generateSlug(clientName: string): string {
  return clientName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

function generatePin(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Extract text from PDF using pdfjs-dist
async function extractTextFromPDF(pdfData: Uint8Array): Promise<string> {
  try {
    console.log("Starting PDF text extraction, bytes:", pdfData.length);
    
    // Load PDF document
    const loadingTask = pdfjs.getDocument({ data: pdfData });
    const pdf = await loadingTask.promise;
    
    console.log("PDF loaded, pages:", pdf.numPages);
    
    let fullText = "";
    const maxPages = Math.min(pdf.numPages, 50); // Limit to 50 pages
    
    for (let i = 1; i <= maxPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => item.str || "")
        .join(" ");
      fullText += pageText + "\n\n";
    }
    
    console.log("Extracted text length:", fullText.length);
    console.log("First 500 chars:", fullText.substring(0, 500));
    
    return fullText.trim();
  } catch (error) {
    console.error("PDF extraction error:", error);
    return "";
  }
}

// Pre-parse text to find obvious client info using regex
function preParseClientInfo(text: string): { clientContact: string; clientEmail: string } {
  let clientContact = "";
  let clientEmail = "";
  
  // Look for "Prepared for:" pattern
  const preparedForMatch = text.match(/prepared\s+for[:\s]+([A-Za-z\s.]+?)(?:\n|,|$)/i);
  if (preparedForMatch) {
    clientContact = preparedForMatch[1].trim();
  }
  
  // Look for email addresses
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) {
    clientEmail = emailMatch[0];
  }
  
  return { clientContact, clientEmail };
}

async function extractClientInfo(text: string, apiKey: string): Promise<{
  clientName: string;
  clientContact: string;
  clientEmail: string;
}> {
  // First try regex-based extraction
  const preParsed = preParseClientInfo(text);
  
  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        {
          role: "system",
          content: `You are a document parser. Extract client information from proposal documents. 
          IMPORTANT RULES:
          - Only extract information that is EXPLICITLY stated in the document
          - Do NOT invent or guess email addresses - if not found, leave empty
          - Do NOT invent company names - if not found, leave empty
          - Look for patterns like "Prepared for:", "Client:", "To:", "Attn:"
          - The clientContact is the person's NAME, not company
          - Always return valid JSON with exactly these fields: clientName, clientContact, clientEmail
          - If a field is not found, use an empty string`
        },
        {
          role: "user",
          content: `Extract the client company name, contact person name, and email from this proposal document. 
          
CRITICAL: Only extract information that is CLEARLY STATED. Do NOT make up or guess any values.
If you cannot find a company name, leave clientName empty.
If you cannot find an email, leave clientEmail empty.

Return ONLY a JSON object with clientName, clientContact, and clientEmail fields:

${text.substring(0, 10000)}`
        }
      ],
      tools: [
        {
          type: "function",
          function: {
            name: "extract_client_info",
            description: "Extract client information from the document",
            parameters: {
              type: "object",
              properties: {
                clientName: { type: "string", description: "Company or organization name. Leave empty if not found." },
                clientContact: { type: "string", description: "Contact person's full name. Leave empty if not found." },
                clientEmail: { type: "string", description: "Contact email address. Leave empty if not found - do NOT guess." }
              },
              required: ["clientName", "clientContact", "clientEmail"]
            }
          }
        }
      ],
      tool_choice: { type: "function", function: { name: "extract_client_info" } }
    }),
  });

  if (!response.ok) {
    console.error("AI extraction failed:", await response.text());
    return { clientName: "", clientContact: preParsed.clientContact, clientEmail: preParsed.clientEmail };
  }

  const data = await response.json();
  const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
  
  if (toolCall?.function?.arguments) {
    try {
      const result = JSON.parse(toolCall.function.arguments);
      // Merge with pre-parsed results, preferring AI results if they exist
      return {
        clientName: result.clientName || "",
        clientContact: result.clientContact || preParsed.clientContact || "",
        clientEmail: result.clientEmail || preParsed.clientEmail || ""
      };
    } catch {
      return { clientName: "", clientContact: preParsed.clientContact, clientEmail: preParsed.clientEmail };
    }
  }

  return { clientName: "", clientContact: preParsed.clientContact, clientEmail: preParsed.clientEmail };
}

async function generateProposalContent(text: string, templateStyle: string, apiKey: string): Promise<{
  sections: Array<{ title: string; content: string; imageKeywords: string[] }>;
  summary: string;
}> {
  // Check if we have meaningful text to work with
  if (!text || text.length < 100) {
    console.error("Insufficient text for proposal generation:", text?.length || 0);
    return { 
      sections: [
        { 
          title: "Proposal Content", 
          content: "Unable to extract content from the uploaded document. Please ensure the document contains readable text.",
          imageKeywords: ["business", "professional"] 
        }
      ], 
      summary: "Document processing incomplete." 
    };
  }

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        {
          role: "system",
          content: `You are a professional proposal designer. Transform raw proposal content into well-structured, professional sections.
          The template style is: ${templateStyle}.
          Create compelling section titles and polish the content while maintaining all factual information.
          Suggest relevant image keywords for each section that would work well with Pexels stock photos.
          
          IMPORTANT: Preserve the actual content from the document. Do not summarize too much - include the real details, scope items, deliverables, and pricing from the original document.`
        },
        {
          role: "user",
          content: `Transform this proposal document into professional sections. For each section, provide a title, polished content (keep the actual details from the document), and 2-3 image keywords for stock photos:

${text.substring(0, 15000)}`
        }
      ],
      tools: [
        {
          type: "function",
          function: {
            name: "structure_proposal",
            description: "Structure the proposal into sections",
            parameters: {
              type: "object",
              properties: {
                sections: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      content: { type: "string" },
                      imageKeywords: { type: "array", items: { type: "string" } }
                    },
                    required: ["title", "content", "imageKeywords"]
                  }
                },
                summary: { type: "string", description: "A brief executive summary" }
              },
              required: ["sections", "summary"]
            }
          }
        }
      ],
      tool_choice: { type: "function", function: { name: "structure_proposal" } }
    }),
  });

  if (!response.ok) {
    console.error("AI content generation failed:", await response.text());
    return { sections: [], summary: "" };
  }

  const data = await response.json();
  const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
  
  if (toolCall?.function?.arguments) {
    try {
      return JSON.parse(toolCall.function.arguments);
    } catch {
      return { sections: [], summary: "" };
    }
  }

  return { sections: [], summary: "" };
}

async function fetchPexelsImages(keywords: string[], pexelsApiKey: string): Promise<string[]> {
  const images: string[] = [];
  
  for (const keyword of keywords.slice(0, 3)) {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(keyword)}&per_page=1&orientation=landscape`,
        {
          headers: { Authorization: pexelsApiKey }
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        if (data.photos?.[0]?.src?.large) {
          images.push(data.photos[0].src.large);
        }
      }
    } catch (e) {
      console.error("Pexels fetch error:", e);
    }
  }
  
  return images;
}

async function generateClientEmail(
  clientName: string,
  clientContact: string,
  proposalUrl: string,
  pin: string,
  creatorName: string,
  apiKey: string
): Promise<string> {
  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        {
          role: "system",
          content: "You are a professional business email writer for WhitegloveAI, an AI services company."
        },
        {
          role: "user",
          content: `Write a professional email to send to a client with their proposal. 
          Client Company: ${clientName}
          Contact Name: ${clientContact || 'there'}
          Proposal URL: ${proposalUrl}
          Access PIN: ${pin}
          From: ${creatorName} at WhitegloveAI
          
          The email should be warm but professional, explain that their proposal is ready to view, include the link and PIN, and invite them to sign digitally if they approve.`
        }
      ],
    }),
  });

  if (!response.ok) {
    return `Dear ${clientContact || 'Valued Client'},

Thank you for your interest in WhitegloveAI services. Your customized proposal is now ready for review.

View Your Proposal: ${proposalUrl}
Access PIN: ${pin}

Please review the proposal at your convenience. If you approve, you can sign digitally at the bottom of the document.

Best regards,
${creatorName}
WhitegloveAI`;
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY")!;
    const pexelsApiKey = Deno.env.get("PEXELS_API_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { fileData, fileName, mimeType, templateStyle, creatorEmail, creatorId } = await req.json();

    if (!fileData || !fileName || !creatorEmail || !creatorId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: fileData, fileName, creatorEmail, creatorId" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Processing proposal for:", creatorEmail, "file:", fileName, "mimeType:", mimeType);

    // Decode base64 and upload to storage (using service role bypasses RLS)
    let fileBytes: Uint8Array;
    try {
      const binaryString = atob(fileData);
      fileBytes = Uint8Array.from(binaryString, c => c.charCodeAt(0));
      console.log("Decoded file bytes:", fileBytes.length);
    } catch (e) {
      console.error("Base64 decode error:", e);
      return new Response(
        JSON.stringify({ error: "Invalid file data encoding" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const storagePath = `${Date.now()}-${fileName}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('proposal-documents')
      .upload(storagePath, fileBytes, {
        contentType: mimeType || 'application/octet-stream',
        upsert: false,
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return new Response(
        JSON.stringify({ error: "Failed to upload document: " + uploadError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("File uploaded to:", uploadData.path);

    // Extract text from the file for AI processing
    let documentText = "";
    
    if (mimeType === 'text/plain' || fileName.endsWith('.txt')) {
      documentText = new TextDecoder().decode(fileBytes);
      console.log("Decoded plain text, length:", documentText.length);
    } else if (mimeType === 'application/pdf' || fileName.toLowerCase().endsWith('.pdf')) {
      // Extract text from PDF
      console.log("Extracting text from PDF...");
      documentText = await extractTextFromPDF(fileBytes);
      
      if (!documentText || documentText.length < 50) {
        console.warn("PDF extraction returned minimal text, using fallback");
        documentText = `PDF Document: ${fileName}\n\nNote: Text extraction was limited. The document may contain scanned images or non-text content.`;
      }
    } else {
      // For DOCX and other formats, provide a placeholder
      // In production, you'd integrate mammoth.js or similar for DOCX
      console.log("Non-PDF/text file, using placeholder");
      documentText = `Document: ${fileName}\n\nThis is a ${mimeType} file. For best results, please upload a PDF or plain text file.`;
    }

    console.log("Final document text length:", documentText.length);

    // Extract client information
    const clientInfo = await extractClientInfo(documentText, lovableApiKey);
    console.log("Extracted client info:", clientInfo);

    // Generate proposal content
    const proposalContent = await generateProposalContent(documentText, templateStyle || 'executive-purple', lovableApiKey);
    console.log("Generated sections:", proposalContent.sections.length);

    // Fetch images for each section
    const allImageKeywords = proposalContent.sections.flatMap(s => s.imageKeywords);
    const images = await fetchPexelsImages(allImageKeywords, pexelsApiKey);
    console.log("Fetched images:", images.length);

    // Generate slug and PIN
    const baseSlug = generateSlug(clientInfo.clientName || 'proposal');
    const timestamp = Date.now().toString(36);
    const slug = `${baseSlug}-${timestamp}`;
    const pin = generatePin();

    // Generate email
    const proposalUrl = `https://whitegloveai.com/proposal/${slug}`;
    const generatedEmail = await generateClientEmail(
      clientInfo.clientName,
      clientInfo.clientContact,
      proposalUrl,
      pin,
      creatorEmail.split('@')[0],
      lovableApiKey
    );

    // Create proposal record
    const { data: proposal, error: insertError } = await supabase
      .from('proposals')
      .insert({
        created_by: creatorId,
        client_name: clientInfo.clientName || '(Client name needed)',
        client_contact: clientInfo.clientContact,
        client_email: clientInfo.clientEmail,
        slug,
        pin,
        status: 'draft',
        template_style: templateStyle || 'executive-purple',
        source_document_path: uploadData.path,
        source_document_text: documentText.substring(0, 50000), // Limit stored text
        proposal_content: proposalContent,
        proposal_images: images,
        generated_email: generatedEmail,
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to create proposal: " + insertError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Log activity
    await supabase.from('proposal_activity_logs').insert({
      proposal_id: proposal.id,
      action: 'created',
      actor_email: creatorEmail,
      metadata: { template_style: templateStyle, file_name: fileName }
    });

    console.log("Proposal created:", proposal.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        proposal: {
          id: proposal.id,
          slug: proposal.slug,
          pin: proposal.pin,
          documentPath: uploadData.path,
          clientName: proposal.client_name,
          clientContact: proposal.client_contact,
          clientEmail: proposal.client_email,
          generatedEmail: proposal.generated_email,
          sections: proposalContent.sections,
          images
        }
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
