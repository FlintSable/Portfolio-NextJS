import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";


const HeroText = () => {
    const [count, setCount] = useState(0);
    const hero_text_array = ["Nicholas", "Noochla", "Nick"];

    // This can change the state of the componenet
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(count => 
    //             count == hero_text_array.length - 1 ? count = 0 : count + 1);
    //       }, 4800);
    //       return () => clearInterval(interval);
    //     }, []);


return(

    <div className={styles["hero-text-box"]}>
        {/* <div id="hero-text" className={styles["hero-text"]}>{hero_text_array[0]}</div> */}
        <div id="hero-text" className={styles["hero-text"]}>Nicholas Noochla-or</div>
        {/* <div id="hero-text" className={styles["hero-text-2"]}></div> */}


        {/* <div id="hero-text" className={styles["hero-text-2"]}>{hero_text_array[1]}</div> */}

        {/* <h1 className={styles["hero-text"]}>{hero_text_array[1]}</h1> */}

        {/* <p className={styles["hero-subtitle"]}>Software Engineer from  Jewel City California</p> */}
        <p className={styles["hero-subtitle"]}>Software Engineer</p>


    </div>


    );
}

export default HeroText;
