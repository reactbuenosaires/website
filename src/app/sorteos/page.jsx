import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";

import styles from "./giveaways.module.css";
import Title from "@/components/Title";
import GoBack from "../../components/go_back/GoBack";
import Link from "next/link";

export default function Giveaways() {
  return (
    <>
      <GoBack />
      <section className={styles.giveaways_container}>
        <Title titleDescription="Elige una opción" />
        <Link href={"/sorteos/random"} className={styles.giveaways_link}>
          <div className={styles.random_bar}>
            <FontAwesomeIcon icon={faListOl} width={20} height={20} />
            <p>Utiliza números aleatorios</p>
          </div>
        </Link>
      </section>
    </>
  );
}
