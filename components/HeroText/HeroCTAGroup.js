import React from "react";
import styles from "./HeroCTAGroup.module.css";

const HeroCTAGroup = () => {
  const scrollToSection = (sectionId) => {
    // const element = document.getElementById(`section-${sectionId}`);
    
    let element;
    if(sectionId === 'projects'){
        element = document.querySelector('[class*="main-projects"]');
    } else if (sectionId == 'about'){
        element = document.getElementById('section-about')
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure this file exists in your public folder
    link.download = 'Nicholas_Noochla-or_Resume.pdf';
    link.click();
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
          onClick={handleDownloadResume}
        >
          Download Resume
          <span className={styles["icon"]}>↓</span>
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