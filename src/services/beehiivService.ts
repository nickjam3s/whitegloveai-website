
import { supabase } from '@/integrations/supabase/client';

export interface NewsletterEntry {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  date: string;
  description?: string;
}

export const fetchBeehiivPosts = async (): Promise<NewsletterEntry[]> => {
  try {
    console.log('Calling Beehiiv Edge Function...');
    
    const { data, error } = await supabase.functions.invoke('fetch-beehiiv-posts');
    
    if (error) {
      console.error('Edge Function error:', error);
      throw error;
    }

    console.log('Edge Function response:', data);
    return data as NewsletterEntry[];
    
  } catch (error) {
    console.error('Error calling Beehiiv Edge Function:', error);
    
    // Return fallback data if Edge Function fails
    return getFallbackNewsletterEntries();
  }
};

// Fallback data if API fails
const getFallbackNewsletterEntries = (): NewsletterEntry[] => [
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
