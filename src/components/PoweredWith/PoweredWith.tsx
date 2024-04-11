import styles from "./PoweredWith.module.css";
import Image from "next/image";
export default function PoweredWith() {
  return (
    <>
      <div className={styles.PoweredWith}>
        <div className={styles.title}>
          Powered with the latest AI Technology
        </div>
        <div className={styles.Icons}>
          <div className={styles.icon}>
            <Image src="/ai.png" width={74} height={74} alt="AI" />
          </div>
          <div className={styles.icon}>
            <Image src="/fivek.png" width={74} height={74} alt="AI" />
          </div>
        </div>
      </div>
    </>
  );
}
