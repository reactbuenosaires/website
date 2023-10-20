import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";

import styles from "./giveaways.module.css";
import Title from "@/components/Title";
import Link from "next/link";

export default function Giveaways() {
  return (
    <section className={styles.giveaways_section}>
      <Title titleDescription="SORTEO" />
      <Link href={"/random"} className={styles.giveaways_link}>
      <div className={styles.random_bar}>
        <FontAwesomeIcon icon={faListOl} />
        <p>Random</p>
      </div>
      </Link>
    </section>
  );
}
