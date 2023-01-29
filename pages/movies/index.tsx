import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import {HeroMovies} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import {GalleryMovies} from "../api/data/galleryItems";
import DescriptionMovies from "../../components/Description/DescriptionMovies";
import Hero from "../../components/Hero/Hero";
import {Pages} from "../../types";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | {Pages.Movies}</title>
                <meta name="Описание" content="Описание страницы Movies"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery={HeroMovies} page={Pages.Movies}/>
                    <DescriptionMovies/>
                    <GridGallery gridGallery={GalleryMovies} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




