import styles from "@styles/Navbar.module.scss";
import Image from "next/image";

import RoundBtn from "@components/RoundBtn";

export default function AppNav({ name = "Rob.dll", isDetails = false }) {
  const icon = isDetails ? "heart" : "bell";
  return (
    <nav
      className={
        isDetails ? `${styles.nav} ${styles.detail} ` : `${styles.nav}`
      }
    >
      {isDetails ? (
        <span className={styles.goBack}>
          <Image src={"/rightArrow.svg"} alt="avatar" width="25" height="25" />
        </span>
      ) : (
        <span className={styles.avatar}>
          <Image src="/avatar.png" alt="avatar" width="50" height="50" />
        </span>
      )}

      {isDetails && <span className={styles.titlePage}>Details</span>}

      {!isDetails && <span className={styles.welcome}>Hello {`${name}`},</span>}
      {!isDetails && (
        <span className={styles.hint}>Get a new course today!</span>
      )}

      <RoundBtn icon={`/${icon}.svg`} />
    </nav>
  );
}
