
// This file now serves as a backup/fallback system
// The primary content source is now the Beehiiv API

export interface NewsletterEntry {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  date: string;
  description?: string;
}

// Fallback content management for newsletter entries
// This will be used if the Beehiiv API is unavailable
export const fallbackNewsletterEntries: NewsletterEntry[] = [
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

// Helper function to get the latest newsletter entries from fallback
export const getLatestNewsletterEntries = (count: number = 3): NewsletterEntry[] => {
  return fallbackNewsletterEntries
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// Instructions for updating newsletter content:
// 1. Primary content now comes from Beehiiv API automatically
// 2. This fallback system will be used if the API is unavailable
// 3. Update the fallbackNewsletterEntries array above if needed as backup
// 4. The Beehiiv integration filters posts by "TRAIGA" or "AI governance" tags
// 5. Real thumbnails and content come from your Beehiiv publication
