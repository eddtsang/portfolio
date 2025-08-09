// import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
    return (
        <nav className={styles.nav}>
            <a href="/">
                <button className={styles.button}>Home</button>
            </a>
            <a href="/aboutme">
                <button className={styles.button}>About Me</button>
            </a>
            <a href="/projects">
                <button className={styles.button}>Projects</button>
            </a>
            <a href="contact">
                <button className={styles.button}>Contact</button>
            </a>
            {/*
            <Link to="/"><div>Home</div></Link>
            <Link to="/aboutme"><div>About Me</div></Link>
            <Link to="/projects"><div>Projects</div></Link>
            <Link to="/contact"><div>Contact</div></Link>
            */}
        </nav>
    );
};

export default Nav;
