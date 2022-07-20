import styles from "../styles/Categories.module.scss";
import { useState } from "react";

export default function Categories() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    "Design",
    "Marketing",
    "Development",
    "Photography",
    "Writing",
  ];

  function handleClick(category) {
    setActiveTab(category);
  }

  return (
    <div className={styles.container}>
      {categories.map((category, idx) => {
        return (
          <div
            key={idx}
            className={`${styles.category} ${
              activeTab === category ? styles.active : ""
            }`}
            onClick={() => {
              handleClick(category);
            }}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}
