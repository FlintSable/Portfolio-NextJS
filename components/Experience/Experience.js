import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div id="section-experince" className={styles["main-experience"]}>
      <div className={"section-interior"}>
        <h1 className={"section-h1"}>02. Experience</h1>
        <div className={styles["layout-exp"]}>
          {/* this next section should loop over data */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
