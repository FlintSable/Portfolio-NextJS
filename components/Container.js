import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
// import userData from "@constants/data";
import Script from 'next/script';
import Nav from "./Nav";
import MainLanding from "./MainLanding";
import Header from "./Header";
import About from "./About";


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
            < Header />
            < MainLanding />
            < About />
            <Script>
                {
                    `var prevScrollpos = window.pageYOffset;
                    window.onscroll = function() {
                    let currentScrollPos = window.pageYOffset;
                    if (prevScrollpos > currentScrollPos) {
                        document.getElementById("nav").style.top = "0";
                    } else {
                        document.getElementById("nav").style.top = "-100px";
                    }
                    prevScrollpos = currentScrollPos;
                    }
                    

                    // function textSwap(){
                    //     var op = document.getElementById("hero-text")
                    //     if(window.getComputedStyle(op).getPropertyValue("opacity") < 0.5){
                    //         console.log(window.getComputedStyle(op).getPropertyValue("opacity"));
                    //         if(document.getElementById("hero-text").innerHTML == "Nicholas"){
                    //             document.getElementById("hero-text").innerHTML = "noochla";

                    //         } else if(document.getElementById("hero-text").innerHTML == "noochla"){
                    //             document.getElementById("hero-text").innerHTML = "Nicholas";

                    //         }
                    //     }


                    //     setTimeout(textSwap, 1200);
                    // }
                    // textSwap();
                    

                    
                    `
                }
            </Script>

            
        </div>
    );
}