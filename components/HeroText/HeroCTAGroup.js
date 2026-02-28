import React from "react";
import styles from "./HeroCTAGroup.module.css";

const HeroCTAGroup = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nicholasnoochlaor/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles["cta-wrapper"]}>
      {/* Primary CTA Buttons */}
      <div className={styles["cta-buttons"]}>
        <button
          className={styles["cta-primary"]}
          onClick={() => scrollToSection("projects")}
        >
          View My Work
          <span className={styles["icon"]}>→</span>
        </button>
        <button
          className={styles["cta-secondary"]}
          onClick={handleViewLinkedIn}
        >
          View LinkedIn
          <span className={styles["icon"]}>→</span>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className={styles["scroll-down"]}
        aria-label="Scroll to About section"
      >
        <span className={styles["bounce-arrow"]}>↓</span>
      </button>
    </div>
  );
};

export default HeroCTAGroup;