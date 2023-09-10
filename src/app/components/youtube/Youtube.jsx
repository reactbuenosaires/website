 'use client'
import React, { useEffect, useState } from "react";
import Title from "../Title";
import style from "@/app/components/youtube/youtube.module.css"
import Image from "next/image";

const apiKey = process.env.API_KEY;


async function getYtVideos() {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC8lMWXElwhflZxWqsE6BuPQ&part=snippet,id&order=date&maxResults=3`);
  const data = await response.json();
  return data.items || []; // Ensure that it returns an empty array if there are no items.
}

export default function Youtube(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const videoData = await getYtVideos();
      setVideos(videoData); // Set the videos array directly.
      console.log(videoData);
    }

    fetchData();
  }, []); // Empty dependency array to run this effect once, similar to componentDidMount

  return (
    <div>
      <Title titleDescription="CHARLAS" />
      <div className={style.container}>
        {videos.map((video, index) => (
          <a className={style.yt_enlaces} href={'www.google.com'} key={index}>
          <div className={style.youtube_card} >
            <Image className={style.image}
              src={video.snippet.thumbnails.high.url} 
              alt={video.snippet.thumbnails.title}
              width={100}
              height={100}
            />
          <p className={style.titulo} >{video.snippet.title}</p>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}
