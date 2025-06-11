
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
    const apiKey = 'i6iGL2a3eYZ3HIQlcmLgE19ucQyssOvysqdGs19rl32LKI4pIQdWbPd4K5gJ0crI';
    
    console.log('Fetching Beehiiv posts with TRAIGA tag...');

    const response = await fetch('https://api.beehiiv.com/v2/posts?status=confirmed&limit=10', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Beehiiv API error:', response.status, errorText);
      throw new Error(`Beehiiv API error: ${response.status} - ${errorText}`);
    }

    const data: BeehiivApiResponse = await response.json();
    console.log('Beehiiv data received:', data);

    // Filter posts that have the TRAIGA content tag
    const traiagaPosts = data.data.filter(post => 
      post.content_tags && post.content_tags.some(tag => 
        tag.toLowerCase().includes('traiga') || tag.toLowerCase().includes('ai governance')
      )
    );

    console.log('Filtered TRAIGA posts:', traiagaPosts);

    // Transform to our format
    const newsletterEntries: NewsletterEntry[] = traiagaPosts.map(post => ({
      id: post.id,
      title: post.title,
      thumbnail: post.thumbnail_url || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=180&fit=crop',
      link: post.web_url,
      date: new Date(post.published_at).toISOString().split('T')[0],
      description: post.subtitle || undefined
    }));

    console.log('Final newsletter entries:', newsletterEntries);
    return newsletterEntries.slice(0, 3); // Return latest 3
  } catch (error) {
    console.error('Error fetching Beehiiv posts:', error);
    // Return fallback data on error
    return getFallbackNewsletterEntries();
  }
};

// Fallback data if API fails
const getFallbackNewsletterEntries = (): NewsletterEntry[] => [
  {
    id: "1",
    title: "TRAIGA Implementation: What Texas Businesses Need to Know",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=180&fit=crop",
    link: "https://www.linkedin.com/newsletters/ai-executive-insights-7244466745988505600/",
    date: "2024-12-10",
    description: "Essential guidance for Texas businesses preparing for TRAIGA compliance requirements."
  },
  {
    id: "2", 
    title: "High-Risk AI Systems Under Texas Law",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=320&h=180&fit=crop",
    link: "https://www.linkedin.com/newsletters/ai-executive-insights-7244466745988505600/",
    date: "2024-12-09",
    description: "Understanding which AI systems fall under TRAIGA's high-risk classification."
  },
  {
    id: "3",
    title: "AI Compliance Roadmap for 2025", 
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=320&h=180&fit=crop",
    link: "https://www.linkedin.com/newsletters/ai-executive-insights-7244466745988505600/",
    date: "2024-12-08",
    description: "Strategic planning for organizations navigating the evolving AI regulatory landscape."
  }
];
