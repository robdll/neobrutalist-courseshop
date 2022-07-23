import styles from "@styles/Navbar.module.scss";
import Image from "next/image";

import RoundBtn from "@components/RoundBtn";

export default function AppNav({ name = "Rob.dll" }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.avatar}>
        <Image src="/avatar.png" alt="avatar" width="50" height="50" />
      </span>
      <span className={styles.welcome}>Hello {`${name}`},</span>
      <span className={styles.hint}>Get a new course today!</span>
      <RoundBtn icon="/bell.svg" />
    </nav>
  );
}
