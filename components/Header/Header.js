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
              <Link href="#section-experience">Experience</Link>
            </li>
            <li className={styles.li}>
              <Link href="#section-projects">Projects</Link>
            </li>
            <li className={styles.li}>
              <a href="https://www.linkedin.com/in/nicholasnoochlaor/" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
