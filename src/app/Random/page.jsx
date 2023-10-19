import Button from "@/components/Button";
import styles from "./random.module.css";
import Title from "@/components/Title";

export default function Random() {
  return (
    <section className={styles.random_container}>
      <Title titleDescription="RANDOM" />
      <div className={styles.set_container}>
        <p>Participantes</p>
        <div className={styles.max_number}>20</div>
      </div>
      <div className={styles.button}>
        <Button>Generar Random</Button>
      </div>
      <div className={styles.random}>
        <div className={styles.random_text}>
          <span>9</span>
          <span>Ganador</span>
        </div>
      </div>
    </section>
  );
}
