import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Hero from "../../components/Hero/Hero";
import {HeroBirthdays} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import {GalleryBirthdays} from "../api/data/galleryItems";
import DescriptionBirthdays from "../../components/Description/DescriptionBirthdays";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Birthdays</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery={HeroBirthdays} sliderSettings={SliderSettingsHero} textAlign={'center'}/>
                    <DescriptionBirthdays/>
                    <GridGallery gridGallery={GalleryBirthdays} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




