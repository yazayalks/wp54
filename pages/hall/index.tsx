import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import {HeroHall} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {GalleryHall} from "../api/data/galleryItems";
import {SliderSettingsGallery, SliderSettingsHeroMain} from "../../settings";
import DescriptionHall from "../../components/Description/DescriptionHall";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Hall</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="Описание" content="Описание страницы Hall"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <HeroSlider heroGallery={HeroHall} sliderSettings= {SliderSettingsHeroMain} />
                    <DescriptionHall/>
                    <GridGallery gridGallery={GalleryHall} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




