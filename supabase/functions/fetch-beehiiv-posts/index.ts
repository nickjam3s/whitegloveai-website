
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BeehiivPost {
  id: string;
  title: string;
  subtitle?: string;
  web_url: string;
  thumbnail_url?: string;
  published_at: string;
  content_tags: string[];
}

interface BeehiivApiResponse {
  data: BeehiivPost[];
  page: number;
  limit: number;
  total_count: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('BEEHIIV_API_KEY');
    
    if (!apiKey) {
      throw new Error('BEEHIIV_API_KEY not configured');
    }

    console.log('Fetching Beehiiv posts...');
    
    // Call Beehiiv API directly from server
    const response = await fetch('https://api.beehiiv.com/v2/posts?status=confirmed&limit=50', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Beehiiv API error:', response.status, response.statusText);
      throw new Error(`Beehiiv API error: ${response.status}`);
    }

    const data: BeehiivApiResponse = await response.json();
    console.log('Beehiiv API response received:', data.data?.length, 'posts');

    // Filter posts that contain TRAIGA-related content
    const traiagaPosts = data.data.filter(post => {
      const titleMatch = post.title.toLowerCase().includes('traiga') || 
                        post.title.toLowerCase().includes('texas ai') ||
                        post.title.toLowerCase().includes('ai governance');
      
      const tagMatch = post.content_tags && post.content_tags.some(tag => 
        tag.toLowerCase().includes('traiga') || 
        tag.toLowerCase().includes('ai governance') ||
        tag.toLowerCase().includes('texas ai')
      );
      
      const subtitleMatch = post.subtitle && (
        post.subtitle.toLowerCase().includes('traiga') ||
        post.subtitle.toLowerCase().includes('texas ai') ||
        post.subtitle.toLowerCase().includes('ai governance')
      );

      return titleMatch || tagMatch || subtitleMatch;
    });

    console.log('Filtered TRAIGA posts:', traiagaPosts.length);

    // Transform to our format
    const newsletterEntries = traiagaPosts.map(post => ({
      id: post.id,
      title: post.title,
      thumbnail: post.thumbnail_url || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=180&fit=crop',
      link: post.web_url,
      date: new Date(post.published_at).toISOString().split('T')[0],
      description: post.subtitle || undefined
    }));

    // Return the latest 3 posts
    const result = newsletterEntries.slice(0, 3);
    
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in fetch-beehiiv-posts function:', error);
    
    // Return fallback data on error
    const fallbackData = [
      {
        id: "fallback-1",
        title: "TRAIGA Implementation: What Texas Businesses Need to Know",
        thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=180&fit=crop",
        link: "https://www.linkedin.com/newsletters/ai-executive-insights-7244466745988505600/",
        date: "2024-12-10",
        description: "Essential guidance for Texas businesses preparing for TRAIGA compliance requirements."
      },
      {
        id: "fallback-2", 
        title: "High-Risk AI Systems Under Texas Law",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=320&h=180&fit=crop",
        link: "https://www.linkedin.com/newsletters/ai-executive-insights-7244466745988505600/",
        date: "2024-12-09",
        description: "Understanding which AI systems fall under TRAIGA's high-risk classification."
      },
      {
        id: "fallback-3",
        title: "AI Compliance Roadmap for 2025", 
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=320&h=180&fit=crop",
        link: "https://www.linkedin.com/newsletters/ai-executive-insights-7244466745988505600/",
        date: "2024-12-08",
        description: "Strategic planning for organizations navigating the evolving AI regulatory landscape."
      }
    ];

    return new Response(JSON.stringify(fallbackData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
