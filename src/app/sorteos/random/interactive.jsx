"use client";
import styles from "./interactive.module.css";
import { useState } from "react";
import Title from "@/components/Title";
import GoBack from "@/components/GoBack";
import getRandomNumber from "@/utils/getRandomNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Info = ({ handleShowInfo }) => (
  <article className={styles.info}>
    <div className={styles.container}>
      Para esto utilizamos la api de
      <a href="https://www.random.org/" target="_blank">
        Random.org
      </a>
      , que utiliza ruido atmosférico para generar números
      <strong> verdaderamente aleatorios!</strong>
      <h4>¿Cómo lo hace?</h4>
      <ol>
        <li>
          Captura de ruido atmosférico: Se utilizan radios que capturan ruido
          estático, el cual es un fenómeno natural impredecible y aleatorio.
        </li>
        <li>
          Digitalización del ruido: El ruido capturado se convierte en una señal
          digital. Procesamiento de la señal: Se procesan las señales digitales
          para producir números aleatorios.
        </li>
        <li>
          Distribución a través de API: Los números generados se ponen a
          disposición a través de una API que permite a los desarrolladores
          integrar esta funcionalidad en sus propias aplicaciones.
        </li>
      </ol>
    </div>
    <div className={styles.close} onClick={handleShowInfo}>
      <FontAwesomeIcon icon={faXmark} />
    </div>
  </article>
);

export default function Interactive() {
  const [showInfo, setShowInfo] = useState(true);
  const [showInput, setShowInput] = useState(true);
  const [maxNumber, setMaxNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);

  function handleShowInfo() {
    setShowInfo(false);
  }

  const handleFetchRandomNumber = async () => {
    setShowInput(false);
    const number = await getRandomNumber(maxNumber);
    if (number !== null) {
      setRandomNumber(number);
    } else {
      console.error("Failed to fetch a random number");
    }
  };

  return (
    <div className={styles.page_container}>
      <GoBack />
      {showInfo && <Info handleShowInfo={handleShowInfo} />}
      <section
        className={styles.random_container}
        style={{ marginTop: "13rem" }}
      >
        <Title titleDescription="Generador de números aleatorios:" />
        {showInput && (
          <div className={styles.form}>
            <label>Número máximo:</label>
            <input
              value={maxNumber}
              onChange={(e) => setMaxNumber(e.target.value)}
              placeholder="Ingresa un número"
              type="number"
            />
            <button onClick={handleFetchRandomNumber} disabled={!maxNumber}>
              Obtener número aleatorio
            </button>
          </div>
        )}
        {randomNumber && (
          <>
            <div className={styles.winner}>{randomNumber}</div>
            <button
              className={styles.sortBtn}
              onClick={handleFetchRandomNumber}
            >
              Obtener otro número aleatorio
            </button>
          </>
        )}
      </section>
    </div>
  );
}
