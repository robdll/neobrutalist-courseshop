import Image from "next/image";
import styles from "../styles/Release.module.scss";

export default function Release({ title, price }) {
  const num = Math.floor(75 + Math.random() * (100 - 75 + 1));
  console.log(num);
  return (
    <article className={styles.card}>
      <span
        className={styles.overviewContainer}
        style={{ backgroundImage: `url("https://picsum.photos/${num}")` }}
      ></span>
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{price}</span>
      <span className={styles.arrowBtn}>
        <Image src={"/rightArrow.svg"} alt="avatar" width="35" height="35" />
      </span>
    </article>
  );
}
