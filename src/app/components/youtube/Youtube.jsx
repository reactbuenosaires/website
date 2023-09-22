import Title from "../Title";
import style from "@/app/components/youtube/youtube.module.css";
import Image from "next/image";
import Modal from '@/app/components/modal/Modal'
import dotenv from "dotenv";
import { getListVideoYoutube,fetchYoutubeData, isUpcomingVideo  } from '@/app/components/past_events/fetchYoutubeData';
dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function Youtube() {
  const data = await fetchYoutubeData(apiKey)
  const displayModal = await isUpcomingVideo(data);
  console.log(displayModal)
  return (
    <div>
      {displayModal && <Modal/>}
    </div>
  );
}
