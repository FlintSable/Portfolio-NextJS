import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./HeroText.module.css";

const HeroText = () => {
  const [count, setCount] = useState(0);
  const hero_text_array = ["Nicholas", "Noochla", "Nick"];

  return (
    <div className={styles["hero-text-box"]}>
      <div id="hero-text" className={styles["hero-text"]}>
        Nicholas Noochla-or
      </div>
      <p className={styles["hero-subtitle"]}>
        IT Support Professional with Software Development Skills.
      </p>
      <p className={styles["hero-tagline"]}>
        From troubleshooting systems to crafting code - I build, test and
        support
      </p>
    </div>
  );
};

export default HeroText;
