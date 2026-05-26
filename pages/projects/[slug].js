import Head from "next/head";
import Link from "next/link";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import projects, { getProjectBySlug } from "@constants/projects";
import styles from "../../styles/ProjectPage.module.css";

export default function ProjectPage({ project }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>{`${project.title} | Nicholas Noochla-or`}</title>
        <meta name="description" content={project.summary} />
      </Head>
      <Header />
      <main className={styles.main}>
        <nav className={styles.breadcrumb} aria-label="Project navigation">
          <Link href="/#section-projects">Projects</Link>
          <span aria-hidden="true">/</span>
          <span>{project.title}</span>
        </nav>

        <section className={styles.hero}>
          <p className={styles.kicker}>{project.status}</p>
          <h1>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.actions}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                View GitHub
              </a>
            )}
            <Link href="/#section-projects" className={styles.secondaryLink}>
              Back to Projects
            </Link>
          </div>
        </section>

        <section className={styles.metaGrid} aria-label="Project details">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Timeline</span>
            <strong>{project.timeframe}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>
        </section>

        <section className={styles.contentGrid}>
          <aside className={styles.sidebar}>
            <h2>Stack</h2>
            <div className={styles.techList}>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <h2>Highlights</h2>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>

          <div className={styles.sections}>
            {project.sections.map((section) => (
              <section key={section.heading} className={styles.detailSection}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: projects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);

  return {
    props: {
      project,
    },
  };
}
