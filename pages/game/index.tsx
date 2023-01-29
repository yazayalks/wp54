import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import {HeroGame} from "../api/data/heroItems";
import React from "react";
import {SliderSettingsHeroMain} from "../../settings";
import DescriptionGame from "../../components/Description/DescriptionGame";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Game</title>
                <meta name="Описание" content="Описание страницы Game"/>
            </Head>
            <Layout>
                <main>
                    <HeroSlider heroGallery={HeroGame} sliderSettings={SliderSettingsHeroMain}/>
                    <DescriptionGame/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




