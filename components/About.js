import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image';


const About = () => {


return(
    <div className={styles["main-about"]}>
        <div className={styles["interior-about"]}>
            <h1 className={styles["section-h1"]}>01. About</h1>
            <div className={styles["layout-about"]}>
                <div className={styles["textbox-about"]}>
                    <p className="text-p-about">
                    Lorem ipsum dolor sit amet, id mel aperiri consequat. Vix te erant legendos argumentum, ne accumsan mandamus pro. Mea essent delectus tacimates et, vim ex mollis theophrastus. Partiendo deseruisse eos eu, te usu sale intellegebat, vis in malis conclusionemque.
                    <br/><br/>    
                    His ad iudico suavitate. Duo augue noster appareat ad. Aliquip oblique sed te. Mea tractatos repudiandae no. Modo mutat malorum ad est. Cu sint mollis neglegentur pri, inermis disputationi ne quo. Nam id blandit argumentum, sit paulo simul no.
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
                    <img src="/nic.jpg" width='100%'></img>
                </div>
            </div>
        </div>
    </div>


    );
}

export default About;
