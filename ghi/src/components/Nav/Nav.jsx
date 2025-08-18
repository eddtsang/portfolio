import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
    const location = useLocation();

    return (
        <nav className={styles.nav}>
            <Link to="/">
                <button className={`${styles.button} ${location.pathname === "/" ? styles.active : ""}`}>
                    Home
                </button>
            </Link>
            <Link to="/aboutme">
                <button className={`${styles.button} ${location.pathname === "/aboutme" ? styles.active : ""}`}>
                    About Me
                </button>
            </Link>
            <Link to="/projects">
                <button className={`${styles.button} ${location.pathname === "/projects" ? styles.active : ""}`}>
                    Projects
                </button>
            </Link>
            <Link to="/contact">
                <button className={`${styles.button} ${location.pathname === "/contact" ? styles.active : ""}`}>
                    Contact
                </button>
            </Link>
        </nav>
    );
};

export default Nav;
