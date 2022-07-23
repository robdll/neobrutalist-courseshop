import Image from "next/image";
import styles from "@styles/Release.module.scss";
import { useRouter } from "next/router";

export default function Release({ title, price }) {
  const router = useRouter();
  const num = Math.floor(75 + Math.random() * (100 - 75 + 1));

  const handleClick = () => {
    router.push("details");
  };
  return (
    <article className={styles.card} onClick={handleClick}>
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
