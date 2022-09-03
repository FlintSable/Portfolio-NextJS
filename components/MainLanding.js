import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


import Nav from "./Nav";
// import Footer from "./Footer";


export default function MainLanding({ children, ...customMeta}){
    const router = useRouter();

    const meta = {
        title: "Nicholas Noochla-or - Developer",
        description: "Coding out from the IT trenches.",
        image: "/avatar.png",
        type: "webstie",
        ...customMeta,
    };
    return(
        <div className={styles["main-landing"]}>

                {/* add the rest of the components in here */}
                <Nav />
                <div>{children}</div>
                <div className={styles["hero-text-box"]}>
                    <h1 className={styles["hero-text"]}>Nicholas</h1>
                    <p>beep beep</p>
                </div>
                {/* <Footer /> */}

        </div>
    );
}