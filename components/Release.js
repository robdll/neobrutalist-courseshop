import Image from "next/image";
import styles from "@styles/Release.module.scss";
import { useRouter } from "next/router";

export default function Release({ title, price, isLesson }) {
  const router = useRouter();
  const num = Math.floor(75 + Math.random() * (100 - 75 + 1));
  const classPrice = isLesson ? styles.price : styles.priceLesson;
  const handleClick = (e) => {
    if (isLesson) {
      e.preventDefault();
    } else {
      router.push("details");
    }
  };
  return (
    <article className={styles.card} onClick={handleClick}>
      <span
        className={styles.overviewContainer}
        style={{ backgroundImage: `url("https://picsum.photos/${num}")` }}
      ></span>
      <span className={styles.title}>{title}</span>
      {isLesson ? (
        <span className={styles.timeBox}>
          <span className={styles.play}>
            <Image src={"/play.svg"} alt="avatar" width="12" height="12" />
          </span>
          <span className={styles.time}>{price}</span>
        </span>
      ) : (
        <span className={styles.price}>{price}</span>
      )}
      {isLesson ? (
        <span className={styles.lockBtn}>
          <span>
            <Image src={"/lock.svg"} alt="avatar" width="15" height="15" />
          </span>
        </span>
      ) : (
        <span className={styles.arrowBtn}>
          <Image src={"/rightArrow.svg"} alt="avatar" width="35" height="35" />
        </span>
      )}
    </article>
  );
}
