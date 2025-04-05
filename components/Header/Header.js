import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <header id="nav" className={styles.header}>
        <div className={styles.logo}>
          <img src="/pen.webp"></img>
        </div>
        <nav className={styles["main-nav"]}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="#section-about">About</Link>
            </li>
            <li className={styles.li}>
              <Link href="#section-experince">Experience</Link>
            </li>
            <li className={styles.li}>Projects</li>
            <li className={styles.li}>Resume</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
