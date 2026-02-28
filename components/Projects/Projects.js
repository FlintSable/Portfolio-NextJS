import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "JOS64 Operating System",
    description:
      "Built a 64-bit x86-64 OS kernel with UEFI boot, 4-level virtual memory, copy-on-write fork, multiprocessor support, and inter-process communication. Implemented across four labs for CS 476 Operating Systems.",
    technologies: ["C", "x86-64 Assembly", "QEMU", "GDB"],
    link: "https://github.com/FlintSable/jos64",
  },
];

const Projects = () => {
  return (
    <div id="section-projects" className={styles["main-projects"]}>
      <div className={styles["section-interior"]}>
        <h1 className={styles["section-h1"]}>03. Projects</h1>
        <div className={styles["layout-projects"]}>
          {projects.map((project, index) => (
            <div key={index} className={styles["project-item"]}>
              <h2 className={styles["project-title"]}>{project.title}</h2>
              <p className={styles["project-description"]}>
                {project.description}
              </p>
              <div className={styles["project-technologies"]}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles["tech-tag"]}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className={styles["project-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
