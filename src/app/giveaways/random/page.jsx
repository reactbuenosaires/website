'use client'
import Title from "@/components/Title";
import styles from "./random.module.css";
export default function Random() {
  return (
    <section className={styles.random_container}>
      <Title titleDescription="RANDOM" />
      <div className={styles.input_container}>
        <p className={styles.text}>Participantes</p>
        <input type="number" className={styles.input}></input>
      </div>
      <button className={styles.random_button}onClick={()=>alert('numero')}>Generar</button>
      <div className={styles.random_winner}>
        20
      </div>
    </section>
  );
}
