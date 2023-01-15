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
import Prices from "./prices";
import PriceTable from "../components/PriceTable/PriceTable";

const heroMainSettings = {
    dots: true,
    arrows: false,
    infinite: true,
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

const galleryMainSettings = {
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
            </Head>
            <Layout>
                <Hero heroItems = {HeroMainItems} heroSettings = {heroMainSettings} />
                <main>
                    <Description/>
                    <Gallery galleryItems = {GalleryMainItems}/>
                    <PriceTable/>
                </main>
            </Layout>
        </>
    )
}
