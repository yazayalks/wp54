import React from "react";
import Head from "next/head";
import styles from "../../styles/backgroundAnimation.module.css";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Balls</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="Описание" content="Эту страницу можно классно использовать для заставки монитора"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
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





