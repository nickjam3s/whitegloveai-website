
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const openaiApiKey = Deno.env.get("OPENAI_API_KEY");

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface GenerateTitlesRequest {
  documentId: string;
  prompt?: string;
}

interface GenerateContentRequest {
  documentId: string;
  selectedTitle: string;
  prompt?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!openaiApiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key not configured" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get("action");

    if (action === "generate-titles") {
      return await generateTitles(req);
    } else if (action === "generate-content") {
      return await generateContent(req);
    } else {
      throw new Error("Invalid action");
    }
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

async function generateTitles(req: Request): Promise<Response> {
  const { documentId, prompt }: GenerateTitlesRequest = await req.json();

  // Get document content
  const { data: document, error } = await supabase
    .from("documents")
    .select("extracted_text")
    .eq("id", documentId)
    .single();

  if (error || !document) {
    throw new Error("Document not found");
  }

  const systemPrompt = `You are a professional blog title generator. Based on the provided document content and optional user prompt, generate 3 compelling, SEO-friendly blog titles. Each title should be:
- Engaging and click-worthy
- SEO optimized
- Between 40-60 characters
- Relevant to the content

Return only a JSON array of 3 title strings, no additional text.`;

  const userPrompt = `Document content: ${document.extracted_text.substring(0, 3000)}
${prompt ? `\nUser prompt: ${prompt}` : ""}

Generate 3 blog titles based on this content.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${openaiApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  const titles = JSON.parse(data.choices[0].message.content);

  return new Response(
    JSON.stringify({ titles }),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    }
  );
}

async function generateContent(req: Request): Promise<Response> {
  const { documentId, selectedTitle, prompt }: GenerateContentRequest = await req.json();

  // Get document content
  const { data: document, error } = await supabase
    .from("documents")
    .select("extracted_text")
    .eq("id", documentId)
    .single();

  if (error || !document) {
    throw new Error("Document not found");
  }

  const systemPrompt = `You are a professional blog writer. Create a comprehensive, well-structured blog post based on the provided document content, title, and optional user prompt. 

Requirements:
- Write in a professional, engaging tone
- Include proper headings and structure
- Cite information from the source document
- Make it SEO-friendly
- Include relevant examples where appropriate
- Aim for 800-1500 words

Return a JSON object with:
{
  "content": "Full blog post content in markdown format",
  "excerpt": "Brief 150-200 character summary",
  "tags": ["tag1", "tag2", "tag3"],
  "seo_title": "SEO optimized title (50-60 chars)",
  "seo_description": "Meta description (150-160 chars)"
}`;

  const userPrompt = `Title: ${selectedTitle}
Document content: ${document.extracted_text.substring(0, 4000)}
${prompt ? `\nAdditional instructions: ${prompt}` : ""}

Generate a complete blog post based on this information.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${openaiApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  const blogContent = JSON.parse(data.choices[0].message.content);

  return new Response(
    JSON.stringify(blogContent),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    }
  );
}

serve(handler);
