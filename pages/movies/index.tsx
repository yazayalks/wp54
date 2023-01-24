import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Hero from "../../components/Hero/Hero";
import {HeroMovies} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import {GalleryMovies} from "../api/data/galleryItems";
import DescriptionMovies from "../../components/Description/DescriptionMovies";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Movies</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery={HeroMovies} sliderSettings={SliderSettingsHero} textAlign={'right'}/>
                    <DescriptionMovies/>
                    <GridGallery gridGallery={GalleryMovies} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




