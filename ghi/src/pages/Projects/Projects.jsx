import styles from "./Projects.module.css";
import proj_data from "../../data/projects";
import ProjectTile from "../../components/ProjectTile/ProjectTile";

function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <div className={styles.project_grid}>
                {proj_data.map(project => (
                    <ProjectTile key={project.id} project={project}/>
                ))}
            </div>
        </>
    );
};

export default Projects;
