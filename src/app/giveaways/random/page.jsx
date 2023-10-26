"use client";
import Title from "@/components/Title";
import styles from "./random.module.css";
import { useState, useEffect } from "react";
import { getRandomNumber } from "../../../utils/getRandomNumber";

export default function Random() {
  const [maxInputNumner, setMaxInputNumner] = useState("");
  const [winner, setWinner] = useState("");

  const handleMaxInputNumber = (e) => {
    setMaxInputNumner(e.target.value);
  };

  const generateRandom = () => {
    if (!maxInputNumner) {
    } else {
      const randomValue = getRandomNumber(maxInputNumner);
      setWinner(randomValue);
    }
  };

  useEffect(() => {}, [winner]);

  return (
    <section className={styles.random_container}>
      <Title titleDescription="RANDOM" />
      <div className={styles.input_container}>
        <p className={styles.text}>Participantes</p>
        <input
          type="number"
          className={styles.input}
          onChange={handleMaxInputNumber}
        />
      </div>
      {maxInputNumner && (
        <button className={styles.random_button} onClick={generateRandom}>
          Generar
        </button>
      )}
      {winner && (
        <>
          <div className={styles.random_winner}>{winner}</div>
          <span className={styles.winner_text}>Ganador/a</span>
        </>
      )}
    </section>
  );
}
