import styles from "./giveaways.module.css"
import GiveawaysButton from "../../data/GiveawayButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GiveawaysButtons() {
  return (
    <section className={styles.icons_container}>
      {GiveawaysButton.map((button,index) => (
        <div key={index} className={styles.icons_bars}>
          <div>{button.name}</div>
          <FontAwesomeIcon icon={button.icon} />
        </div>
      ))}
    </section>
  );
}
