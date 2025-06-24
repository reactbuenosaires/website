import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatRandomNumber } from "@/utils/randomGenerator";
import styles from "./RandomNumberDisplay.module.css";

const RandomNumberDisplay = ({
  randomNumber,
  participantCount,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return (
      <section className={styles.displaySection}>
        <div className={styles.container}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
            <p className={styles.loadingText}>Generando número aleatorio...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <motion.section
        className={styles.displaySection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className={styles.container}>
          <div className={styles.errorContainer}>
            <h3 className={styles.errorTitle}>Error al generar número</h3>
            <p className={styles.errorText}>{error}</p>
          </div>
        </div>
      </motion.section>
    );
  }

  if (!randomNumber) {
    return null;
  }

  return (
    <motion.section
      className={styles.displaySection}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className={styles.container}>
        <motion.div
          className={styles.resultContainer}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <motion.h2
            className={styles.resultTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            ¡Número Generado!
          </motion.h2>

          <motion.div
            className={styles.numberContainer}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 216, 255, 0.4)",
            }}>
            <motion.span
              className={styles.randomNumber}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}>
              {formatRandomNumber(randomNumber)}
            </motion.span>
          </motion.div>

          <motion.p
            className={styles.resultInfo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}>
            Número aleatorio entre 1 y {participantCount} participantes
          </motion.p>

          <motion.div
            className={styles.statsContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}>
            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}>
              <span className={styles.statLabel}>Participantes:</span>
              <span className={styles.statValue}>{participantCount}</span>
            </motion.div>
            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}>
              <span className={styles.statLabel}>Número ganador:</span>
              <span className={styles.statValue}>{randomNumber}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RandomNumberDisplay;
