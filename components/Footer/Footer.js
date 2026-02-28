import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a
          href="https://github.com/FlintSable"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credit}
        >
          Built by Nicholas Noochla-or
        </a>
        <p className={styles.tech}>
          Designed &amp; built with Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
