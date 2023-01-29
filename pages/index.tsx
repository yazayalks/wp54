import Head from "next/head";
import Layout from "../components/Layout/Layout";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Gallery from "../components/Gallery/Gallery";
import PriceTable from "../components/PriceTable/PriceTable";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import {SliderSettingsGalleryMain, SliderSettingsHeroMain} from "../settings";
import {GalleryMain} from "./api/data/galleryItems";
import {HeroMain} from "./api/data/heroItems";
import DescriptionMain from "../components/Description/DescriptionMain";
import React from "react";


export default function Index() {
    return (
        <>
            <Head>
                <title>wp54 | Main</title>
                <meta name="Описание" content="Описание страницы Main"/>
                <meta name="Keywords" content="Лофт, wp54, Новосибирск, аренда помещения"/>
            </Head>
            <Layout>
                <main>
                    <HeroSlider heroGallery={HeroMain} sliderSettings={SliderSettingsHeroMain}/>
                    <DescriptionMain/>
                    <Services/>
                    <Gallery gallery={GalleryMain} sliderSettings={SliderSettingsGalleryMain}/>
                    <h2 style={{marginTop: '25px', textAlign: 'center'}}>Основные цены</h2>
                    <PriceTable/>
                    <Contact/>
                </main>
            </Layout>
        </>
    )
}
