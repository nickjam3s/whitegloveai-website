
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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!openaiApiKey) {
    console.error("OpenAI API key not configured");
    return new Response(
      JSON.stringify({ error: "OpenAI API key not configured" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const body = await req.json();
    const { action } = body;

    console.log('AI Blog Generator called with action:', action);
    console.log('Request body:', JSON.stringify(body, null, 2));

    switch (action) {
      case 'generate-titles':
        return await generateTitles(body);
      case 'generate-outline':
        return await generateOutline(body);
      case 'generate-content':
        return await generateContent(body);
      default:
        console.error("Invalid action:", action);
        return new Response(
          JSON.stringify({ error: "Invalid action. Must be 'generate-titles', 'generate-outline', or 'generate-content'" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
    }
  } catch (error: any) {
    console.error("Error in AI Blog Generator:", error);
    console.error("Error stack:", error.stack);
    return new Response(
      JSON.stringify({ 
        error: error.message || "An unexpected error occurred",
        details: error.stack || "No stack trace available"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

async function generateTitles(body: any): Promise<Response> {
  const { suggestedTitle, seedPrompt, documentIds = [], urls = [], useOpenResearch } = body;

  console.log('Generating titles with:', { suggestedTitle, seedPrompt, documentIds, urls, useOpenResearch });

  if (!seedPrompt || seedPrompt.trim() === '') {
    console.error("Seed prompt is required but not provided");
    return new Response(
      JSON.stringify({ error: "Seed prompt is required" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Collect context from various sources
    let contextContent = "";
    
    // Add document content if available
    if (documentIds.length > 0) {
      const { data: documents, error: docError } = await supabase
        .from("documents")
        .select("extracted_text, original_name")
        .in("id", documentIds);
      
      if (docError) {
        console.error("Error fetching documents:", docError);
      } else if (documents) {
        contextContent += "\n\nDocument Content:\n";
        documents.forEach(doc => {
          contextContent += `From ${doc.original_name}:\n${doc.extracted_text}\n\n`;
        });
      }
    }

    // Add URL content (basic placeholder - in production you'd implement web scraping)
    if (urls.length > 0) {
      contextContent += "\n\nURL References:\n";
      urls.forEach((url: string) => {
        contextContent += `- ${url}\n`;
      });
    }

    const systemPrompt = `You are a professional blog title generator. Based on the provided information, generate 5 compelling, SEO-friendly blog titles. Each title should be:
- Engaging and click-worthy
- SEO optimized with relevant keywords
- Between 40-70 characters
- Relevant to the content and prompt

Return only a JSON array of 5 title strings, no additional text.`;

    let userPrompt = `Seed Prompt: ${seedPrompt}`;
    
    if (suggestedTitle) {
      userPrompt += `\nSuggested Title Direction: ${suggestedTitle}`;
    }
    
    if (contextContent) {
      userPrompt += `\nContext:${contextContent.substring(0, 3000)}`;
    }
    
    if (useOpenResearch) {
      userPrompt += `\nNote: Use current trends and web research to make titles more relevant and timely.`;
    }

    userPrompt += `\n\nGenerate 5 diverse blog titles based on this information.`;

    console.log('Making OpenAI request for titles...');
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
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('OpenAI response:', JSON.stringify(data, null, 2));
    
    if (!data.choices?.[0]?.message?.content) {
      console.error("No content in OpenAI response");
      throw new Error("No titles generated from OpenAI");
    }

    let titles;
    try {
      titles = JSON.parse(data.choices[0].message.content);
    } catch (parseError) {
      console.error("Error parsing OpenAI response as JSON:", parseError);
      console.error("Raw content:", data.choices[0].message.content);
      throw new Error("Failed to parse generated titles");
    }

    if (!Array.isArray(titles)) {
      console.error("Generated titles is not an array:", titles);
      throw new Error("Generated titles format is invalid");
    }

    console.log('Successfully generated titles:', titles);
    return new Response(
      JSON.stringify({ titles }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in generateTitles:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to generate titles",
        details: error.stack || "No additional details"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}

async function generateOutline(body: any): Promise<Response> {
  const { selectedTitle, seedPrompt, suggestedTitle } = body;

  console.log('Generating outline for:', selectedTitle);

  if (!selectedTitle || !seedPrompt) {
    return new Response(
      JSON.stringify({ error: "Selected title and seed prompt are required" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const systemPrompt = `You are a professional blog writer. Create a detailed, structured outline for a blog post. The outline should include:
- Introduction hook and thesis
- 3-5 main sections with subsections
- Key points to cover in each section
- Conclusion strategy
- Suggested word count for each section

Return the outline in a clear, structured format that can be edited by the user.`;

    const userPrompt = `Blog Title: ${selectedTitle}
Original Prompt: ${seedPrompt}
${suggestedTitle ? `Original Title Idea: ${suggestedTitle}` : ''}

Create a comprehensive blog outline for this topic.`;

    console.log('Making OpenAI request for outline...');
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

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("No outline generated from OpenAI");
    }

    const outline = data.choices[0].message.content;
    console.log('Successfully generated outline');

    return new Response(
      JSON.stringify({ outline }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in generateOutline:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to generate outline",
        details: error.stack || "No additional details"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}

async function generateContent(body: any): Promise<Response> {
  const { selectedTitle, approvedOutline, seedPrompt } = body;

  console.log('Generating content for:', selectedTitle);

  if (!selectedTitle || !approvedOutline || !seedPrompt) {
    return new Response(
      JSON.stringify({ error: "Selected title, approved outline, and seed prompt are required" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const systemPrompt = `You are a professional blog writer. Create a comprehensive, well-structured blog post based on the provided title, outline, and original prompt. 

Requirements:
- Write in a professional, engaging tone
- Follow the approved outline structure
- Include proper headings and subheadings
- Make it SEO-friendly with natural keyword integration
- Include relevant examples and actionable insights
- Aim for 1200-2000 words
- Use markdown formatting

Return a JSON object with:
{
  "content": "Full blog post content in markdown format",
  "excerpt": "Compelling 150-200 character summary",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "seo_title": "SEO optimized title (50-60 chars)",
  "seo_description": "Meta description (150-160 chars)"
}`;

    const userPrompt = `Title: ${selectedTitle}

Approved Outline:
${approvedOutline}

Original Prompt Context: ${seedPrompt}

Generate a complete, high-quality blog post following this outline.`;

    console.log('Making OpenAI request for content...');
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

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("No content generated from OpenAI");
    }

    let blogContent;
    try {
      blogContent = JSON.parse(data.choices[0].message.content);
    } catch (parseError) {
      console.error("Error parsing OpenAI response as JSON:", parseError);
      console.error("Raw content:", data.choices[0].message.content);
      throw new Error("Failed to parse generated content");
    }

    console.log('Successfully generated content');
    return new Response(
      JSON.stringify(blogContent),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in generateContent:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to generate content",
        details: error.stack || "No additional details"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}

serve(handler);
