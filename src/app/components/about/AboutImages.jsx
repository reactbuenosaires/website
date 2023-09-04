import speaker from "@/app/assets/images/speaker.jpg";
import stage from "@/app/assets/images/conferenceRoom.jpg";
import people from "@/app/assets/images/people.jpg";
import code from "@/app/assets/images/code.jpg";
import Image from "next/image";
import style from "@/app/components/about/about.module.css";

const images = [
  { description: "Speaker", src: speaker, text: "+30 Speakers" },
  { description: "Conference stage", src: stage, text: "+80 Eventos" },
  { description: "People in Meetup", src: people, text: "+7000 Miembros" },
  { description: "Code Screen", src: code, text: "+30h Contenido" },
];
export default function AboutImages() {
  return (
    <div className={style.container_Images}>
      {images.map((img, index) => {
        return (
          <div className={style.card} key={index}>
            <Image className={style.img} src={img.src} alt="text" />
          </div>
        );
      })}
    </div>
  );
}
