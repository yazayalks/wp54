import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import {HeroGame} from "../api/data/heroItems";
import React from "react";
import {SliderSettingsHero} from "../../settings";
import DescriptionGame from "../../components/Description/DescriptionGame";

const Index = () => {
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
                    <Hero heroGallery={HeroGame} sliderSettings={SliderSettingsHero}/>
                    <DescriptionGame/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




