import Image from "next/image";
import styles from "../styles/Release.module.scss";

export default function Release({ title, price }) {
  return (
    <article className={styles.card}>
      <span className={styles.overviewContainer}></span>
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{price}</span>
      <span className={styles.arrowBtn}>
        <Image src={"/rightArrow.svg"} alt="avatar" width="35" height="35" />
      </span>
    </article>
  );
}
