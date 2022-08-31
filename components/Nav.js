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
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
            <div className="flex  md:flex-row justify-between items-center">
                <div className="foot-semibold text-x1 dark:text-grey-100">
                    <Link href="/">
                        <a>
                            <h1 className="font-semibold text-x1 dark:text-gray-100">
                                {userData.Name}
                            </h1>
                            <p className="text-base font-light text-gray-500 dark:text-gray-300">
                                {userData.designation}
                            </p>
                        </a>
                    </Link>
                </div>

            </div>
        </div>
    );
}