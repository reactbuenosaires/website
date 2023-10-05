import Image from "next/image";
import style from "@/components/about/about.module.css";
import Title from "@/components/Title";
import { aboutUsImages } from "@/data/Images";

export default function AboutSection() {
  return (
    <section className={style.about_container}>
      <Title titleDescription="¿QUIÉNES SOMOS?" />
      <section className={style.section_container}>
        <p className={style.text_description}>
          Somos una comunidad creada para explorar y compartir los últimos
          avances en React JS y sus derivados, incluyendo React Native, Redux,
          React-Bootstrap, Material UI y mucho más!
        </p>
        <h3 className={style.subtitle}>
          Aprendemos, conectamos, crecemos e iteramos
        </h3>
      </section>
      <section className={style.container_Images}>
        {aboutUsImages.map((image, index) => (
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
          Las meetups son el lugar ideal para compartir conocimiento, hablar de
          tecnología y desarrollar nuevos proyectos. ¡Únete a formar parte de
          esta comunidad de mentes creativas y entusiastas de la tecnología!
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
