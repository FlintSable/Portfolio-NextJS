import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"



export default function Header(){
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src="/favicon.ico" width={30} height={30} />
            </div>
            <nav className={styles.mainnav}>
                <ul className={styles.ul}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </nav>
        </header>

    );
}