import React from "react";
import Title from "../Title";
import Image from "next/image";
import style from "./StatisticsSection.module.css";
import { statsImages } from "@/app/data/Images";

export default function StatisticsSection() {
  return (
    <section className={style.statistics_container}>
      <Title titleDescription="REACT BA EN NÚMEROS" />
      <div className={style.images_container}>
        {statsImages.map((image, index) => (
          <div className={style.stat_card_container} key={index}>
            <Image
              className={style.image}
              src={image.src}
              alt={image.description}
            />
            <p className={style.text}>{image.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
