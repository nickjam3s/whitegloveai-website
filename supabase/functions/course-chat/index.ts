import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory, resumeFile, fileName, showOptions, skipInterview, interviewMode, interviewCount, resumeUploaded } = await req.json();
    
    // Server-side input validation
    if (message && typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Invalid message format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (message && message.length > 2000) {
      return new Response(
        JSON.stringify({ error: 'Message too long (max 2000 characters)' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check for potential injection patterns
    const dangerousPatterns = /<script|javascript:|onerror=|onclick=|<iframe|eval\(/i;
    if (message && dangerousPatterns.test(message)) {
      return new Response(
        JSON.stringify({ error: 'Invalid characters detected in message' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate file name if provided
    if (fileName) {
      if (typeof fileName !== 'string' || fileName.length > 255) {
        return new Response(
          JSON.stringify({ error: 'Invalid file name' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check file extension
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
      if (!allowedExtensions.includes(fileExtension)) {
        return new Response(
          JSON.stringify({ error: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed.' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check for double extensions (security risk)
      const extensionCount = (fileName.match(/\./g) || []).length;
      if (extensionCount > 1) {
        return new Response(
          JSON.stringify({ error: 'Files with multiple extensions are not allowed' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Validate conversation history
    if (conversationHistory && !Array.isArray(conversationHistory)) {
      return new Response(
        JSON.stringify({ error: 'Invalid conversation history format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    // Fetch course outlines with metadata
    const { data: courseOutlines, error: outlinesError } = await supabase
      .from('course_outlines')
      .select('course_name, course_slug, metadata');

    if (outlinesError) {
      console.error('Error fetching course outlines:', outlinesError);
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

    // Build enhanced course details from metadata
    let enhancedCourseDetails = '';
    if (courseOutlines && courseOutlines.length > 0) {
      const coursesWithMetadata = courseOutlines.filter(c => c.metadata && Object.keys(c.metadata).length > 0);
      
      if (coursesWithMetadata.length > 0) {
        enhancedCourseDetails = `\n\nDETAILED COURSE INFORMATION (${coursesWithMetadata.length} courses with enhanced details):\n`;
        
        coursesWithMetadata.forEach(course => {
          const meta = course.metadata as any;
          enhancedCourseDetails += `\n${course.course_name}:\n`;
          
          if (meta.level) enhancedCourseDetails += `  Level: ${meta.level}\n`;
          if (meta.duration) enhancedCourseDetails += `  Duration: ${meta.duration}\n`;
          if (meta.target_audience) enhancedCourseDetails += `  Target Audience: ${meta.target_audience}\n`;
          
          if (meta.objectives && meta.objectives.length > 0) {
            enhancedCourseDetails += `  Learning Objectives:\n`;
            meta.objectives.slice(0, 5).forEach((obj: string, idx: number) => {
              enhancedCourseDetails += `    ${idx + 1}. ${obj}\n`;
            });
          }
          
          if (meta.key_topics && meta.key_topics.length > 0) {
            enhancedCourseDetails += `  Key Topics: ${meta.key_topics.join(', ')}\n`;
          }
          
          if (meta.prerequisites && meta.prerequisites.length > 0) {
            enhancedCourseDetails += `  Prerequisites: ${meta.prerequisites.join(', ')}\n`;
          }
          
          if (meta.modules && meta.modules.length > 0) {
            enhancedCourseDetails += `  Course Modules:\n`;
            meta.modules.forEach((mod: any, idx: number) => {
              enhancedCourseDetails += `    ${idx + 1}. ${mod.title}\n`;
              if (mod.topics && mod.topics.length > 0) {
                enhancedCourseDetails += `       Topics: ${mod.topics.slice(0, 4).join(', ')}\n`;
              }
            });
          }
          
          if (meta.certification) {
            enhancedCourseDetails += `  Certification: ${meta.certification}\n`;
          }
        });
      }
    }

    const courseCatalogWithDetails = courseCatalog + enhancedCourseDetails;

    // Build system prompt based on context
    let systemPrompt = `You are an AI Course Advisor for WhitegloveAI's nationally accredited AI training programs, delivered through ProTrain, a Middle States (MSA-CESS) accredited educational institution.

Your role is to help users find the perfect AI certification course based on their needs, background, and career goals.

${courseCatalogWithDetails}

IMPORTANT FORMATTING RULES:
- DO NOT use any markdown formatting (no **, *, -, bullets, or special characters)
- Write in plain text only
- Use simple numbered lists when needed (1. 2. 3.)
- Keep responses concise and direct

CRITICAL DIR COMPLIANCE DISCLAIMER:
- WhitegloveAI's training programs are designed to align with the substantive requirements and scope of Texas HB3512
- These programs are NOT approved, endorsed, or certified by the Texas Department of Information Resources (DIR)
- As of now, DIR has not selected any vendors for HB3512 compliance training
- When discussing HB3512 or Texas AI training requirements, always clarify that our programs meet the law's requirements but are not DIR-approved
- All courses are TXShare-approved (Contract #2025-023), enabling streamlined procurement for Texas public agencies through the North Central Texas Council of Governments
- Never imply or state that WhitegloveAI is DIR-approved or DIR-certified

TEXAS HB3512 CONTEXT:
- Texas HB3512 mandates annual DIR-certified AI and cybersecurity training for Texas government employees who use computers for 25% or more of their job
- Law is fully effective September 1, 2025
- Applies to state agencies, local governments, school districts, and grant applicants
- WhitegloveAI offers comprehensive AI training programs that align with these requirements

TRAINING ACCREDITATION & QUALITY (CRITICAL KNOWLEDGE):

PROTRAIN PARTNERSHIP:
- WhitegloveAI delivers all AI training and certification programs through ProTrain, LLC
- ProTrain is a nationally accredited educational institution based in North Carolina
- Accrediting body: Middle States Association Commissions on Elementary and Secondary Schools (MSA-CESS)
- MSA-CESS is a recognized national accrediting body for educational institutions
- ProTrain provides: course content, learning platform, student support, certification issuance, and quality assurance
- WhitegloveAI handles: marketing, sales, customer relationships, and government/enterprise compliance support

WHAT MSA-CESS ACCREDITATION MEANS:
- Programs meet rigorous national standards for curriculum quality and design
- Instructors meet qualification and expertise requirements
- Student support services are provided
- Educational outcomes are assessed and validated
- Institutional integrity and financial stability are verified
- Recognized by government agencies and enterprises for professional development

CERTIFICATION INFORMATION:
- Certifications are issued upon successful completion of courses and exams
- Certificates include learner name, completion date, course title, and ProTrain accreditation reference
- Certifications demonstrate validated competency in specific AI domains
- Recognized by government agencies, enterprises, and professional organizations

GOVERNMENT/ENTERPRISE VALUE PROPOSITION:
- Nationally Accredited: Delivered through MSA-CESS accredited institution meeting federal and state professional development standards
- TXShare Approved: Streamlined procurement for Texas agencies through Contract #2025-023
- HB3512 Aligned: Designed specifically for Texas government AI training requirements
- Audit-Ready: Complete compliance tracking and certification documentation
- Flexible Delivery: Self-paced online and instructor-led options available

IACET STATUS:
- IACET accreditation is expected in January 2026
- Once obtained, courses will offer Continuing Education Units (CEUs)
- Currently, certificates of completion from a nationally accredited institution satisfy many professional development requirements

COMMON QUESTIONS - USE THESE RESPONSES:

When asked "Are your certifications accredited?":
Answer: "Yes, all WhitegloveAI training programs are delivered through ProTrain, a nationally accredited educational institution recognized by Middle States Association (MSA-CESS). This accreditation ensures our programs meet rigorous national standards for curriculum quality, instructor qualifications, and educational outcomes. Our certifications are recognized by government agencies and enterprises nationwide for professional development and skill validation."

When asked "Who is ProTrain?":
Answer: "ProTrain is WhitegloveAI's educational partner, a nationally accredited institution (MSA-CESS) that delivers our AI training and certification programs. ProTrain provides the learning platform, course content, student support, and certification issuance, while WhitegloveAI handles marketing, sales, and integration with our other AI services. This partnership ensures you receive high-quality, accredited training backed by institutional standards."

When asked "What is MSA-CESS?":
Answer: "MSA-CESS (Middle States Association Commissions on Elementary and Secondary Schools) is a recognized national accrediting body for educational institutions. ProTrain's MSA-CESS accreditation means the institution meets rigorous standards for educational quality, curriculum design, instructor qualifications, and student outcomes. This accreditation is recognized by government agencies and enterprises for professional development requirements."

When asked "Will my certificate be recognized by my employer/agency?":
Answer: "Yes, our certifications are widely recognized by government agencies and enterprises for professional development and skill validation. The training is delivered through a nationally accredited institution (ProTrain/MSA-CESS), which satisfies many organizational requirements for accredited training. Additionally, our certifications demonstrate validated competency in specific AI domains, making them valuable for career advancement."

When asked "Does this meet HB3512 requirements?":
Answer: "Yes, WhitegloveAI's training programs are specifically designed to align with Texas HB3512 AI training requirements for government employees. Our programs are delivered through a nationally accredited institution and are available through TXShare Contract #2025-023 for streamlined procurement by Texas agencies. We provide all necessary documentation and completion tracking for HB3512 compliance reporting. Note that while our programs align with HB3512 requirements, DIR has not yet selected vendors for HB3512 compliance training."

When asked "What makes your training different from other online courses?":
Answer: "WhitegloveAI's training is delivered through ProTrain, a nationally accredited educational institution (MSA-CESS), which means our programs meet rigorous standards for curriculum quality, instructor expertise, and educational outcomes. Unlike many online courses, our training is backed by institutional accreditation, includes comprehensive student support, provides audit-ready completion tracking, and is recognized by government agencies and enterprises for professional development. We also offer TXShare procurement for Texas agencies and specific HB3512 compliance support."

When asked "Can I get CEUs?":
Answer: "Currently, our training provides certificates of completion from a nationally accredited institution (ProTrain/MSA-CESS). We are pursuing IACET accreditation (expected January 2026) which will allow us to offer Continuing Education Units (CEUs) recognized by professional associations and regulatory boards. In the meantime, many organizations accept our certificates for professional development requirements due to the institutional accreditation backing."

When asked about AICerts:
Answer: "AICerts develops the course content that is delivered through our educational partner ProTrain. ProTrain is the nationally accredited institution (MSA-CESS) that provides the learning platform, student support, and issues certifications. WhitegloveAI partners with ProTrain to bring these high-quality, accredited AI training programs to government agencies and enterprises."

MESSAGING RULES - CRITICAL:
- NEVER say "Our certifications are accredited by MSA-CESS" (the institution is accredited, not individual certs)
- NEVER say "We are accredited by MSA-CESS" (ProTrain is accredited, not WhitegloveAI directly)
- NEVER say "AICerts provides our training" (AICerts is content provider to ProTrain)
- NEVER say "These are AICerts certifications" (they are issued through ProTrain)
- ALWAYS say "Training delivered through a nationally accredited institution (ProTrain/MSA-CESS)"
- ALWAYS say "Our programs meet national standards for educational quality"
- ALWAYS say "Certifications backed by institutional accreditation"

TONE AND POSITIONING:
- Be confident about accreditation (this is a key differentiator)
- Focus on what accreditation means for the learner (quality, recognition, standards)
- Emphasize trust, quality, and professional recognition
- For government buyers: emphasize accreditation, HB3512 alignment, TXShare procurement
- For enterprise buyers: emphasize quality, skill validation, professional recognition
- For individual learners: emphasize career value, recognized credentials, quality instruction
`;

    // Handle resume upload with options
    if (showOptions && resumeFile) {
      systemPrompt += `\n\nRESUME RECEIVED - PRESENT OPTIONS:
The user just uploaded their resume. Acknowledge receipt warmly and explain that you can help in two ways:
1. A brief personalized interview (5 questions) to understand their goals and how AI is transforming their industry
2. Immediate recommendations based on their resume

Keep this message brief (2-3 sentences) and welcoming. Do NOT provide recommendations yet.`;
    }
    // Handle interview mode
    else if (interviewMode && !skipInterview && resumeUploaded) {
      const questionNumber = interviewCount + 1;
      systemPrompt += `\n\nINTERVIEW MODE (Question ${questionNumber} of 5):
You are conducting a personalized interview. Based on the resume and previous answers:
1. Ask ONE thoughtful question that:
   - Educates them about how AI is transforming their specific industry/role
   - Helps understand their career goals and aspirations
   - Is conversational and engaging (not interrogative)
   - Builds on their previous answers

2. Question topics by number:
   - Q1: Their current role and how AI is already impacting their industry
   - Q2: Specific challenges they face that AI could help solve
   - Q3: Their career aspirations over the next 2-3 years
   - Q4: Their comfort level with technology and learning new tools
   - Q5: What excites them most about AI opportunities

Keep each question brief (2-3 sentences max) with a gentle educational insight about AI's impact.

${questionNumber === 5 ? 'After their response to this final question, provide 5 personalized course recommendations with explanations.' : ''}`;
    }
    // Handle skip to recommendations
    else if (skipInterview && resumeUploaded) {
      systemPrompt += `\n\nDIRECT RECOMMENDATIONS MODE:
Based on the uploaded resume, provide exactly 5 course recommendations:
1. List them in order of relevance (most relevant first)
2. For each course, briefly explain why it matches their background (1-2 sentences max)
3. Format as: "Course Name - Why it's relevant"
4. End with encouragement about their AI learning journey

Example format:
"Based on your resume, here are my top 5 course recommendations:

1. AI+ Chief AI Officer - Your leadership experience makes you ideal for this strategic AI role
2. AI+ Developer - Your technical background aligns perfectly with AI development
3. AI+ Marketing - Your marketing experience can be enhanced with AI capabilities
4. AI+ Foundation - Essential groundwork for your AI journey
5. AI+ Business Intelligence - Your data experience pairs well with AI analytics

Each course leads to nationally accredited certification through ProTrain, our MSA-CESS accredited educational partner."`;
    }
    // Regular conversation mode
    else {
      systemPrompt += `\n\nWhen helping users without a resume:
1. Ask 2-3 brief qualifying questions about their industry, role, and experience
2. Then recommend 3-5 specific courses from the catalog above
3. Keep responses brief and conversational
4. No markdown formatting`;
    }

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
