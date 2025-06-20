import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./About.module.css";

import Image from "next/image";

const aboutContent = {
  paragraphs: [
    "Hi! I'm a developer from California, now based in Pennsylvania where i'm completing my Computer Science degree at Oregon State University. My journey began with a degree in Graphic Arts from UC Santa Barbara, which sparked my interest in technology and led me to pursue IT and development roles over the past decade. My focus is on web technologies, especially at the intersection of Front-end and Back-end engineering, complemented by coursework in cybersecurity. After years of supporting complex systems in professional enterprise environments, I've gained valuable insight into building robust, user centered solutions that combine technical excellence and practical usability.",

    "Throughout my career, I've cultivated a passion for solving complex problems through code. From scripting automation solutions to deploying enterprise wide systems, I enjoy the entire development lifecycle. My experience spans various technologies including Python, JavaScript, React, and cloud platforms. I'm particularly drawn to creating efficient, scalable applications that solve real-world challenges. When I'm not coding, you'll find me building custom computer systems, experimenting with different OS configurations, or running self hosted services like Truenas, Home Assistant and local LLMs.",
  ],
  skills: [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "HTML/CSS",
    "Git",
    "SQL",
    "RESTful APIs",
  ],
};

const About = () => {
  return (
    // <div id="section-about" className={styles["main-about"]}>
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

export default About;
