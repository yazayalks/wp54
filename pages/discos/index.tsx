import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import {HeroDiscos} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {SliderSettingsGallery} from "../../settings";
import {GalleryDiscos} from "../api/data/galleryItems";
import DescriptionDiscos from "../../components/Description/DescriptionDiscos";
import Hero from "../../components/Hero/Hero";
import {Pages} from "../../types";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Discos</title>
                <meta name="Описание" content="Описание страницы Discos"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery={HeroDiscos} page={Pages.Discos}/>
                    <DescriptionDiscos/>
                    <GridGallery gridGallery={GalleryDiscos} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




