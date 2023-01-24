import React, {FC, useState} from 'react';
import FsLightbox from "fslightbox-react";
import Slider, {Settings} from "react-slick";
import styles from '../../styles/gallery.module.scss'
import Image from "next/image";
import {GalleryItemType, GalleryType} from "../../types";


interface GalleryProps {
    gallery: GalleryType,
    sliderSettings: Settings
}

const Gallery: FC<GalleryProps> = ({gallery, sliderSettings}) => {
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
        for (let i: number = 0; i < gallery.items.length; i++) {
            arr.push(`${gallery.path}${gallery.items[i].name}`)
        }
        return arr;
    }

    return (
        <div className={styles.galleryContainer}>
            <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={getPathImages()}
            />
            <Slider {...sliderSettings}>
                {gallery.items.map((item: GalleryItemType) => (
                    <div key={item.id} className={styles.imageCard}>
                        <Image onClick={() => openLightboxOnSlide(item.id)} width={1000} height={1000}
                               className={styles.image} src={`${gallery.path}${item.name}`}
                               alt={item.name}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Gallery;