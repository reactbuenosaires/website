import Title from "@/components/Title";
import styles from "./giveaways.module.css";
import Giveawayicons from "./GiveawaysButtons";

export default function Giveaways() {
  return (
    <div className={styles.giveaways_container}>
      <Title titleDescription="SORTEOS"/>
      <Giveawayicons />
    </div>
  );
}
