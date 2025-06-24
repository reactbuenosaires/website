import React, { useState } from "react";
import { validateParticipantCount } from "@/utils/randomGenerator";
import styles from "./RandomGeneratorForm.module.css";

const RandomGeneratorForm = ({ onGenerateNumber, isLoading }) => {
  const [participantCount, setParticipantCount] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setParticipantCount(value);

    // Clear error when user starts typing
    if (error) {
      setError("");
    }

    // Validate input
    const validation = validateParticipantCount(value);
    setIsValid(validation.isValid);
    if (!validation.isValid && value !== "") {
      setError(validation.error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateParticipantCount(participantCount);
    if (validation.isValid) {
      onGenerateNumber(parseInt(participantCount, 10));
    } else {
      setError(validation.error);
    }
  };

  const handleGenerateAgain = () => {
    if (isValid) {
      onGenerateNumber(parseInt(participantCount, 10));
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <h2 className={styles.formTitle}>Generar Número Aleatorio</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="participantCount" className={styles.label}>
              Número de participantes:
            </label>
            <input
              type="number"
              id="participantCount"
              value={participantCount}
              onChange={handleInputChange}
              placeholder="Ej: 50"
              min="1"
              max="1000"
              className={`${styles.input} ${error ? styles.inputError : ""}`}
              disabled={isLoading}
            />
            {error && <p className={styles.errorMessage}>{error}</p>}
          </div>

          <div className={styles.buttonGroup}>
            <button
              type="submit"
              className={`${styles.generateButton} ${
                isLoading ? styles.loading : ""
              }`}
              disabled={!isValid || isLoading}>
              {isLoading ? "Generando..." : "Generar Número"}
            </button>

            {isValid && !isLoading && (
              <button
                type="button"
                onClick={handleGenerateAgain}
                className={styles.generateAgainButton}>
                Generar de Nuevo
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default RandomGeneratorForm;
