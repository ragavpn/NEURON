import Image from "next/image";
import styles from "./upload.module.css";
import Card from "@/components/Card/Card";

export default function Upload() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.bg}></div>
        <div className={styles.color}></div>
        <div className={styles.fg}>
          <Image
            className={styles.NeuronLogo}
            src="/NeuronText.svg"
            width={500}
            height={500}
            alt="10"
          />
          <div className={styles.buttons}>
            <Card
              type="Image"
              formats={["png", "jpg", "jpeg", "webp", "heic"]}
              text="Recommended to upload an image of your latest brain scan from an approved doctor to get the best possible results"
            />
            <Card
              type="PDF"
              formats={["png", "jpg", "jpeg", "webp", "heic"]}
              text="Recommended to upload an image of your latest brain scan from an approved doctor to get the best possible results"
            />
          </div>
        </div>
      </div>
    </>
  );
}
