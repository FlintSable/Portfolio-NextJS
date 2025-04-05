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
        Software Engineer with an IT background, focused on building practical
        tools with C++, Python and JavaScript.
      </p>
      <p className={styles["hero-tagline"]}>
        From fixing systems to crafting code - I build, test and support
        solutions
      </p>
    </div>
  );
};

export default HeroText;
