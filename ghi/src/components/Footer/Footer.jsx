import styles from "./Footer.module.css";

import github_dark from '../../assets/logos/github-mark.png';
import gitlab_dark from '../../assets/logos/gitlab_logo_black.png';
import linked_dark from '../../assets/logos/InBug-Black.png';

function Footer() {
    return(
        <footer className={styles.footer}>
            <p>© 2025 Eddie Tsang</p>
            <div className={styles.social_links}>
                <a
                    href="https://gitlab.com/eddtsang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.social_link}
                >
                    <img className={styles.footer_img} src={gitlab_dark} alt="GitLab Profile" />
                </a>
                <a
                    href="https://github.com/eddtsang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.social_link}
                >
                    <img className={styles.footer_img} src={github_dark} alt="GitHub Profile" />
                </a>
                <a
                    href="https://www.linkedin.com/in/eddie-tsang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.social_link}
                >
                    <img className={styles.footer_img} src={linked_dark} alt="LinkedIn Profile" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
