import RenderNotificacion from "./RenderNotificacion";
import {
  liveContentStatus,
  fetchYoutubeData,
  liveContent,
} from "@/app/utils/fetchYoutubeData";

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function DataRendered() {
  const data = await fetchYoutubeData(apiKey);
  const videoStatus = await liveContentStatus(data);
  let video = await liveContent(data, videoStatus);

  return (
    <>
      {(videoStatus === "upcoming" ||
        videoStatus === "none" ||
        videoStatus === "live") && (
        <RenderNotificacion videoStatus={videoStatus} video={video} />
      )}
    </>
  );
}
