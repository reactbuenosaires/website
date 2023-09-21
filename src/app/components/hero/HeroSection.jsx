import style from "@/app/components/hero/heroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import Modal from '@/app/components/modal/Modal'

export default function HeroSection() {
  return (
    <section className={style.hero_container}>
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
          ¡Seguinos en el Meetup de React en Buenos Aires para enterarte de los
          próximos eventos!
        </p>
        <div className="justify-center">
          <Button>
            <a
              target="blank"
              className={style.link}
              href="https://www.meetup.com/es/react-en-buenos-aires"
            >
              ¡Sumate!
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={style.icon}
              />
            </a>
          </Button>
        </div>
      </div>
      <Modal/>
    </section>
  );
}
