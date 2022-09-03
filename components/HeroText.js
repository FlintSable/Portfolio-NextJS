import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";




const HeroText = () => {
    const [count, setCount] = useState(0);
    const hero_text_array = ["Nicholas", "Nicholas"];


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => 
                count == hero_text_array.length - 1 ? count = 0 : count + 1);
          }, 4800);
          return () => clearInterval(interval);
        }, []);
    // componeentDidMount() {
    //     this.timeout = setInterval(() => {
    //         let currentIdx = this.state.textIdx;
    //         this.setState({ textIdx: currentIdx + 1 });
    //     }, 1500);
    // };

    // componentDidUnmount(){
    //     clearInterval(this.timeout);
    // }

return(
    // let textShift = hero_text_array[this.state.textIdx % hero_text_array.length];
    <div className={styles["hero-text-box"]}>
        <h1 className={styles["hero-text"]}>{hero_text_array[count]}</h1>
        <p>I'm a software engineer from  Jewel City California</p>
    </div>
    );

}

export default HeroText;
