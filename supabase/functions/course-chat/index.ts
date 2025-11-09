import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory, resumeFile, fileName } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Build system prompt with course context
    const systemPrompt = `You are a helpful AI course advisor for WhitegloveAI's training programs. 

IMPORTANT FORMATTING RULES:
- DO NOT use any markdown formatting (no **, *, -, bullets, or special characters)
- Write in plain text only
- Use simple numbered lists when needed (1. 2. 3.)
- Keep responses concise and direct

${resumeFile ? `RESUME UPLOADED - IMMEDIATE RECOMMENDATIONS REQUIRED:
When a resume is uploaded, you MUST:
1. Immediately provide exactly 5 course recommendations based on the resume
2. List them in order of relevance (most relevant first)
3. For each course, briefly explain why it matches their background (1-2 sentences max)
4. Do NOT ask follow-up questions
5. Format as: "Course Name - Why it's relevant"

Example format:
"Based on your resume, here are my top 5 course recommendations:

1. AI+ Chief AI Officer - Your leadership experience makes you ideal for this strategic AI role
2. AI+ Developer - Your technical background aligns perfectly with AI development
3. AI+ Marketing - Your marketing experience can be enhanced with AI capabilities
4. AI+ Foundation - Essential groundwork for your AI journey
5. AI+ Business Intelligence - Your data experience pairs well with AI analytics

Each course leads to industry-recognized certification through AICerts."` : `When helping users without a resume:
1. Ask 2-3 brief qualifying questions about their industry, role, and experience
2. Then recommend 3-5 specific courses
3. Keep responses brief and conversational
4. No markdown formatting`}

Our course catalog includes: AI+ Chief AI Officer, AI+ Foundation, AI+ Government, AI+ Marketing, AI+ Developer, AI+ Finance, AI+ HR, AI+ Legal, AI+ Healthcare, AI+ Education, AI+ Security, AI+ Data, and many more specialized certifications.`;

    // Build messages array
    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: "user", content: message }
    ];

    // Add resume content if provided
    if (resumeFile && fileName) {
      messages.push({
        role: "user",
        content: `[Resume uploaded: ${fileName}. Analyze the following resume and recommend relevant AI certification courses based on the candidate's background, skills, and experience. Note: Resume content would be parsed here in production.]`
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: messages,
        temperature: 0.7,
        max_completion_tokens: 1000
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ 
          error: "Rate limit exceeded. Please try again in a moment." 
        }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ 
          error: "AI service temporarily unavailable. Please contact support." 
        }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    let assistantMessage = data.choices[0].message.content;

    // Strip any remaining markdown formatting
    assistantMessage = assistantMessage
      .replace(/\*\*/g, '') // Remove bold
      .replace(/\*/g, '')   // Remove italics
      .replace(/#{1,6}\s/g, '') // Remove headers
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links but keep text
      .replace(/`{1,3}[^`]*`{1,3}/g, '') // Remove code blocks
      .replace(/^\s*[-•]\s/gm, ''); // Remove bullet points

    return new Response(
      JSON.stringify({ response: assistantMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in course-chat:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
