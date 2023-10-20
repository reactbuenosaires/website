import Title from "@/components/Title";
import styles from "./giveaways.module.css";
import Giveaway from "./giveawaysButtons";
export default function Giveaways() {
  return (
    <div className={styles.giveaways_container}>
      <Title titleDescription="SORTEOS" />
      <Giveaway />
    </div>
  );
}
