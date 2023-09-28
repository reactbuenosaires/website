import style from "./NotificactionBar";

export default function RenderNotificacion({ videoStatus, video }) {
  return (
    <div className={style.notification_bar}>
      {videoStatus === "upcoming" && (
        <div className={style.card}>
          <p className={style.title}>Próxima Meetup</p>
          {video.map((videoContent, index) => (
            <div key={index}>
              <a
                className={style.link}
                href={`https://www.youtube.com/watch?v=${videoContent.id.videoId}`}
                target="_blank"
              >
                {videoContent.snippet.title}
              </a>
            </div>
          ))}
        </div>
      )}

      {videoStatus === "live" && (
        <div className={style.card}>
        <p className={style.title}>Estamos en vivo</p>
          {video.map((videoContent, index) => (
            <div key={index}>
              <a
                className={style.link}
                href={`https://www.youtube.com/watch?v=${videoContent.id.videoId}`}
                target="_blank"
              >
                {videoContent.snippet.title}
              </a>
            </div>
          ))}
        </div>
      )}

{videoStatus === "none" && (
        <div className={style.card}>
        <p className={style.title}>Próxima Meetup</p>
          {video.map((videoContent, index) => (
            <div key={index}>
              <a
                className={style.link}
                href={`https://www.youtube.com/watch?v=${videoContent.id.videoId}`}
                target="_blank"
              >
                {videoContent.snippet.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
