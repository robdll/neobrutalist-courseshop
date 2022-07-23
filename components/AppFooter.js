import Image from "next/image";
import styles from "@styles/Footer.module.scss";
import { useState } from "react";

export default function AppFooter({ isDetails }) {
  const [activeTab, setActiveTab] = useState("Home");

  const sections = [
    { name: "Home", icon: "/home.svg" },
    { name: "Learn", icon: "/book.svg" },
    { name: "Cart", icon: "/cart.svg" },
    { name: "Saved", icon: "/heart.svg" },
  ];

  const detailFooter = (
    <>
      <span className={styles.price}> $59.99</span>
      <div className={styles.buyBtn}>
        <span className={styles.buy}>Buy Now</span>
        <span className={styles.buyArrow}>
          <Image src={"/rightArrow.svg"} alt="avatar" width="35" height="35" />
        </span>
      </div>
    </>
  );

  const homeFooter = sections.map((item, idx) => {
    const isActive = activeTab === item.name;
    if (isActive) {
      return (
        <div key={idx} className={styles.activeTab}>
          <Image src={item.icon} alt="section icon" width="20" height="20" />
          <span className={styles.name}>{item.name}</span>
        </div>
      );
    } else {
      return (
        <div
          key={idx}
          className={styles.icon}
          onClick={() => setActiveTab(item.name)}
        >
          <Image src={item.icon} alt="section icon" width="20" height="20" />
        </div>
      );
    }
  });
  return (
    <footer
      className={
        isDetails ? `${styles.footer} ${styles.footerWhite}` : styles.footer
      }
    >
      {isDetails ? detailFooter : homeFooter}
    </footer>
  );
}
