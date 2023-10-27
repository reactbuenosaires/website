"use client";
import styles from "./random.module.css";
import { useState } from "react";
import Title from "@/components/Title";
import { getRandomNumber } from "@/utils/getRandomNumber";

export default function Interactive({ children }) {
  const [maxInputNumner, setMaxInputNumner] = useState("");
  const [winner, setWinner] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleMaxInputNumber = (e) => {
    setMaxInputNumner(e.target.value);
    setIsButtonDisabled(false);
  };

  const generateRandom = () => {
    const randomValue = getRandomNumber(maxInputNumner);
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
        />
      </div>
      <button
        className={styles.random_button}
        disabled={isButtonDisabled}
        onClick={generateRandom}
      >
        Generar
      </button>
      {winner && maxInputNumner && (
        <>
          <div className={styles.random_winner}>{winner}</div>
          <span className={styles.winner_text}>Ganador/a</span>
        </>
      )}
    </section>
  );
}
