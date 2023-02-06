import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import {HeroHall} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {GalleryHall} from "../api/data/galleryItems";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import DescriptionHall from "../../components/Description/DescriptionHall";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Зал, Аренда лофта для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description" content="Описание страницы Hall, гигансткое помещение для тусовки с друзьями, отдохните кломпанией и отметьте дни рожения, проведите корпоративы, посмотрите фильмы"/>
                <meta name="Keywords" content="Лофт, wp54, Новосибирск, аренда помещения, комната, помещение, отдохнуть"/>
            </Head>
            <Layout>
                <main>
                    <HeroSlider heroGallery={HeroHall} sliderSettings= {SliderSettingsHero} />
                    <DescriptionHall/>
                    <GridGallery gridGallery={GalleryHall} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




