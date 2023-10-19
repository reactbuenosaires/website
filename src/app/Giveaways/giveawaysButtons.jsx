import styles from "./giveaways.module.css"
import GiveawaysButton from "../../data/GiveawayButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function GiveawaysButtons() {
  return (
    <section className={styles.icons_container}>
      {GiveawaysButton.map((button,index) => (
        <Link key={index} className={styles.link_bar} href={`/${button.name}`}>
        <div className={styles.icons_bars}>
          <div>{button.name}</div>
          <FontAwesomeIcon icon={button.icon} className={styles.icons} />
        </div>
        </Link>
      ))}
    </section>
  );
}
