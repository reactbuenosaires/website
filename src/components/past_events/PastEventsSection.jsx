import Title from "../Title";
import VideosList from "@/components/past_events/VideosList";
import style from "@/components/past_events/PastEventsSection.module.css";

const PastEvents = () => {
  return (
    <section className={style.past_events_container}>
      <Title titleDescription="MEETUPS REALIZADAS" />
      <div className={style.subtitle_container}>
        <h3 className={style.subtitle}>
          ¡Reviví todo el contenido de meetups pasadas en nuestro canal de
          Youtube!
        </h3>
      </div>
        <VideosList />
    </section>
  );
};

export default PastEvents;
