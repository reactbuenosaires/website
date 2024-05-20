"use client";
import styles from "./interactive.module.css";
import { useState } from "react";
import Title from "@/components/Title";
import GoBack from "@/components/GoBack";
import Loader from "@/components/loader/Loader";
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
          <strong>Captura de ruido atmosférico: </strong>
          Se utilizan radios que capturan ruido estático, el cual es un fenómeno
          natural impredecible y aleatorio.
        </li>
        <li>
          <strong>Digitalización del ruido: </strong>
          El ruido capturado se convierte en una señal digital. Procesamiento de
          la señal: Se procesan las señales digitales para producir números
          aleatorios.
        </li>
        <li>
          <strong>Distribución a través de API: </strong>
          Los números generados se ponen a disposición a través de una API que
          permite a los desarrolladores integrar esta funcionalidad en sus
          propias aplicaciones.
        </li>
      </ol>
    </div>
    <div className={styles.close} onClick={handleShowInfo}>
      <FontAwesomeIcon icon={faXmark} width={20} height={20} />
    </div>
  </article>
);

export default function Interactive() {
  const [showInfo, setShowInfo] = useState(true);
  const [showInput, setShowInput] = useState(true);
  const [maxNumber, setMaxNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleShowInfo() {
    setShowInfo(false);
  }

  function clearMaxNumber() {
    setShowInput(true);
    setMaxNumber(null);
    setRandomNumber(null);
  }

  const handleFetchRandomNumber = async () => {
    setLoading(true);
    setRandomNumber(null);
    setShowInput(false);
    const number = await getRandomNumber(maxNumber);
    if (number !== null) {
      setRandomNumber(number);
      setLoading(false);
    } else {
      console.error("Failed to fetch a random number");
      setLoading(false);
    }
  };

  return (
    <div className={styles.page_container}>
      <GoBack />
      {showInfo && <Info handleShowInfo={handleShowInfo} />}
      <section
        className={styles.random_container}
        style={{ marginTop: "11rem" }}
      >
        <Title titleDescription="Generador de números aleatorios:" />

        {showInput && (
          <div className={styles.form}>
            <label>Número de participantes:</label>
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
        <div style={{ position: "relative" }}>
          {randomNumber && !showInput && (
            <div className={styles.randomNumber_container}>
              <div className={styles.winner}>{randomNumber}</div>
              <button
                className={styles.sortBtn}
                onClick={handleFetchRandomNumber}
              >
                Obtener otro número aleatorio
              </button>
              <button className={styles.showInputBtn} onClick={clearMaxNumber}>
                Cambiar cantidad de participantes
              </button>
            </div>
          )}
          {loading && (
            <div className={styles.loading_container}>
              <Loader />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
