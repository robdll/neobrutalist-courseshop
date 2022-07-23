import Image from "next/image";
import styles from "@styles/RoundBtn.module.scss";

export default function RoundBtn({ icon, bordered }) {
  const classes = `${styles.circle} ${bordered ? styles.bordered : ""}`;
  return (
    <button className={classes}>
      <Image src={icon} alt="avatar" width="30" height="30" />
    </button>
  );
}
