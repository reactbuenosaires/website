export async function fetchYoutubeData(apiKey) {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC8lMWXElwhflZxWqsE6BuPQ&part=snippet,id&order=date&maxResults=5`
    );
    const json_Data = await res.json();
    return json_Data.items;
  }
  
  export function getListVideoYoutube(data,status) {
    return data.filter(item => {
      const liveBroadcastContent = item.snippet.liveBroadcastContent;
      return liveBroadcastContent === status;
    }).slice(0, 4);
  }

  export function liveContentStatus(data) {
    if(data[0].snippet.liveBroadcastContent==='upcoming'){
      return 'upcoming'
    } else if(data[0].snippet.liveBroadcastContent=== 'live'){
      return 'live'
    } else if (data[0].snippet.liveBroadcastContent=== 'none'){
      return 'none'
    }
  }

  export function liveContent(data) {
    return data[0];
  }



