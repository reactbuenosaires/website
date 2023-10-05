import style from "./notification.module.css";

export default function RenderNotificacion({ videoStatus, video }) {
  let notificationMessage = "";

  if (videoStatus === "none") {
    notificationMessage = "Revive la última meetup:";
  } else if (videoStatus === "live") {
    notificationMessage = "😎 ¡Estamos en vivo!";
  } else if (videoStatus === "upcoming") {
    notificationMessage = "🚀 Próxima Meetup:";
  }
  return (
    <>
      {videoStatus && (
        <div className={style.card}>
          <p className={style.title}>{notificationMessage}</p>
          <div key={video[0]}>
            <a
              className={style.link}
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
            >
              {video.snippet.title}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
