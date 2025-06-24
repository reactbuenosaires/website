import React from "react";
import styles from "./EducationalContent.module.css";

const EducationalContent = () => {
  return (
    <section className={styles.educationalSection}>
      <div className={styles.container}>
        <h1 className="titles">Generador de Números Aleatorios</h1>

        <div className={styles.content}>
          <p className="text">
            Para generar números random utilizamos la api de random.org, que
            utiliza ruido atmosférico para generar números verdaderamente
            aleatorios!
          </p>

          <h2 className={styles.subtitle}>¿Cómo lo hace?</h2>

          <div className={styles.steps}>
            <div className={styles.step}>
              <h3 className={styles.stepTitle}>
                1. Captura de ruido atmosférico
              </h3>
              <p className={styles.stepText}>
                Se utilizan radios que capturan ruido estático, el cual es un
                fenómeno natural impredecible y aleatorio.
              </p>
            </div>

            <div className={styles.step}>
              <h3 className={styles.stepTitle}>2. Digitalización del ruido</h3>
              <p className={styles.stepText}>
                El ruido capturado se convierte en una señal digital.
              </p>
            </div>

            <div className={styles.step}>
              <h3 className={styles.stepTitle}>3. Procesamiento de la señal</h3>
              <p className={styles.stepText}>
                Se procesan las señales digitales para producir números
                aleatorios.
              </p>
            </div>

            <div className={styles.step}>
              <h3 className={styles.stepTitle}>
                4. Distribución a través de API
              </h3>
              <p className={styles.stepText}>
                Los números generados se ponen a disposición a través de una API
                que permite a los desarrolladores integrar esta funcionalidad en
                sus propias aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalContent;
