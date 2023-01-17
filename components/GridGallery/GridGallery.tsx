import styles from "../../styles/gridGallery.module.scss";
import Image from "next/image";

import Slider from "react-slick";

import FsLightbox from "fslightbox-react";
import React, {useState} from "react";


const GridGallery = ({gridGalleryItems, gridGallerySliderSettings}: any) => {
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


    const getSources = () => {
        let arr: Array<string> = [];
        for (let i: number = 0; i < gridGalleryItems.length; i++) {
            arr.push(gridGalleryItems[i].url)
        }
        return arr;
    }
    return (<div className={styles.gridGalleryContainer}>
            <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={getSources()}
            />
            <div className={styles.slider}>
                <Slider {...gridGallerySliderSettings}>


                    {gridGalleryItems.map((item: any) => (
                        <div key={item.id} className={styles.grid_gallery__item}>
                            <Image width={1000} height={1000} onClick={() => openLightboxOnSlide(item.id)}
                                   className={styles.image} src={item.url}
                                   alt={item.name}/>
                        </div>
                    ))}

                </Slider>
            </div>

            <div className={styles.grid_gallery}>
                {gridGalleryItems.map((item: any) => (
                    <div key={item.id} className={styles.grid_gallery__item}>
                        <Image width={1000} height={1000} onClick={() => openLightboxOnSlide(item.id)}
                               className={styles.image} src={item.url}
                               alt={item.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridGallery;