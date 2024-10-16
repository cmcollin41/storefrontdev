import React from 'react';

interface YouTubeEmbedProps {
  url: string;
  caption?: string;
}

export default function YouTubeEmbed({ url, caption }: YouTubeEmbedProps) {
  // Extract video ID from URL
  const videoId = url.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="my-8">
      <div className="relative aspect-video">
        <iframe
          title="youtube-embed"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      {caption && <p className="mt-2 text-sm text-gray-600">{caption}</p>}
    </div>
  );
}
