
interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  duration: string;
  uploadDate: string;
}

export const fetchYouTubePlaylist = async (playlistId: string): Promise<YouTubeVideo[]> => {
  try {
    // For now, return placeholder data
    // This will be replaced with actual YouTube API integration once API key is set up
    const placeholderVideos: YouTubeVideo[] = [
      {
        id: "1",
        title: "TRAIGA Overview: What Texas Businesses Need to Know",
        thumbnail: "/placeholder.svg",
        link: `https://www.youtube.com/playlist?list=${playlistId}`,
        duration: "15:30",
        uploadDate: new Date().toISOString().split('T')[0]
      },
      {
        id: "2",
        title: "High-Risk AI Systems Under TRAIGA",
        thumbnail: "/placeholder.svg",
        link: `https://www.youtube.com/playlist?list=${playlistId}`,
        duration: "12:45",
        uploadDate: new Date(Date.now() - 86400000).toISOString().split('T')[0]
      },
      {
        id: "3",
        title: "TRAIGA Compliance Timeline and Deadlines",
        thumbnail: "/placeholder.svg",
        link: `https://www.youtube.com/playlist?list=${playlistId}`,
        duration: "18:20",
        uploadDate: new Date(Date.now() - 172800000).toISOString().split('T')[0]
      }
    ];

    return placeholderVideos;
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return [];
  }
};

// Function to format duration from YouTube API format (PT15M30S) to readable format (15:30)
export const formatDuration = (duration: string): string => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return '0:00';
  
  const hours = parseInt(match[1]?.replace('H', '') || '0');
  const minutes = parseInt(match[2]?.replace('M', '') || '0');
  const seconds = parseInt(match[3]?.replace('S', '') || '0');
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
