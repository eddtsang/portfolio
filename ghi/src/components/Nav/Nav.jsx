import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
    return (
        <nav className={styles.nav}>
            <Link to="/"><div>Home</div></Link>
            <Link to="/aboutme"><div>About Me</div></Link>
            <Link to="/projects"><div>Projects</div></Link>
            <Link to="/contact"><div>Contact</div></Link>
        </nav>
    );
};

export default Nav;
