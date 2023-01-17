import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from "react";
import Hero from "../../components/Hero/Hero";
import {HeroDiscosItems} from "../api/data/heroItems";
import Description from "../../components/Description/Description";
import GridGallery from "../../components/GridGallery/GridGallery";
import {gridGalleryDiscosItems} from "../api/data/gridGalleryItems";
import SampleNextArrow from "../../components/Arrows/SampleNextArrow";
import SamplePrevArrow from "../../components/Arrows/SamplePrevArrow";


const Index = () => {
    const heroDiscosSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        appendDots: (dots: React.ReactNode) => (
            <div style={{margin: "0px", padding: "0px", bottom: '100px'}}>
                <ul > {dots} </ul>
            </div>
        ),
    };
    const gridGallerySliderDiscosSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,

    };
    return (
        <>
            <Head>
                <title>wp54 | Discos</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
            </Head>
            <Layout>
                <main>
                    <Hero heroItems = {HeroDiscosItems} heroSettings = {heroDiscosSettings} textAlign = {'center'} />
                    <Description descriptionName={'discos'}/>
                    <GridGallery gridGalleryItems={gridGalleryDiscosItems} gridGallerySliderSettings={gridGallerySliderDiscosSettings}/>

                </main>
            </Layout>

        </>
    )
};

export default Index;




