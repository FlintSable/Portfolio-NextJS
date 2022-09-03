import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";


const HeroText = () => {
    const [count, setCount] = useState(0);
    const hero_text_array = ["Nicholas", "Noochla-or"];

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
    {/* <h1 className={styles["hero-text"]}>textShift</h1> */} 
        <div className={styles["hero-text-box"]}>
            <h1 className={styles["hero-text"]}>{hero_text_array[0]}</h1>
            <p className={styles["hero-subtitle"]}>I'm a software engineer from  Jewel City California</p>
        </div>
    </div>


    );
}

export default HeroText;
