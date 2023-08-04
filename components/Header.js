import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'





export default function Header(){
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return(
        <>
            <header id='nav' className={styles.header}>
                <div className={styles.logo}>
                </div>
                <nav className={styles["main-nav"]}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>01.About</li>
                        <li className={styles.li}>02.Experince</li>
                        <li className={styles.li}>03.Projects</li>
                        <li className={styles.li}>04.Resume</li>

    
                    </ul>
                </nav>
            </header>
        </>

    );
}