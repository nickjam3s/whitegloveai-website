
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

    switch (action) {
      case 'generate-titles':
        return await generateTitles(body);
      case 'generate-outline':
        return await generateOutline(body);
      case 'generate-content':
        return await generateContent(body);
      default:
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

async function generateTitles(body: any): Promise<Response> {
  const { suggestedTitle, seedPrompt, documentIds = [], urls = [], useOpenResearch } = body;

  console.log('Generating titles with:', { suggestedTitle, seedPrompt, documentIds, urls, useOpenResearch });

  // Collect context from various sources
  let contextContent = "";
  
  // Add document content if available
  if (documentIds.length > 0) {
    const { data: documents } = await supabase
      .from("documents")
      .select("extracted_text, original_name")
      .in("id", documentIds);
    
    if (documents) {
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

  const data = await response.json();
  
  if (!data.choices?.[0]?.message?.content) {
    throw new Error("No titles generated");
  }

  const titles = JSON.parse(data.choices[0].message.content);

  return new Response(
    JSON.stringify({ titles }),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    }
  );
}

async function generateOutline(body: any): Promise<Response> {
  const { selectedTitle, seedPrompt, suggestedTitle } = body;

  console.log('Generating outline for:', selectedTitle);

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
  
  if (!data.choices?.[0]?.message?.content) {
    throw new Error("No outline generated");
  }

  const outline = data.choices[0].message.content;

  return new Response(
    JSON.stringify({ outline }),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    }
  );
}

async function generateContent(body: any): Promise<Response> {
  const { selectedTitle, approvedOutline, seedPrompt } = body;

  console.log('Generating content for:', selectedTitle);

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
  
  if (!data.choices?.[0]?.message?.content) {
    throw new Error("No content generated");
  }

  const blogContent = JSON.parse(data.choices[0].message.content);

  return new Response(
    JSON.stringify(blogContent),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    }
  );
}

serve(handler);
