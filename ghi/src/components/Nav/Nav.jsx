import styles from "./Nav.module.css";

function Nav() {
    return (
        <nav className={styles.nav}>
            <div>About Me</div>
            <div>Projects</div>
            <div>Contact</div>
        </nav>
    );
};

export default Nav;
