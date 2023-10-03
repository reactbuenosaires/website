import dotenv from "dotenv";
dotenv.config();

const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;


export async function fetchYoutubeData(apiKey) {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC8lMWXElwhflZxWqsE6BuPQ&part=snippet,id&order=date&maxResults=6`
  );
  const json_Data = await res.json();
  return json_Data.items;
}

export const lastYoutubeVideos = await fetchYoutubeData(key);

function getLastUpcomingVideo(videos) {
  // Usa Array.prototype.find() para encontrar el primer video con liveBroadcastContent igual a "upcoming"
  const upcomingVideo = videos.find((video) => {
    return video.snippet.liveBroadcastContent === 'upcoming';
  });

  return upcomingVideo || null; // Devuelve el video upcoming o null si no se encuentra ninguno
}

export const lastUpcomingVideo = getLastUpcomingVideo(lastYoutubeVideos);

export const nextMeetup = lastUpcomingVideo; 

export function getListVideoYoutube(data, status) {
  return data.filter(item => {
    const liveBroadcastContent = item.snippet.liveBroadcastContent;
    return liveBroadcastContent === status;
  }).slice(0, 4);
}

export function liveContentStatus(data) {
  if (data[0].snippet.liveBroadcastContent === 'upcoming') {
    return 'upcoming'
  } else if (data[0].snippet.liveBroadcastContent === 'live') {
    return 'live'
  } else if (data[0].snippet.liveBroadcastContent === 'none') {
    return 'none'
  }
}

export function liveContent(data, status) {
  return data.filter(item => {
    const liveBroadcastContent = item.snippet.liveBroadcastContent;
    return liveBroadcastContent === status;
  })
}



