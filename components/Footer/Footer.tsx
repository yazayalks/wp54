import styles from '../../styles/footer.module.scss'
import Logo from "../Logo/Logo";
import React from "react";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
                <Logo/>
            </div>
        </footer>
    );
};

export default Footer;