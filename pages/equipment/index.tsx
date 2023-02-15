import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Services from "../../components/Services/Services";
import DescriptionEquipment from "../../components/Description/DescriptionEquipment";

import {SliderSettingsGallery} from "../../settings";
import GridGallery from "../../components/GridGallery/GridGallery";
import {GalleryEquipment} from "../../pages/api/data/galleryItems";

const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Оборудование в аренде лофта для мероприятий в Новосибирске - welcome_party54</title>
                <meta name="description" content="Описание страницы Equipment, огромное количество оборудования, проектор, аудио система, колонки, подсветка, светодиоды, лазер, микрофоны, микшер"/>
                <meta name="keywords" content="Лофт, wp54, Новосибирск, аренда помещения, оборудование, аудиосистема, микрофоны, микшер"/>
            </Head>
            <Layout>
                <main>
                    <DescriptionEquipment/>
                    <Services/>
                    <GridGallery gridGallery={GalleryEquipment} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;


