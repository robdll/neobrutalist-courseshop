import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import { useState } from "react";

export default function AppFooter() {
  const [activeTab, setActiveTab] = useState("Home");

  const sections = [
    { name: "Home", icon: "/home.svg" },
    { name: "Learn", icon: "/book.svg" },
    { name: "Cart", icon: "/cart.svg" },
    { name: "Saved", icon: "/heart.svg" },
  ];
  return (
    <footer className={styles.footer}>
      {sections.map((item, idx) => {
        const isActive = activeTab === item.name;
        if (isActive) {
          return (
            <div key={idx} className={styles.activeTab}>
              <Image
                src={item.icon}
                alt="section icon"
                width="20"
                height="20"
              />
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
              <Image
                src={item.icon}
                alt="section icon"
                width="20"
                height="20"
              />
            </div>
          );
        }
      })}
    </footer>
  );
}
