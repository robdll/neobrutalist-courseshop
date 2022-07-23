import styles from "../styles/Featured.module.scss";
import RoundBtn from "./RoundBtn";
import Image from "next/image";

export default function Featured() {
  return (
    <article className={styles.container}>
      <span className={styles.likeBtn}>
        <RoundBtn icon="/heart.svg"></RoundBtn>
      </span>
      <span className={styles.flexer}></span>
      <article className={styles.infoBox}>
        <span className={styles.infoTitle}>Development 0 to Hero</span>
        <span className={styles.avatar}></span>
        <span className={styles.infoAuthor}>Rob.dll</span>
        <span className={styles.infoPrice}>$50.50</span>
      </article>
    </article>
  );
}
