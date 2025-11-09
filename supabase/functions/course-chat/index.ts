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
    const systemPrompt = `You are a helpful AI course advisor for WhitegloveAI's training programs. You help visitors find the perfect AI certification based on their needs.

You have access to our complete course catalog which includes certifications in:
- Business domains (Marketing, Finance, HR, Legal, etc.)
- Technical tracks (Developer, Engineer, Data, Cloud, Architect)
- Security (Ethical Hacker, Security Levels 1-3, Security Compliance)
- Essential programs (Foundation, Everyone, Executive, Chief AI Officer)
- Creative roles (Design, Writer, UX Designer)
- Specializations (Government, Healthcare, Education)
- Data & Robotics (Business Intelligence, Quantum, Robotics)
- Blockchain & Bitcoin programs

Course details include:
- Duration: 1 Day or 5 Days
- Levels: Foundation, Intermediate, Advanced
- Status: Available or Coming Soon
- Features: Hands-on labs, certification exams, multiple languages

When helping users:
1. Ask qualifying questions about their industry, role, experience level, and learning goals
2. Recommend 3-5 specific courses that match their needs
3. Explain why each course is a good fit
4. Provide links like: /portal/course-outline/[course-slug] for more details
5. Be conversational and helpful

${resumeFile ? 'The user has uploaded their resume. Analyze their background and recommend courses that align with their experience and career goals.' : ''}

Always be encouraging and emphasize that all recommendations lead to industry-recognized certifications through our partnership with AICerts.`;

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
    const assistantMessage = data.choices[0].message.content;

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
