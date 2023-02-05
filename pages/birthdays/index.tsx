import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import {HeroBirthdays} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import {GalleryBirthdays} from "../api/data/galleryItems";
import DescriptionBirthdays from "../../components/Description/DescriptionBirthdays";
import Hero from "../../components/Hero/Hero";
import {Pages} from "../../types";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Birthdays</title>
                <meta name="Описание" content="Описание страницы Birthdays, место для проведения дня рождения в новосибирске"/>
                <meta name="Keywords" content="Лофт, wp54, Новосибирск, аренда помещения, день рождение, праздник"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery={HeroBirthdays} page={Pages.Birthdays}/>
                    <DescriptionBirthdays/>
                    <GridGallery gridGallery={GalleryBirthdays} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




