import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Services from "../../components/Services/Services";
import DescriptionProjector from "../../components/Description/DescriptionProjector";
import React from "react";
import GridGallery from "../../components/GridGallery/GridGallery";
import {GalleryProjector} from "../../pages/api/data/galleryItems";
import {SliderSettingsGallery} from "../../settings";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Проектор в лофте для мероприятий в Новосибирске welcome_party54</title>
                <meta name="description"
                      content="Описание страницы Projector, устройте киновечера со своей компанией в нашем лофте, также вы можете смотреть любые фотографии, клипы и видео"/>
                <meta name="keywords" content="Лофт, wp54, Новосибирск, аренда помещения, проектор, фильмы, кинотеатр, клипы, слайдшоу, мультики"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionProjector/>
                    <GridGallery gridGallery={GalleryProjector} sliderSettings={SliderSettingsGallery}/>
                    <Services/>
                </main>
            </Layout>
        </>
    )
};

export default Index;
