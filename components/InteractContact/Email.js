import React from "react";
import styles from "./Email.module.css";

const Email = () => {
  return (
    <div className={styles.mailwrap}>
      <div className={styles.email}>
        <a href="mailto:nnlaor@gmail.com" className={styles.a}>
          nnlaor@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Email;
