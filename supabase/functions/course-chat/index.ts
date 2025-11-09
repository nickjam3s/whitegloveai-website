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

    const courseCatalog = `COMPLETE COURSE CATALOG (62 Courses):

FEATURED CERTIFICATIONS:
1. AI+ Chief AI Officer - 1 Day, Intermediate, Business
2. AI+ Foundation - 5 Days, Foundation, Essential  
3. AI+ Government - 1 Day, Foundation, Specialization

AVAILABLE COURSES (54):
- AI+ Architect (5 Days, Advanced, Cloud)
- AI+ Audio (1 Day, Intermediate, Design and Creative)
- AI+ Business Intelligence (5 Days, Intermediate, Data & Robotics)
- AI+ Cloud (5 Days, Intermediate, Cloud)
- AI+ Customer Service (1 Day, Foundation, Business)
- AI+ Data (5 Days, Foundation, Data & Robotics)
- AI+ Data Agent (1 Day, Intermediate, Data & Robotics)
- AI+ Design (1 Day, Foundation, Design & Creative)
- AI+ Developer (5 Days, Advanced, Development)
- AI+ Doctor (1 Day, Intermediate, Specialization)
- AI+ Educator (1 Day, Foundation, Learning & Education)
- AI+ Engineer (5 Days, Advanced, Development)
- AI+ Ethical Hacker (5 Days, Intermediate, Security)
- AI+ Ethics (1 Day, Foundation, Business)
- AI+ Everyone (1 Day, Foundation, Essential)
- AI+ Executive (1 Day, Foundation, Essential)
- AI+ Finance (1 Day, Foundation, Business)
- AI+ Game Design Agent (1 Day, Intermediate, Design and Creative)
- AI+ Gaming (1 Day, Intermediate, Design and Creative)
- AI+ Healthcare (1 Day, Foundation, Specialization)
- AI+ Human Resource (1 Day, Foundation, Business)
- AI+ Learning & Development (1 Day, Foundation, Learning & Education)
- AI+ Legal (1 Day, Foundation, Business)
- AI+ Legal Agent (1 Day, Intermediate, Business)
- AI+ Marketing (1 Day, Foundation, Business)
- AI+ Mining (1 Day, Intermediate, Specialization)
- AI+ Network (5 Days, Intermediate, Security)
- AI+ Product Manager (1 Day, Intermediate, Business)
- AI+ Project Manager (1 Day, Intermediate, Business)
- AI+ Prompt Engineer Level 1 (1 Day, Foundation, Essential)
- AI+ Prompt Engineer Level 2 (5 Days, Advanced, Development)
- AI+ Quality Assurance (5 Days, Intermediate, Data & Robotics)
- AI+ Quantum (5 Days, Intermediate, Data & Robotics)
- AI+ Real Estate (1 Day, Foundation, Business)
- AI+ Researcher (1 Day, Foundation, Business)
- AI+ Robotics (5 Days, Intermediate, Data & Robotics)
- AI+ Sales (1 Day, Foundation, Business)
- AI+ Security Compliance (5 Days, Intermediate, Security)
- AI+ Security Level 1 (5 Days, Foundation, Security)
- AI+ Security Level 2 (5 Days, Intermediate, Security)
- AI+ Security Level 3 (5 Days, Advanced, Security)
- AI+ Supply Chain (1 Day, Intermediate, Business)
- AI+ Telecommunications (5 Days, Intermediate, Specialization)
- AI+ UX Designer (1 Day, Intermediate, Design & Creative)
- AI+ Vibe Coder (1 Day, Intermediate, Essential)
- AI+ Writer (1 Day, Foundation, Business)
- Bitcoin+ Developer (5 Days, Advanced, Blockchain & Bitcoin)
- Bitcoin+ Everyone (1 Day, Foundation, Blockchain & Bitcoin)
- Bitcoin+ Executive (1 Day, Foundation, Blockchain & Bitcoin)
- Bitcoin+ Security (5 Days, Intermediate, Blockchain & Bitcoin)
- Blockchain+ Developer (5 Days, Advanced, Blockchain & Bitcoin)
- Blockchain+ Executive (1 Day, Foundation, Blockchain & Bitcoin)

COMING SOON (8 Courses):
- AI+ Agent Builder (1 Day, Intermediate, Essential)
- AI+ Finance Agent (1 Day, Intermediate, Business)
- AI+ Healthcare Administrator (1 Day, Intermediate, Specialization)
- AI+ Medical Assistant (1 Day, Intermediate, Specialization)
- AI+ Nurse (1 Day, Intermediate, Specialization)
- AI+ Policy Maker (1 Day, Intermediate, Specialization)
- AI+ Sustainability (1 Day, Intermediate, Specialization)
- AI+ Video (1 Day, Intermediate, Design and Creative)

PRACTICE AREAS: Business (20), Essential (5), Security (7), Data & Robotics (7), Development (4), Specialization (9), Design & Creative/Design and Creative (7), Cloud (2), Learning & Education (2), Blockchain & Bitcoin (6)

DURATION: 1 Day (39 courses) or 5 Days (23 courses)
LEVELS: Foundation (23), Intermediate (28), Advanced (12)`;

    // Build system prompt with course context
    const systemPrompt = `You are an AI Course Advisor for WhitegloveAI's training programs powered by AICerts certifications.

Your role is to help users find the perfect AI certification course based on their needs, background, and career goals.

${courseCatalog}

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
2. Then recommend 3-5 specific courses from the catalog above
3. Keep responses brief and conversational
4. No markdown formatting`}`;

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
