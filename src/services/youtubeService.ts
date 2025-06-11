
interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  duration: string;
  uploadDate: string;
}

interface YouTubePlaylistResponse {
  items: Array<{
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
      resourceId: {
        videoId: string;
      };
    };
    contentDetails: {
      videoId: string;
    };
  }>;
}

interface YouTubeVideoDetailsResponse {
  items: Array<{
    contentDetails: {
      duration: string;
    };
  }>;
}

export const fetchYouTubePlaylist = async (playlistId: string): Promise<YouTubeVideo[]> => {
  try {
    // Use the provided API key
    const apiKey = 'AIzaSyBiB4qj8hTKYjr_Y3WGQhSlfZAVN8J2jUs';
    
    console.log('Fetching YouTube playlist with ID:', playlistId);

    // Fetch playlist items
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`
    );

    if (!playlistResponse.ok) {
      const errorText = await playlistResponse.text();
      console.error('YouTube API playlist error:', playlistResponse.status, errorText);
      throw new Error(`YouTube API error: ${playlistResponse.status} - ${errorText}`);
    }

    const playlistData: YouTubePlaylistResponse = await playlistResponse.json();
    console.log('Playlist data received:', playlistData);

    if (!playlistData.items || playlistData.items.length === 0) {
      console.log('No videos found in playlist, using placeholder data');
      return getPlaceholderVideos(playlistId);
    }

    // Get video IDs for duration fetching
    const videoIds = playlistData.items.map(item => 
      item.snippet.resourceId?.videoId || item.contentDetails?.videoId
    ).filter(Boolean);

    console.log('Video IDs:', videoIds);

    // Fetch video details for duration
    const videoDetailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(',')}&key=${apiKey}`
    );

    if (!videoDetailsResponse.ok) {
      console.error('YouTube API video details error:', videoDetailsResponse.status);
    }

    const videoDetailsData: YouTubeVideoDetailsResponse = await videoDetailsResponse.json();
    console.log('Video details data:', videoDetailsData);

    // Combine data
    const videos: YouTubeVideo[] = playlistData.items.map((item, index) => {
      const videoId = item.snippet.resourceId?.videoId || item.contentDetails?.videoId || `video-${index}`;
      const duration = videoDetailsData.items[index]?.contentDetails.duration || 'PT0S';
      
      return {
        id: videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        link: `https://www.youtube.com/watch?v=${videoId}&list=${playlistId}`,
        duration: formatDuration(duration),
        uploadDate: new Date(item.snippet.publishedAt).toISOString().split('T')[0]
      };
    });

    console.log('Final processed videos:', videos);
    return videos;
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return getPlaceholderVideos(playlistId);
  }
};

// Fallback placeholder data when API is not available
const getPlaceholderVideos = (playlistId: string): YouTubeVideo[] => [
  {
    id: "1",
    title: "TRAIGA Overview: What Texas Businesses Need to Know",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=320&h=180&fit=crop",
    link: `https://www.youtube.com/playlist?list=${playlistId}`,
    duration: "15:30",
    uploadDate: new Date().toISOString().split('T')[0]
  },
  {
    id: "2",
    title: "High-Risk AI Systems Under TRAIGA",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=320&h=180&fit=crop",
    link: `https://www.youtube.com/playlist?list=${playlistId}`,
    duration: "12:45",
    uploadDate: new Date(Date.now() - 86400000).toISOString().split('T')[0]
  },
  {
    id: "3",
    title: "TRAIGA Compliance Timeline and Deadlines",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=320&h=180&fit=crop",
    link: `https://www.youtube.com/playlist?list=${playlistId}`,
    duration: "18:20",
    uploadDate: new Date(Date.now() - 172800000).toISOString().split('T')[0]
  }
];

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
