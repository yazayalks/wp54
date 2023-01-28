import styles from "../../styles/gridGallery.module.scss";
import Image from "next/image";
import Slider, {Settings} from "react-slick";
import FsLightbox from "fslightbox-react";
import React, {FC, useState} from "react";
import {GalleryType} from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GridGalleryProps {
    gridGallery: GalleryType,
    sliderSettings: Settings
}
const GridGallery: FC<GridGalleryProps> = ({gridGallery, sliderSettings}) => {
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


    const getPathImages = () => {
        let arr: Array<string> = [];
        for (let i: number = 0; i < gridGallery.items.length; i++) {
            arr.push(`${gridGallery.path}${gridGallery.items[i].name}`)
        }
        return arr;
    }
    return (
        <div className={styles.grid_gallery__container}>
            <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={getPathImages()}
            />
            <div className={styles.slider}>
                <Slider {...sliderSettings}>
                    {gridGallery.items.map((item: any) => (
                        <div key={item.id} className={styles.grid_gallery__item}>
                            <Image loading="lazy" width={1000} height={1000} onClick={() => openLightboxOnSlide(item.id)}
                                   className={styles.image} src={`${gridGallery.path}${item.name}`}
                                   alt={item.name}/>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className={styles.grid_gallery__inner}>
                {gridGallery.items.map((item: any) => (
                    <div key={item.id} className={styles.grid_gallery__item}>
                        <Image loading="lazy" width={1000} height={1000} onClick={() => openLightboxOnSlide(item.id)}
                               className={styles.image} src={`${gridGallery.path}${item.name}`}
                               alt={item.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridGallery;