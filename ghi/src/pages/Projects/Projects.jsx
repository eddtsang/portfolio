import styles from "./Projects.module.css";
import proj_data from "../../data/projects";

function  Projects() {
    return (
        <>
            <h1>Projects</h1>
            <div className={styles.project_grid}>
                {proj_data.map( project => (
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>

                    )
                )}
            </div>
        </>
    );
};

export default Projects;
