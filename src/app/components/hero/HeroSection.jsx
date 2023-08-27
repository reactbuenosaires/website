import style from "@/app/components/hero/heroSection.module.css";

export default function HeroSection() {
  return (
    <div className={style.hero_container}>
      <div className={style.hero_bg}></div>
      <div className={style.title_container}>
        <div className={style.title}>
          Una comunidad hecha
          <div className={style.inner_title_container}>
            <span className={style.span1}>PARA</span>
            <span className={style.span2}>POR</span>
          </div>
          desarrolladores
        </div>
        <p className={style.description}>
          ¡Seguinos en el Meetup de React en Buenos Aires para enterarte de los próximos eventos!
        </p>
        <div className="justify-center">
          <button className="main-button">¡Sumáte!</button>
        </div>
      </div>
    </div>
  );
}
