import styles from "./AboutMe.module.css";

function AboutMe() {

    return(
        <div className={styles.about_container}>
            <h1>About Me</h1>
            <p className={styles.about_me_p}> My name is Eddie Tsang, a software developer with a background in Python, JavaScript, and modern web technologies. </p>
            <p className={styles.about_me_p}>I started my career as a Design Release Engineer contractor at General Motors, where I collaborated with suppliers, managed dashboards and oversaw their pre-production and post-production to ensure quality and reliability. Later, I transitioned into a software development contractor at PwC where I designed and implement client-facing interaces using Appian and SQL. </p>
            <p className={styles.about_me_p}>I have completed Hack Reactor's Software Engineering with JavaScript and Python bootcamp.</p>
        </div>
    );
}

export default AboutMe;
