import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.parent}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </div>
  );
}
