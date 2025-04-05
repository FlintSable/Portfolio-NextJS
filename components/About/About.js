import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./About.module.css";

import Image from "next/image";

const aboutContent = {
  paragraphs: [
    "Hi! I'm a developer based in Los Angeles, CA interested in working with web technologies, especially at the cross section of Front-end and Back-end engineering. My primary education is in Graphic Arts. I have a background in fixing desktops, laptops, servers and scripts mainly in CAD and 3D modeling design studio environments.",
    "His ad iudico suavitate. Duo augue noster appareat ad. Aliquip oblique sed te. Mea tractatos repudiandae no. Modo mutat malorum ad est. Cu sint mollis neglegentur pri, inermis disputationi ne quo. Nam id blandit argumentum, sit paulo simul no."
  ],
  skills: [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "HTML/CSS",
    "Git",
    "SQL",
    "RESTful APIs"
  ]
};


const About = () => {
  return (
    <div id="section-about" className={styles["main-about"]}>
      <div className={styles["section-interior"]}>
        <h1 className={styles["section-h1"]}>01. About</h1>
        <div className={styles["layout-about"]}>
          <div className={styles["textbox-about"]}>
            <p>{aboutContent.paragraphs[0]}</p>
            <div className={styles["paragraph-with-image"]}>
              <img
                className={styles["inline-img"]}
                src="/nic.png"
                alt="Nicholas Noochla-or"
              />
              <p>{aboutContent.paragraphs[1]}</p>
            </div>
            <ul className={styles["ul-about"]}>
              {aboutContent.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles["img-about"]}>
            <img
              className={styles["custom-img"]}
              src="/nic.png"
              alt="Nicholas Noochla-or"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
