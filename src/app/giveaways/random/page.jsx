"use client";
import Title from "@/components/Title";
import styles from "./random.module.css";
import { useState, useEffect } from "react";
import { getRandomNumber } from "../../../utils/radom";

export default function Random() {
  const [maxInputNumner, setMaxInputNumner] = useState("");
  const [winner, setWinner] = useState("");
  const [isGenerateButtonClicked, setGenerateButtonClicked] = useState(false);

  const handleMaxInputNumber = (e) => {
    setMaxInputNumner(e.target.value);
    setGenerateButtonClicked(false);
  };

  const generateRandom = () => {
    if (!maxInputNumner) {
      setGenerateButtonClicked(true);
    } else {
      const randomValue = getRandomNumber(maxInputNumner);
      setWinner(randomValue);
      setGenerateButtonClicked(false);
    }
  };

  const inputClass = `${styles.input} ${
    isGenerateButtonClicked && !maxInputNumner ? styles.inputError : ""
  }`;

  useEffect(() => {}, [winner]);

  return (
    <section className={styles.random_container}>
      <Title titleDescription="RANDOM" />
      <div className={styles.input_container}>
        <p className={styles.text}>Participantes</p>
        <input
          type="number"
          className={inputClass}
          onChange={handleMaxInputNumber}
        />
      </div>
      <button className={styles.random_button} onClick={generateRandom}>
        Generar
      </button>
      {winner && (
        <>
          <div className={styles.random_winner}>{winner}</div>
          <span className={styles.winner_text}>Ganador/a</span>
        </>
      )}
    </section>
  );
}
