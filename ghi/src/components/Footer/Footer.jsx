 import styles from "./Footer.module.css";

 import github_dark from '../../assets/logos/github-mark.png';
 import gitlab_dark from 'assets/logos/gitlab_logo_black.png';
 import linked_dark from 'assets/logos/InBug-Black.png';

function Footer() {
    console.log("check")
    return(
        <footer className={styles.footer}>
            <p>© 2025 Eddie Tsang</p>
            <div>
                <img src={gitlab_dark} alt="GitLab" />
                <img src={github_dark} alt="GitHub" />
                <img src={linked_dark} alt="LinkedIn" />
            </div>
        </footer>
    );
};

export default Footer;
