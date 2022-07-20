import Image from "next/image";
import styles from "../styles/RoundBtn.module.scss";

export default function RoundBtn({ icon, bordered }) {
  const className = `${styles.circle} ${bordered ? styles.bordered : ""}`;
  return (
    <button className={className}>
      <Image src={icon} alt="avatar" width="12" height="14  " />
    </button>
  );
}
