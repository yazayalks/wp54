import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import {HeroGame} from "../api/data/heroItems";
import React from "react";
import {SliderSettingsHero} from "../../settings";
import DescriptionGame from "../../components/Description/DescriptionGame";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Игровая, Аренда лофта для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Game, у нас вы можете поиграть в рахные игры на x-box, есть два джостика и мягкие пуфы"/>
                <meta name="Keywords" content="Лофт, wp54, Новосибирск, аренда помещения,x-box, пуфы, джостики "/>
            </Head>
            <Layout>
                <main>
                    <HeroSlider heroGallery={HeroGame} sliderSettings={SliderSettingsHero}/>
                    <DescriptionGame/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




