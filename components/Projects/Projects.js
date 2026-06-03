import React from "react";
import Link from "next/link";
import projects from "@constants/projects";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="section-projects" className={styles["main-projects"]}>
      <div className={styles["section-interior"]}>
        <h1 className={styles["section-h1"]}>03. Projects</h1>
        <div className={styles["layout-projects"]}>
          {projects.map((project, index) => (
            <div key={index} className={styles["project-item"]}>
              <p className={styles["project-status"]}>{project.status}</p>
              <h2 className={styles["project-title"]}>{project.title}</h2>
              <p className={styles["project-description"]}>
                {project.summary}
              </p>
              <div className={styles["project-technologies"]}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles["tech-tag"]}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles["project-actions"]}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles["project-link"]}
                >
                  View Case Study
                </Link>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className={styles["project-secondary-link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
