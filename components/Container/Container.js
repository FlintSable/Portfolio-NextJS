import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Container.module.css";
import Script from "next/script";

// import Nav from "./Nav";
// import MainLanding from "./MainLanding";
// import Header from "./Header";
// import About from "./About";
// import Experience from "./Experience";

export default function Container({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Nicholas Noochla-or - Developer",
    description: "Coding out from the IT trenches.",
    image: "/avatar.png",
    type: "webstie",
    ...customMeta,
  };
  return (
    <div className={styles.wrapper}>
      {/* <Head>
        <title>{meta.title}</title>
      </Head>
      <Header />
      <MainLanding />
      <About />
      <Experience /> */}
      {children}
      <Script>
        {`var prevScrollpos = window.pageYOffset;
                    window.onscroll = function() {
                    let currentScrollPos = window.pageYOffset;
                    if (prevScrollpos > currentScrollPos) {
                        document.getElementById("nav").style.top = "0";
                    } else {
                        document.getElementById("nav").style.top = "-100px";
                    }
                    prevScrollpos = currentScrollPos;
                    }
                    `}
      </Script>
    </div>
  );
}
