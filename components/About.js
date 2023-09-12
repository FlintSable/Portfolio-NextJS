import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div id="section-about" className={styles["main-about"]}>
      <div className={styles["interior-about"]}>
        <h1 className={styles["section-h1"]}>01. About</h1>
        <div className={styles["layout-about"]}>
          <div className={styles["textbox-about"]}>
            <p className="text-p-about">
              Hi! I'm a developer based in Los Angeles, CA interested in working
              with web technologies, expecially at the cross section of
              Front-end and Back-end engineering. My primary education is in
              Graphic Arts. I have a background in fixing desktops, laptops,
              servers and scripts mainly in CAD and 3D modeling design studio
              environments.
              <br />
              <br />
              His ad iudico suavitate. Duo augue noster appareat ad. Aliquip
              oblique sed te. Mea tractatos repudiandae no. Modo mutat malorum
              ad est. Cu sint mollis neglegentur pri, inermis disputationi ne
              quo. Nam id blandit argumentum, sit paulo simul no.
            </p>
            <ul className={styles["ul-about"]}>
              <li>JavaScript</li>
              <li>Python</li>
              <li>React</li>
              <li>four</li>
              <li>five</li>
              <li>six</li>
              <li>seven</li>
              <li>eight</li>
            </ul>
          </div>
          <div className={styles["img-about"]}>
            <img
              className={styles["custom-img"]}
              src="/nic.png"
              width="100%"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
