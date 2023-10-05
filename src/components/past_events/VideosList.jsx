"use client"

import React from "react";
import CardPastEvent from "@/components/past_events/CardPastEvent";
import { useYoutubeDataContext } from "@/context/YoutubeData";

const VideosList = () => {
  const { videosList } = useYoutubeDataContext();
  return (
    <>
      {videosList &&
        videosList.map((video) => (
          <CardPastEvent
            key={video.id.videoId}
            videoId={video.id.videoId}
            thumbnailUrl={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
          />
        ))}
    </>
  );
};

export default VideosList;
