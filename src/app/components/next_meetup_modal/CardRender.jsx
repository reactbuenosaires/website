import style from "./modal.module.css";

export default function CardRender({ videoStatus, video }) {
  return (
    <div className={style.modal}>
      {videoStatus === "upcoming" && (
        <div>
          <p>Próximo Video</p>
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
        <div>
          <p>Estamos en vivo</p>
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
