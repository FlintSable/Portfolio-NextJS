import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import userData from "@constants/data";


export default function Nav(){
    const router = useRouter();
    console.log(router.asPath);
    // const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return(
        <nav></nav>
    );
}