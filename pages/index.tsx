import Head from "next/head";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Description from "../components/Description/Description";
import {GalleryMainItems} from "./api/data/galleryItems";
import {HeroMainItems} from "./api/data/heroItems";


import React from "react";
import SampleNextArrow from "../components/Arrows/SampleNextArrow";
import SamplePrevArrow from "../components/Arrows/SamplePrevArrow";
import Gallery from "../components/Gallery/Gallery";
import PriceTable from "../components/PriceTable/PriceTable";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";


const heroMainSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (
        <div style={{margin: "0px", padding: "0px", bottom: '100px'}}>
            <ul > {dots} </ul>
        </div>
    ),
};

const gallerySliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
export default function Index({heroMainItems} : any) {
    return (
        <>
            <Head>
                <title>wp54 | Main</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo/wp54_icon.svg"/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Layout>

                <main>

                    <Hero heroItems = {HeroMainItems} heroSettings = {heroMainSettings} />
                    <Description descriptionName={'main'}/>
                    <Services/>
                    <Gallery galleryItems = {GalleryMainItems} gallerySliderSettings={gallerySliderSettings }/>


                    <h2 style={{marginTop: '25px', textAlign: 'center'}}>Основные цены</h2>
                    <PriceTable/>
                    <Contact/>

                </main>
            </Layout>
        </>
    )
}
