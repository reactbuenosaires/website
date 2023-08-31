import React from "react";
import Title from "../Title";
import Image from "next/image";
import speaker from "@/app/assets/images/speaker.jpg";
import stage from "@/app/assets/images/conferenceRoom.jpg";
import people from "@/app/assets/images/people.jpg";
import code from "@/app/assets/images/code.jpg";
import style from "./StatisticsSection.module.css";

const images = [
  { description: "People in Meetup", src: people, text: "+7700 Miembros" },
  { description: "Conference stage", src: stage, text: "+80 Eventos" },
  { description: "Code Screen", src: code, text: "+7 años" },
  { description: "Speaker", src: speaker, text: "Eventos mensuales" },
];

export default function StatisticsSection() {
  return (
    <section>
      <Title titleDescription="REACT BA EN NÚMEROS" />
      <div className={style.images_container}>
        {images.map((image, index) => (
          <div className={style.stat_card_container} key={index}>
            <Image className={style.image} 
              src={image.src} 
              alt={image.description} 
            />
            <p className={style.text}>
              {image.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
