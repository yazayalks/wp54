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
                <title>wp54 | Equipment</title>
                <meta name="Описание" content="Описание страницы Equipment"/>
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


