import React from "react";
import SampleNextArrow from "./components/Arrows/SampleNextArrow";
import SamplePrevArrow from "./components/Arrows/SamplePrevArrow";
import {Settings} from "react-slick";

// export const SliderSettingsHero: Settings = {
//     dots: false,
//     arrows: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     appendDots: (dots: React.ReactNode) => (
//         <div style={{margin: "0px", padding: "0px", bottom: '100px'}}>
//             <ul> {dots} </ul>
//         </div>
//     ),
// };

export const SliderSettingsHero: Settings = {
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
            <ul> {dots} </ul>
        </div>
    ),
};


export const SliderSettingsGallery: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
};

export const SliderSettingsGalleryMain: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
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
