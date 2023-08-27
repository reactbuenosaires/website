import AboutImages from "@/app/components/AboutImages";
import Title from "@/app/components/Title";

export default function AboutSection(props) {
  return (
    <div>
      <Title title="¿Quiénes Somos?" />
      <h3>Aprendemos, conectamos, crecemos e iteramos</h3>
      <p className="text">
        Somos una comunidad para compartir conocimientos de los últimos avances
        de React Js y cualquier derivado de React Native, Redux,
        React-bootstrap, Material U-I y más.
      </p>
      <AboutImages></AboutImages>
      <p className="text">
        Las meetups son el espacio perfecto para compartir conocimiento, hablar
        de tecnología y desarrollar nuevos projecto. <br />
        <span>No hay límites con todo lo que podemos hacer juntos.</span>
      </p>
    </div>
  );
}
