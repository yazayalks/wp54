import React, {useState} from 'react';


import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "../Arrows/SampleNextArrow";
import SamplePrevArrow from "../Arrows/SamplePrevArrow";
import styles from '../../styles/gallery.module.scss'
import Image from "next/image";


const Gallery = ({galleryItems, gallerySettings, sliderSettings}: any) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number: number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    const settings = {
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

    const getSources = () => {
        let arr: Array<string> = [];
        for (let i: number = 0; i < galleryItems.length; i++) {
            arr.push(galleryItems[i].url)
        }
        return arr;
    }

    return (
        <>

            <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={getSources()}
            />
            <Slider {...settings}>
                {galleryItems.map((item: any) => (

                    <div key={item.id} className={styles.imageCard}>
                        <Image onClick={() => openLightboxOnSlide(item.id)} width={1000} height={1000} className={styles.image} src={item.url}
                               alt={item.name}/>
                    </div>

                ))}
            </Slider>
        </>
    );
};

export default Gallery;