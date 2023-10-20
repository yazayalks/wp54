import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, {FC, ReactNode} from "react";
import styles from "../../styles/backgroundAnimation.module.scss"



type LayoutProps = {
    children: ReactNode,
}
const Layout: FC<LayoutProps> = ({children}) => (
    <>
        <Header/>
        {children}
        <Footer/>
        <div className={styles.background_animation}>
            <div className={styles.ball_one}></div>
            <div className={styles.ball_two}></div>
            <div className={styles.ball_three}></div>
            <div className={styles.ball_four}></div>
            <div className={styles.ball_five}></div>
            <div className={styles.ball_six}></div>
        </div>
    </>
);

export default Layout;