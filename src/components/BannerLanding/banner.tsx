import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.picture}>
          <Image src="/bannerBacteria.png" alt="" width={175} height={166} />
        </div>
        <div className={styles.divider}>
          <div className={styles.small}></div>
          <div className={styles.large}></div>
          <div className={styles.small}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Easy uploads, accurate results </div>
          <div className={styles.contentPrompt}>
            {`Precision analysis for Alzheimer's and other cognitive diseases`}
          </div>
          <div className={styles.title}>
            Join us in raising cognitive health awareness.
          </div>
        </div>
      </div>
    </>
  );
}
