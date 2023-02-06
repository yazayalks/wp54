import React from "react";
import Head from "next/head";
import styles from "../../styles/backgroundAnimation.module.css";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Balls</title>
                <meta name="description" content="Эту страницу можно классно использовать для заставки монитора"/>
                <meta name="keywords" content="Лофт, wp54, Новосибирск, аренда помещения, заставка монитора, шарики"/>
            </Head>
            <div className={styles.background_animation}>
                <div className={styles.ball_one}></div>
                <div className={styles.ball_two}></div>
                <div className={styles.ball_three}></div>
                <div className={styles.ball_four}></div>
                <div className={styles.ball_five}></div>
                <div className={styles.ball_six}></div>
            </div>
        </>
    )
};

export default Index;





