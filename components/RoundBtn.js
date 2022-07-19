import Image from "next/image";
import styles from "../styles/RoundBtn.module.scss";

export default function RoundBtn({ icon }) {
  return (
    <span className={styles.circle}>
      <Image src={icon} alt="avatar" width="12" height="14  " />
    </span>
  );
}
