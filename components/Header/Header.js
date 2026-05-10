import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#section-about", label: "About" },
  { href: "#section-experience", label: "Experience" },
  { href: "#section-projects", label: "Projects" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header id="nav" className={styles.header}>
      <Link
        href="#section-main"
        className={styles.logo}
        aria-label="Back to top"
        onClick={() => setMenuOpen(false)}
      >
        <img src="/pen.webp" alt="" />
      </Link>

      <button
        type="button"
        className={styles["menu-button"]}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span className={styles["menu-line"]} />
        <span className={styles["menu-line"]} />
        <span className={styles["menu-line"]} />
      </button>

      <nav
        id="primary-navigation"
        className={`${styles["main-nav"]} ${menuOpen ? styles["nav-open"] : ""}`}
      >
        <ul className={styles.ul}>
          {navLinks.map((link) => (
            <li key={link.href} className={styles.li}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className={styles.li}>
            <a
              href="https://www.linkedin.com/in/nicholasnoochlaor/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
