"use client";

import { getYoutubeVideos } from "@/utils/fetchYoutubeData";
import { createContext, useContext, useState, useEffect } from "react";
import { NONE, UPCOMING, LIVE } from "@/utils/consts";

const YoutubeDataContext = createContext();

export const YoutubeDataProvider = ({ apiKey, children }) => {
  const [videosList, setVideosList] = useState([]);
  const [videoStatus, setVideoStatus] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const videos = await getYoutubeVideos(apiKey);
        getPastVideos(videos);
        const status = getVideoStatus(videos);
        setVideoStatus(status);
        const matchingVideo = getSelectedVideo(status, videos);
        setSelectedVideo(matchingVideo);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    }
    fetchData();
  }, [apiKey]);

  function getPastVideos(videos) {
    const pastVideos = videos
      .filter((item) => item.snippet.liveBroadcastContent === NONE)
      .slice(0, 4);
    setVideosList(pastVideos);
  }

  function getVideoStatus(videos) {
    const firstVideo = videos[0].snippet.liveBroadcastContent;

    switch (firstVideo) {
      case UPCOMING:
        return UPCOMING;
      case LIVE:
        return LIVE;
      case NONE:
        return NONE;
    }
  }

  function getSelectedVideo(status, videos) {
    return videos.find(
      (item) => item?.snippet?.liveBroadcastContent === status
    );
  }

  const contextValue = {
    videosList,
    videoStatus,
    selectedVideo,
  };

  return (
    <YoutubeDataContext.Provider value={contextValue}>
      {children}
    </YoutubeDataContext.Provider>
  );
};

export const useYoutubeDataContext = () => useContext(YoutubeDataContext);
