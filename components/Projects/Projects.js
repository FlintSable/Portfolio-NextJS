import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Developed a full-stack e-commerce platform using React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/yourusername/ecommerce-project",
  },
  {
    title: "Weather App",
    description:
      "Created a weather application that fetches real-time data from a weather API.",
    technologies: ["JavaScript", "API Integration", "CSS3", "HTML5"],
    link: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Task Management System",
    description:
      "Built a task management system with user authentication and real-time updates.",
    technologies: ["React", "Firebase", "Material-UI"],
    link: "https://github.com/yourusername/task-manager",
  },
];

const Projects = () => {
  return (
    <div className={styles["main-projects"]}>
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
