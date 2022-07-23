import styles from "@styles/Navbar.module.scss";
import Image from "next/image";

import RoundBtn from "@components/RoundBtn";
import { useRouter } from "next/router";
export default function AppNav({ name = "Rob.dll", isDetails = false }) {
  const router = useRouter();
  const icon = isDetails ? "heart" : "bell";
  const handleGoBack = () => {
    router.back();
  };
  return (
    <nav
      className={
        isDetails ? `${styles.nav} ${styles.detail} ` : `${styles.nav}`
      }
    >
      {isDetails ? (
        <span className={styles.goBack} onClick={handleGoBack}>
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
