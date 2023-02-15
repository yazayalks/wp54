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
                <title>wp54 | Фильмы в лофте для мероприятий в Новосибирске - welcome_party54</title>
                <meta name="description" content="Описание страницы Movies, смотрите любые фильмы на ваш вкус, устройте свой киновечер со своей компанией. Личный кинотеатр в Новосибирске по низким ценам"/>
                <meta name="keywords" content="Лофт, wp54, Новосибирск, аренда помещения, кинотеатр, фильмы, сериалы, клипы "/>
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




