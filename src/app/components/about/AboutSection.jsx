import Image from "next/image";
import style from "@/app/components/about/about.module.css";
import Title from "@/app/components/Title";
import speaker from "@/app/assets/images/speaker.jpg";
import stage from "@/app/assets/images/conferenceRoom.jpg";
import people from "@/app/assets/images/people.jpg";
import code from "@/app/assets/images/code.jpg";

const images = [
  { description: "Speaker", img: speaker },
  { description: "Conference stage", img: stage },
  { description: "People in Meetup", img: people },
  { description: "Code Screen", img: code },
];

export default function AboutSection() {
  return (
    <section className={style.about_container}>
      <Title titleDescription="¿QUIÉNES SOMOS?" />
      <section className={style.section_container}>
        <p className={style.text_description}>
          Somos una comunidad para compartir conocimientos de los últimos
          avances de React Js y cualquier derivado de React Native, Redux,
          React-bootstrap, Material U-I y más.
        </p>
        <h3 className={style.subtitle}>
          Aprendemos, conectamos, crecemos e iteramos
        </h3>
      </section>
      <section className={style.container_Images}>
        {images.map((image, index) => (
          <div className={style.card} key={index}>
            <Image
              className={style.image}
              src={image.img}
              alt={image.description}
            />
          </div>
        ))}
      </section>
      <section className={style.text_container}>
        <p className={style.text_description}>
          Las meetups son el espacio perfecto para compartir conocimiento,
          hablar de tecnología y desarrollar nuevos projecto.
        </p>
      </section>
      <section className={style.sentence_container}>
        <p className={style.motivation_container}>
          ¡No hay límites con todo lo que podemos hacer juntos!
        </p>
      </section>
    </section>
  );
}
