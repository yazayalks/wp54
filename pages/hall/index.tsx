import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Hero from "../../components/Hero/Hero";
import {HeroHall} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {GalleryHall} from "../api/data/galleryItems";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import DescriptionHall from "../../components/Description/DescriptionHall";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Hall</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery={HeroHall} sliderSettings= {SliderSettingsHero} />
                    <DescriptionHall/>
                    <GridGallery gridGallery={GalleryHall} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




