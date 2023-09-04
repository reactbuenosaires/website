import AboutImages from "@/app/components/about/AboutImages";
import Title from "@/app/components/Title";
import style from "@/app/components/about/about.module.css";

export default function AboutSection(props) {
  return (
    <div>
      <Title titleDescription="¿QUIÉNES SOMOS?" />
      <h3 
        className={style.subtitle}>
          Aprendemos, conectamos, crecemos e iteramos
      </h3>
      <p 
        className={style.text_description}>
          Somos una comunidad para compartir conocimientos de los últimos avances
          de React Js y cualquier derivado de React Native, Redux,
          React-bootstrap, Material U-I y más.
      </p>
      <AboutImages />
      <p 
        className={style.text_description}>
          Las meetups son el espacio perfecto para compartir conocimiento, hablar
          de tecnología y desarrollar nuevos projecto.
      </p>
      <p 
        className={style.text_motivation}>
          ¡No hay límites con todo lo que podemos hacer juntos!
      </p>
    </div>
  );
}
