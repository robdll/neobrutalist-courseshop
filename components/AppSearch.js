import styles from "../styles/Search.module.scss";
import RoundBtn from "../components/RoundBtn";

export default function AppSearch() {
  return (
    <div className={styles.inputContainer}>
      <RoundBtn icon="/lens.svg" bordered="true" />
      <input
        className={styles.input}
        type="text"
        placeholder="What course do you want?"
      />
    </div>
  );
}
