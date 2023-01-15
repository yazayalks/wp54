import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import {HeroGameItems} from "../api/data/heroItems";
import React from "react";
import Description from "../../components/Description/Description";

const Index = () => {
    const heroHallSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        appendDots: (dots: React.ReactNode) => (
            <div style={{margin: "0px", padding: "0px", bottom: '100px'}}>
                <ul > {dots} </ul>
            </div>
        ),
    };
    return (
        <>
            <Head>
                <title>wp54 | Game</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroItems = {HeroGameItems} heroSettings = {heroHallSettings} />
                    <Description descriptionName={'game'}/>
                </main>
            </Layout>

        </>
    )
};

export default Index;




