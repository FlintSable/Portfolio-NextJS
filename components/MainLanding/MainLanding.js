import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./MainLanding.module.css";
import Email from "@components/InteractContact/Email";
// import Nav from "./Nav";
import HeroText from "@components/HeroText/HeroText";
// import About from "./About";


export default function MainLanding({ children, ...customMeta}){
    const router = useRouter();



    const meta = {
        title: "Nicholas Noochla-or | Developer",
        description: "Coding out from the IT trenches.",
        image: "/avatar.png",
        type: "website",
        ...customMeta,
    };


    return(
        <div id="section-main" className={styles["main-landing"]}>

                {/* add the rest of the components in here */}
                {/* <Nav /> */}
                <div>{children}</div>
                
                < HeroText />   

                <div>
                    {/* social media bar */}
                </div>
                {/* <Email /> */}
                {/* <Footer /> */}

        </div>
    );
}
