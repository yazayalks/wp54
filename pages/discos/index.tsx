import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Hero from "../../components/Hero/Hero";
import {HeroDiscos} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import {GalleryDiscos} from "../api/data/galleryItems";
import DescriptionDiscos from "../../components/Description/DescriptionDiscos";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Discos</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery={HeroDiscos} sliderSettings={SliderSettingsHero} textAlign={'center'}/>
                    <DescriptionDiscos/>
                    <GridGallery gridGallery={GalleryDiscos} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




