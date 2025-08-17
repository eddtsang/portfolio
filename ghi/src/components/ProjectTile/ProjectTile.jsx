import styles from './ProjectTile.module.css';

function ProjectTile({ project }) {
  const { title, description, image, techStack, repo } = project;

  return (
    <div className={styles.project_tile}>
      <div>
        <img className={styles.project_image} src={image} alt={title} />
      </div>

      <div className={styles.project_content}>
        <h3 className={styles.project_title}>{title}</h3>
        <p className={styles.project_description}>{description}</p>

        <div className={styles.project_tech_stack}>
          {/* <p>{techStack}</p> */}
          {techStack.map((tech) => (
            <span key={tech} className={styles.tech_tag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.project_links}>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
