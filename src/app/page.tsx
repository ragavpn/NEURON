import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Banner from "@/components/BannerLanding/banner";
import PoweredWith from "@/components/PoweredWith/PoweredWith";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.left}>
          <div className={styles.content}>
            <Image
              src="/NeuronText.svg"
              width={650}
              height={650}
              alt="neuron"
            />
            <p className={styles.text}>
              Conducting analysis of test reports and brain scans, delivering
              personalized insights into potential cognitive disease risks.
            </p>
            <div className={styles.button}>
              <div className={styles.getStartedParent}>
                <Link href="/upload" className={styles.getStarted}>
                  Get Started
                </Link>
                {`>`}
              </div>
              <div className={styles.promptText}>
                Prevention is better than cure
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightParent}>
            <PoweredWith />
          </div>
        </div>
      </div>
      <div className={styles.infos}>
        <Banner />
      </div>
    </div>
  );
}
