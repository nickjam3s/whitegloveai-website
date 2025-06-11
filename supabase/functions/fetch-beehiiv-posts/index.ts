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
  publish_date: number | null;
  displayed_date?: string | null;
  content_tags: string[];
}

interface BeehiivApiResponse {
  data: BeehiivPost[];
  page: number;
  limit: number;
  total_count: number;
}

// Helper function to safely parse Unix timestamps
const parseDate = (timestamp: number | null): string => {
  try {
    if (!timestamp || isNaN(timestamp)) {
      console.warn('Invalid timestamp received:', timestamp, 'using current date as fallback');
      return new Date().toISOString().split('T')[0];
    }
    
    // Convert Unix timestamp to JavaScript Date (multiply by 1000 for milliseconds)
    const date = new Date(timestamp * 1000);
    
    if (isNaN(date.getTime())) {
      console.warn('Invalid date from timestamp:', timestamp, 'using current date as fallback');
      return new Date().toISOString().split('T')[0];
    }
    
    return date.toISOString().split('T')[0];
  } catch (error) {
    console.error('Error parsing timestamp:', timestamp, error);
    return new Date().toISOString().split('T')[0];
  }
};

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

    console.log('Fetching Beehiiv posts for publication pub_4b3b9bb2-3bbc-43c3-82c6-b96e5eb5892f...');
    
    // Call Beehiiv API with publication ID
    const response = await fetch('https://api.beehiiv.com/v2/publications/pub_4b3b9bb2-3bbc-43c3-82c6-b96e5eb5892f/posts?status=confirmed&limit=50', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Beehiiv API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Beehiiv API error: ${response.status} - ${errorText}`);
    }

    const data: BeehiivApiResponse = await response.json();
    console.log('Beehiiv API response received:', data.data?.length, 'posts');

    // Log first post to see the data structure
    if (data.data && data.data.length > 0) {
      console.log('Sample post data:', JSON.stringify(data.data[0], null, 2));
    }

    // Filter posts that contain TRAIGA content tag specifically
    const traiagaPosts = data.data.filter(post => {
      const hasTraigaTag = post.content_tags && post.content_tags.some(tag => 
        tag.toLowerCase().includes('traiga')
      );
      
      console.log('Post:', post.title, 'Tags:', post.content_tags, 'Has TRAIGA tag:', hasTraigaTag);
      
      return hasTraigaTag;
    });

    console.log('Filtered TRAIGA posts:', traiagaPosts.length);

    // Transform to our format with proper Unix timestamp parsing
    const newsletterEntries = traiagaPosts.map(post => {
      console.log('Processing post:', post.title, 'Publish date timestamp:', post.publish_date);
      
      return {
        id: post.id,
        title: post.title,
        thumbnail: post.thumbnail_url || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=180&fit=crop',
        link: post.web_url,
        date: parseDate(post.publish_date),
        description: post.subtitle || undefined
      };
    });

    // Return the latest 3 posts
    const result = newsletterEntries.slice(0, 3);
    
    console.log('Returning', result.length, 'newsletter entries');
    
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
