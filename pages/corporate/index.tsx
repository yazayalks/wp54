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
                <title>wp54 | Корпоративы в аренде лофта для мероприятий в Новосибирске - welcome_party54</title>
                <meta name="description" content="Описание страницы Corporate, проведения корпоротива в новосибирске, встретьтое праздники со своим начальстом и получите потом премию"/>
                <meta name="keywords" content="Лофт, wp54, Новосибирск, аренда помещения, корпоратив "/>
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




