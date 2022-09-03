import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import mailstyles from "../styles/Email.module.css";
import Nav from "./Nav";
import HeroText from "./HeroText";


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
                
                < HeroText />   

                <div>
                    {/* social media bar */}
                </div>
                <div className={mailstyles.mailwrap}>
                    <div className={mailstyles.email}>
                        {/* email bar */}
                        <a href="mailto:nnlaor@gmail.com" className={mailstyles.a}>
                            nnlaor@gmail.com
                        </a>
                    </div>
                </div>
                {/* <Footer /> */}

        </div>
    );
}