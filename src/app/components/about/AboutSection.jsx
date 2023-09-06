import AboutImages from "@/app/components/about/AboutImages";
import Title from "@/app/components/Title";
import style from "@/app/components/about/about.module.css";

export default function AboutSection(props) {
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
      <AboutImages />
      <section className={style.text_container}>
        <p className={style.text_description}>
          Las meetups son el espacio perfecto para compartir conocimiento,
          hablar de tecnología y desarrollar nuevos projecto.
        </p>
      </section>
      <section className={style.container} >
        <p className={style.motivation_container}>¡No hay límites con todo lo que podemos hacer juntos!</p>
      </section>
    </section>
  );
}
