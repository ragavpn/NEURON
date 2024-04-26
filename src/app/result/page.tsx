"use client";
import { useEffect, useState } from "react";
import styles from "./result.module.css";
import Image from "next/image";
interface ResponseProps {
  category: string;
  description: string;
  measures_to_take: string;
  what_to_avoid: string;
  whom_to_consult: string;
}
export default function Result() {
  let [response, setResponse] = useState<ResponseProps>({
    category: "",
    description: "",
    measures_to_take: "",
    what_to_avoid: "",
    whom_to_consult: "",
  });
  let [image, setImage] = useState("");
  useEffect(() => {
    setResponse(JSON.parse(localStorage.getItem("result") as string));
    setImage(localStorage.getItem("image") as string);
  }, []);
  return (
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
        <div className={styles.res}>
          <div className={styles.image}>
            <Image src={image} width={600} height={600} alt="10" />
            {/* <Image src="/image.png" width={600} height={600} alt="10" /> */}
          </div>
          <div className={styles.result}>
            <h1 className={styles.title}>Results</h1>
            <p>{`${response.category}`}</p>
            <p>{`${response.description}`}</p>
            <p>{`${response.measures_to_take}`}</p>
            <p>{`${response.what_to_avoid}`}</p>
            <p>{`${response.whom_to_consult}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
