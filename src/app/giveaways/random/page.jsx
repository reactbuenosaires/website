"use client";
import Title from "@/components/Title";
import styles from "./random.module.css";
import { useState } from "react";

export default function Random() {
  const [inputRandom, setInputRandom] = useState("");
  const [winner, setWinner] = useState("");

  const handleInputChange = (e) => {
    setInputRandom(e.target.value);
  };

  const getRandom = () => {
    const randomValue = Math.floor(Math.random() * inputRandom);
    setWinner(randomValue);
  };

  return (
    <section className={styles.random_container}>
      <Title titleDescription="RANDOM" />
      <div className={styles.input_container}>
        <p className={styles.text}>Participantes</p>
        <input
          type="number"
          className={styles.input}
          onChange={handleInputChange}
        />
      </div>
      <button className={styles.random_button} onClick={getRandom}>
        Generar
      </button>
      {winner && <div className={styles.random_winner}>{winner}</div>}
    </section>
  );
}
