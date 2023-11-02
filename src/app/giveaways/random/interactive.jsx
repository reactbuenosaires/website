"use client";
import styles from "./random.module.css";
import { useState } from "react";
import Title from "@/components/Title";
import { getRandomNumber } from "@/utils/getRandomNumber";

export default function Interactive() {
  const [maxInputNumber, setMaxInpuNumber] = useState(0);
  const [winner, setWinner] = useState();

  const handleMaxInputNumber = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMaxInpuNumber(e.target.value);
  };

  const generateRandom = () => {
    const randomValue = getRandomNumber(maxInputNumber);
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
          onChange={handleMaxInputNumber}
          onWheel={(e) =>  e.stopPropagation()}
          />
      </div>
      <button
        className={styles.random_button}
        disabled={!maxInputNumber || maxInputNumber <= 0 ? true : false}
        onClick={generateRandom}
      >
        Generar Ganador/a
      </button>
      {winner && maxInputNumber && (
        <>
          <div className={styles.random_winner}>{winner}</div>
          <span className={styles.winner_text}>Ganador/a</span>
        </>
      )}
    </section>
  );
}
