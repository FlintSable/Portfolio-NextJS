import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css"
// import userData from "@constants/data";

import Nav from "./Nav";
import MainLanding from "./MainLanding";
import Header from "./Header";


export default function Container({ children, ...customMeta}){
    const router = useRouter();

    const meta = {
        title: "Nicholas Noochla-or - Developer",
        description: "Coding out from the IT trenches.",
        image: "/avatar.png",
        type: "webstie",
        ...customMeta,
    };
    return(
        <div className={styles.wrapper}>
            <Head>
                <title>{meta.title}</title>
            </Head>
            <Header />
            <MainLanding />
            
        </div>
    );
}