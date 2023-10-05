export async function getYoutubeVideos(apiKey) {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC8lMWXElwhflZxWqsE6BuPQ&part=snippet,id&order=date&maxResults=6`
  );
  const data = await response.json();
  return data.items;
}
