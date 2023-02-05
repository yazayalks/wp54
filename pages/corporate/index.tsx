import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import {HeroCorporate} from "../api/data/heroItems";
import GridGallery from "../../components/GridGallery/GridGallery";
import {SliderSettingsGallery, SliderSettingsHero} from "../../settings";
import {GalleryCorporate} from "../api/data/galleryItems";
import DescriptionCorporate from "../../components/Description/DescriptionCorporate";
import Hero from "../../components/Hero/Hero";
import {Pages} from "../../types";


const Index = () => {
    return (
        <>
            <Head>
                <title>wp54 | Corporate</title>
                <meta name="Описание" content="Описание страницы Corporate, проведения корпоротива в новосибирске, встретьтое праздники со своим начальстом и получите потом премию"/>
                <meta name="Keywords" content="Лофт, wp54, Новосибирск, аренда помещения, корпоратив "/>
            </Head>
            <Layout>
                <main>
                    <Hero heroGallery={HeroCorporate} page={Pages.Corporate}/>
                    <DescriptionCorporate/>
                    <GridGallery gridGallery={GalleryCorporate} sliderSettings={SliderSettingsGallery}/>
                </main>
            </Layout>
        </>
    )
};

export default Index;




