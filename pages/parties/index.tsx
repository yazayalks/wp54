import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import {HeroParties} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import {GalleryParties} from "../api/data/galleryItems";
import DescriptionParties from "../../components/Description/DescriptionParties";
import Hero from "../../components/Hero/Hero";
import {Pages} from "../../types";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Вечеринки в лофте для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Parties, вечеринки с дузьями только у нас "/>
                <meta name="keywords" content="Лофт, wp54, Новосибирск, аренда помещения, вечеринки"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery= {HeroParties} page={Pages.Parties}/>
                    <DescriptionParties/>
                    <GridGallery gridGallery={GalleryParties} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




