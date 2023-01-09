import {useEffect, useState} from 'react';
import styles from '../../styles/hero.module.scss';
import HeroItem from "./HeroItem";
import Dots from "../Dots/Dots";
import Arrows from '../Arrows/Arrows';
import Slider from "react-slick";
import SliderTypes from "react-slick/index"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";


const heroImages = [
    {
        id: 1,
        title: "First Slide",
        description: "This is the first slider Image of our carousel",
        urls: '../../images/hero/img-1.png',
    },
    {
        id: 2,
        title: "Second Slide",
        description: "This is the second slider Image of our carousel",
        urls: '../../images/hero/img-2.png',
    },
    {
        id: 3,
        title: "Third Slide",
        description: "This is the Third slider Image of our carousel",
        urls: '../../images/hero/img-3.png',
    },
];

const Hero = () => {

    // return (
    //     <section>
    //         <div>
    //             <div className={styles.hero__inner}>
    //                 <img src={`${process.env.URL_BASE }/images/hero/img-1.png`} alt="1"/>
    //             </div>
    //         </div>
    //     </section>
    // );

    // const [activeIndex, setActiveIndex] = useState(0);
    // const len = heroImages.length - 1;
    //
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [activeIndex]);
    //
    // return (
    //     <div className="slider-container">
    //         <HeroItem activeIndex={activeIndex} heroImage={heroImages} />
    //         <Arrows
    //             prevSlide={() =>
    //                 setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
    //             }
    //             nextSlide={() =>
    //                 setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    //             }
    //         />
    //         <Dots
    //             activeIndex={activeIndex}
    //             heroImage={heroImages}
    //             onclick={(activeIndex : any) => setActiveIndex(activeIndex)}
    //         />
    //     </div>
    // );

    const settings = {
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
            <div style={{margin: "0px", position: 'relative', bottom: '100px',}}>
                <ul> {dots} </ul>
            </div>
        ),


    };

    return (
        <div className={styles.heroContainer}>

            <Slider {...settings}>

                {heroImages.map(image => (

                    <div key={image.id} className={styles.imageCard}>
                        <img className={styles.image} src={`${image.urls}`} alt=""/>
                        <img className={styles.image} src={`${image.urls}`} alt=""/>
                    </div>

                ))}
            </Slider>

        </div>
    );
};

export default Hero;