import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Experience.module.css";

const experienceData = [
  {
    date: 'Jan 2020 - Present',
    jobTitle: 'Senior IT Support Specialist',
    company: 'Magnite',
    description: 'Worked on developing and maintaining the front end of the main product.'
  },
  {
    date: 'Feb 2018 - Dec 2019',
    jobTitle: 'Junior Systems Admin and IT Support Specialist',
    company: 'Gehry Partners',
    description: 'Developed software solutions and collaborated with cross-functional teams.'
  },
  {
    date: 'Feb 2018 - Dec 2019',
    jobTitle: 'Web Developer and IT Support',
    company: 'Ecco Studios',
    description: 'Developed software solutions and collaborated with cross-functional teams.'
  },
  {
    date: 'Feb 2018 - Dec 2019',
    jobTitle: 'Inventory Database Admin',
    company: 'Granada Books',
    description: 'Developed software solutions and collaborated with cross-functional teams.'
  }
]


const Experience = () => {
  return (
    <section id="section-experince" className={styles["main-experience"]}>
      <div className={"section-interior"}>
        <h1 className={"section-h1"}>02. Experience</h1>
        {/* <div className={styles["layout-exp"]}> */}
          {experienceData.map((experience, index) => (
            <div key={index} className={styles.experienceRow}>
              <time dateTime="2020-01">{experience.date}</time>
              <div className={styles.jobDetails}>
                <div className={styles.roleCompany}>
                  <h3>{experience.jobTitle}</h3>
                  <h4>{experience.company}</h4>
                </div>             
              <p>{experience.description}</p>
              </div>
            </div>

          ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Experience;
