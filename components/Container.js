import React from "react";
import Head from "next/head";
import { useRouter } from "next/router"
// import Nav from "./Nav";
// import Footer from "./Footer";

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
        <div>
            <Head>
                <title>{meta.title}</title>
            </Head>
            <main className="dark:bg-greay-800 w-full">
                {/* <Nav /> */}
                <div>{children}</div>
                {/* <Footer /> */}
            </main>
        </div>
    );
}