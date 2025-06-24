import React from "react";
import { motion } from "framer-motion";
import styles from "./SuspenseAnimation.module.css";

const SuspenseAnimation = () => {
  const dots = [0, 1, 2, 3, 4];

  return (
    <div className={styles.suspenseContainer}>
      <motion.div
        className={styles.suspenseText}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Generando número aleatorio
      </motion.div>

      <div className={styles.dotsContainer}>
        {dots.map((index) => (
          <motion.div
            key={index}
            className={styles.dot}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className={styles.spinningWheel}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}>
        <div className={styles.wheelInner} />
      </motion.div>

      <motion.div
        className={styles.pulseRing}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default SuspenseAnimation;
