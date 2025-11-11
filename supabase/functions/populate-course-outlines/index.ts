import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );

    const courseOutlines = [
      { course_slug: 'ai-plus-chief-ai-officer', course_name: 'AI+ Chief AI Officer', pdf_filename: 'AI+ Chief AI Officer Detailed Curriculum.pdf', pdf_url: 'AI+ Chief AI Officer Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-foundation', course_name: 'AI+ Foundation', pdf_filename: 'AI+ Foundation Detailed Curriculum.pdf', pdf_url: 'AI+ Foundation Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-government', course_name: 'AI+ Government', pdf_filename: 'AI+ Government Detailed Curriculum.pdf', pdf_url: 'AI+ Government Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-architect', course_name: 'AI+ Architect', pdf_filename: 'AI+ Architect Detailed Curriculum.pdf', pdf_url: 'AI+ Architect Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-business-intelligence', course_name: 'AI+ Business Intelligence', pdf_filename: 'AI+ Business Intelligence Detailed Curriculum.pdf', pdf_url: 'AI+ Business Intelligence Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-cloud', course_name: 'AI+ Cloud', pdf_filename: 'AI+ Cloud Detailed Curriculum.pdf', pdf_url: 'AI+ Cloud Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-customer-service', course_name: 'AI+ Customer Service', pdf_filename: 'AI+ Customer Service Detailed Curriculum.pdf', pdf_url: 'AI+ Customer Service Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-data', course_name: 'AI+ Data', pdf_filename: 'AI+ Data Detailed Curriculum.pdf', pdf_url: 'AI+ Data Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-data-agent', course_name: 'AI+ Data Agent', pdf_filename: 'AI+ Data Agent Detailed Curriculum.pdf', pdf_url: 'AI+ Data Agent Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-design', course_name: 'AI+ Design', pdf_filename: 'AI+ Design Detailed Curriculum.pdf', pdf_url: 'AI+ Design Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-developer', course_name: 'AI+ Developer', pdf_filename: 'AI+ Developer Detailed Curriculum.pdf', pdf_url: 'AI+ Developer Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-doctor', course_name: 'AI+ Doctor', pdf_filename: 'AI+ Doctor Detailed Curriculum.pdf', pdf_url: 'AI+ Doctor Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-educator', course_name: 'AI+ Educator', pdf_filename: 'AI+ Educator Detailed Curriculum.pdf', pdf_url: 'AI+ Educator Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-engineer', course_name: 'AI+ Engineer', pdf_filename: 'AI+ Engineer Detailed Curriculum.pdf', pdf_url: 'AI+ Engineer Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-ethical-hacker', course_name: 'AI+ Ethical Hacker', pdf_filename: 'AI+ Ethical Hacker Detailed Curriculum.pdf', pdf_url: 'AI+ Ethical Hacker Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-ethics', course_name: 'AI+ Ethics', pdf_filename: 'AI+ Ethics Detailed Curriculum.pdf', pdf_url: 'AI+ Ethics Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-everyone', course_name: 'AI+ Everyone', pdf_filename: 'AI+ Everyone Detailed Curriculum.pdf', pdf_url: 'AI+ Everyone Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-executive', course_name: 'AI+ Executive', pdf_filename: 'AI+ Executive Detailed Curriculum.pdf', pdf_url: 'AI+ Executive Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-finance', course_name: 'AI+ Finance', pdf_filename: 'AI+ Finance Detailed Curriculum.pdf', pdf_url: 'AI+ Finance Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-healthcare', course_name: 'AI+ Healthcare', pdf_filename: 'AI+ Healthcare Detailed Curriculum.pdf', pdf_url: 'AI+ Healthcare Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-human-resource', course_name: 'AI+ Human Resource', pdf_filename: 'AI+ HR Detailed Curriculum (1).pdf', pdf_url: 'AI+ HR Detailed Curriculum (1).pdf' },
      { course_slug: 'ai-plus-learning-and-development', course_name: 'AI+ Learning & Development', pdf_filename: 'AI+ L&D Detailed Curriculum (1).pdf', pdf_url: 'AI+ L&D Detailed Curriculum (1).pdf' },
      { course_slug: 'ai-plus-legal', course_name: 'AI+ Legal', pdf_filename: 'AI+ Legal Detailed Curriculum.pdf', pdf_url: 'AI+ Legal Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-legal-agent', course_name: 'AI+ Legal Agent', pdf_filename: 'AI+ Legal Agent Detailed Curriculum.pdf', pdf_url: 'AI+ Legal Agent Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-marketing', course_name: 'AI+ Marketing', pdf_filename: 'AI+ Marketing Detailed Curriculum.pdf', pdf_url: 'AI+ Marketing Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-network', course_name: 'AI+ Network', pdf_filename: 'AI+ Network Detailed Curriculum.pdf', pdf_url: 'AI+ Network Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-product-manager', course_name: 'AI+ Product Manager', pdf_filename: 'AI+ Product Manager Detailed Curriculum.pdf', pdf_url: 'AI+ Product Manager Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-project-manager', course_name: 'AI+ Project Manager', pdf_filename: 'AI+ Project Manager Detailed Curriculum.pdf', pdf_url: 'AI+ Project Manager Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-prompt-engineer-level-1', course_name: 'AI+ Prompt Engineer Level 1', pdf_filename: 'AI+ Prompt Engineering Level 1 Detailed Curriculum.pdf', pdf_url: 'AI+ Prompt Engineering Level 1 Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-prompt-engineer-level-2', course_name: 'AI+ Prompt Engineer Level 2', pdf_filename: 'AI+ Prompt Engineer Level 2 Detailed Curriculum.pdf', pdf_url: 'AI+ Prompt Engineer Level 2 Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-quality-assurance', course_name: 'AI+ Quality Assurance', pdf_filename: 'AI+ Quality Assurance Detailed Curriculum.pdf', pdf_url: 'AI+ Quality Assurance Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-quantum', course_name: 'AI+ Quantum', pdf_filename: 'AI+ Quantum Detailed Curriculum.pdf', pdf_url: 'AI+ Quantum Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-real-estate', course_name: 'AI+ Real Estate', pdf_filename: 'AI+ Real Estate Detailed Curriculum.pdf', pdf_url: 'AI+ Real Estate Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-researcher', course_name: 'AI+ Researcher', pdf_filename: 'AI+ Researcher Detailed Curriculum.pdf', pdf_url: 'AI+ Researcher Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-robotics', course_name: 'AI+ Robotics', pdf_filename: 'AI+ Robotics Detailed Curriculum.pdf', pdf_url: 'AI+ Robotics Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-sales', course_name: 'AI+ Sales', pdf_filename: 'AI+ Sales Detailed Curriculum.pdf', pdf_url: 'AI+ Sales Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-security-compliance', course_name: 'AI+ Security Compliance', pdf_filename: 'AI+ Security Compliance Detailed Curriculum.pdf', pdf_url: 'AI+ Security Compliance Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-security-level-1', course_name: 'AI+ Security Level 1', pdf_filename: 'AI+ Security Level 1 Detailed Curriculum.pdf', pdf_url: 'AI+ Security Level 1 Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-security-level-2', course_name: 'AI+ Security Level 2', pdf_filename: 'AI+ Security Level 2 Detailed Curriculum.pdf', pdf_url: 'AI+ Security Level 2 Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-security-level-3', course_name: 'AI+ Security Level 3', pdf_filename: 'AI+ Security Level 3 Detailed Curriculum.pdf', pdf_url: 'AI+ Security Level 3 Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-supply-chain', course_name: 'AI+ Supply Chain', pdf_filename: 'AI+ Supply Chain Detailed Curriculum.pdf', pdf_url: 'AI+ Supply Chain Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-ux-designer', course_name: 'AI+ UX Designer', pdf_filename: 'AI+ UX Designer Detailed Curriculum.pdf', pdf_url: 'AI+ UX Designer Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-writer', course_name: 'AI+ Writer', pdf_filename: 'AI+ Writer Detailed Curriculum.pdf', pdf_url: 'AI+ Writer Detailed Curriculum.pdf' },
      { course_slug: 'bitcoin-plus-developer', course_name: 'Bitcoin+ Developer', pdf_filename: 'Bitcoin+ Developer Detailed Curriculum.pdf', pdf_url: 'Bitcoin+ Developer Detailed Curriculum.pdf' },
      { course_slug: 'bitcoin-plus-everyone', course_name: 'Bitcoin+ Everyone', pdf_filename: 'Bitcoin+ Everyone Detailed Curriculum.pdf', pdf_url: 'Bitcoin+ Everyone Detailed Curriculum.pdf' },
      { course_slug: 'bitcoin-plus-executive', course_name: 'Bitcoin+ Executive', pdf_filename: 'Bitcoin+ Executive Detailed Curriculum.pdf', pdf_url: 'Bitcoin+ Executive Detailed Curriculum.pdf' },
      { course_slug: 'bitcoin-plus-security', course_name: 'Bitcoin+ Security', pdf_filename: 'Bitcoin+ Security Detailed Curriculum.pdf', pdf_url: 'Bitcoin+ Security Detailed Curriculum.pdf' },
      { course_slug: 'blockchain-plus-developer', course_name: 'Blockchain+ Developer', pdf_filename: 'Blockchain+ Developer Detailed Curriculum.pdf', pdf_url: 'Blockchain+ Developer Detailed Curriculum.pdf' },
      { course_slug: 'blockchain-plus-executive', course_name: 'Blockchain+ Executive', pdf_filename: 'Blockchain+ Executive Detailed Curriculum.pdf', pdf_url: 'Blockchain+ Executive Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-finance-agent', course_name: 'AI+ Finance Agent', pdf_filename: 'AI+ Finance Agent Detailed Curriculum.pdf', pdf_url: 'AI+ Finance Agent Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-nurse', course_name: 'AI+ Nurse', pdf_filename: 'AI+ Nurse Detailed Curriculum.pdf', pdf_url: 'AI+ Nurse Detailed Curriculum.pdf' },
      { course_slug: 'ai-plus-policy-maker', course_name: 'AI+ Policy Maker', pdf_filename: 'AI+ Policy Maker Detailed Curriculum.pdf', pdf_url: 'AI+ Policy Maker Detailed Curriculum.pdf' }
    ];

    console.log(`Attempting to insert ${courseOutlines.length} course outlines`);

    const { data, error } = await supabaseClient
      .from('course_outlines')
      .upsert(courseOutlines, { onConflict: 'course_slug' });

    if (error) {
      console.error('Error inserting course outlines:', error);
      throw error;
    }

    console.log('Successfully populated course outlines');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Successfully populated ${courseOutlines.length} course outlines`,
        count: courseOutlines.length 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
