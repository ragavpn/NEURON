"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Input } from "../ui/Input/input";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  let pathname = usePathname();
  let [search, setSearch] = useState("");

  return (
    <nav className={styles.nav}>
      <div className={styles.containerLeft}>
        <div className={styles.logo}>
          <Image src="/neuron.svg" alt="" width={30} height={30} />
        </div>
        <div className={styles.links}>
          <Link href="/home" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/about" className={styles.link}>
            {`FAQ's`}
          </Link>
        </div>
      </div>
      <div className={styles.containerRight}>
        {pathname == "/" && (
          <div className={styles.info}>
            <div className={styles.socials}>
              <div className={styles.list}>
                <div className={styles.socialButton}>
                  <Image
                    src="/twitter.svg"
                    width={20}
                    height={20}
                    alt="twitter"
                  />
                </div>
                <div className={styles.socialButton}>
                  <Image
                    src="/instagram.svg"
                    width={20}
                    height={20}
                    alt="instagram"
                  />
                </div>
                <div className={styles.socialButton}>
                  <Image
                    src="/facebook.svg"
                    width={20}
                    height={20}
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
            <div className={styles.search}>
              <Input
                placeholder="Search"
                search={search}
                setSearch={setSearch}
              />
            </div>
          </div>
        )}
        <div className={styles.login}>
          <Image src="/person.svg" width={20} height={20} alt="person" />
          <Link href="/login" className={styles.LoginLink}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
