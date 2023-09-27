import { faMeetup } from "@fortawesome/free-brands-svg-icons";
import CardRender from "./CardRender";
import {
  liveContentStatus,
  fetchYoutubeData,
  liveContent,
} from "@/app/components/past_events/fetchYoutubeData";
import { Fragment } from "react";

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default async function Modal() {
  const data = await fetchYoutubeData(apiKey);
  const videoStatus = await liveContentStatus(data);
  let video = await liveContent(data, videoStatus);
  return (
    <Fragment>
      {videoStatus != "none" && (
        <CardRender videoStatus={videoStatus} video={video} />
      )}
    </Fragment>
  );
}
