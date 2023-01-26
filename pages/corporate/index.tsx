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
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
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




