import Modal from '@/app/components/next_meetup_modal/Modal'
import dotenv from "dotenv";
import { fetchYoutubeData, isUpcomingVideo  } from '@/app/components/past_events/fetchYoutubeData';
dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function Youtube() {
  const data = await fetchYoutubeData(apiKey)
  const displayModal = await isUpcomingVideo(data);
  return (
    <div>
      {displayModal && <Modal/>}
    </div>
  );
}
