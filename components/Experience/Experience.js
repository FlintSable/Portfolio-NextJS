import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Experience.module.css";

const experienceData = [
  {
    date: "April 2020 - August 2022",
    jobTitle: "Senior IT Support Specialist",
    company: "Magnite",
    description: [
      "Implemented custom scripts to streamline IT support process improving response times and contributing to a 95% customer satisfaction rating.",
      "Utilized security monitoring tools and developed custom alerts to reduce security incidents by 30%.",
      "Automated software deployment procedures using Bash and PowerShell scripting during company mergers, ensuring efficient rollout to 3000+ employees.",
      "Configured and customized management systems (Jamf and Desktop Central) to maintain 99.9% system uptime across diverse environments.",
      "Created technical documentation and developed troubleshooting guides for in-house software, reducing resolution time by 20% through improved knowledge management.",
    ],
  },
  {
    date: "June 2018 - May 2022",
    jobTitle: "Website Administrator & Technical Support",
    company: "Ecco Studios",
    description: [
      "Configured Google workspace and utilized command line management (GAM) to manage domain and user permissions.",
      "Provided IT support for executives and students, resolving 90% of issues on first call.",
      "Managed WordPress server and DNS settings, reducing downtime by 15% through regular updates.",
      "Developed PHP scripts for inventory reports, optimizing data management and process efficiency.",
      "Managed WordPress site and MySQL database, ensuring accurate updates and content management.",
    ],
  },
  {
    date: "Feb 2018 - Dec 2019",
    jobTitle: "Web Developer and IT Support",
    company: "Ecco Studios",
    description: [
      "Provided IT support for architects and executives (MacOS, Windows), achieving a 92% first time fix rate.",
      "Monitored spam filters (Canit pro), Palo alto traps antivirus alerts and HP IMC console alerts network.",
      "Maintained automation scripts, improving IT department efficiency by 15% through streamlined processes.",
      "Leveraged Active Directory for comprehensive user and group management, streamlining onboarding and access control.",
    ],
  },
  {
    date: "Feb 2018 - Dec 2019",
    jobTitle: "Inventory Database Admin",
    company: "Granada Books",
    description:
      "Developed software solutions and collaborated with cross-functional teams.",
  },
];

const Experience = () => {
  return (
    <div className={styles["main-experience"]}>
      <div className={styles["section-interior"]}>
        <h1 className={styles["section-h1"]}>02. Experience</h1>
        <div className={styles["layout-experience"]}>
          {experienceData.map((exp, index) => (
            <div key={index} className={styles["experience-item"]}>
              <div className={styles["experience-header"]}>
                <h2 className={styles["experience-title"]}>{exp.jobTitle}</h2>
                <h3 className={styles["experience-company"]}>
                  {exp.company} - {exp.location}
                </h3>
                <p className={styles["experience-date"]}>{exp.date}</p>
              </div>
              {Array.isArray(exp.description) ? (
                <ul className={styles["experience-description"]}>
                  {exp.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles["experience-description"]}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
