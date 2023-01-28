import styles from '../../styles/heroSlider.module.scss';
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, {FC} from "react";
import {GalleryType} from "../../types";


interface HeroSliderProps {
    heroGallery: GalleryType,
    sliderSettings: Settings,
    textAlign?: string
}

const HeroSlider: FC<HeroSliderProps> = ({heroGallery, sliderSettings, textAlign}) => {
    return (
        <Slider {...sliderSettings}>
            {heroGallery.items.map((item: any, index) => (
                <div key={item.id} className={styles.slider__item}>
                    <div className={styles.text__container}>
                        <div className={styles.text__container__inner}>
                            <h1 className="title--contour"> {item.title}</h1>
                            <p className="text--big text--unchanged text--contour"><strong>{item.description}</strong></p>
                        </div>
                    </div>
                    {index === 0 ?
                        <Image priority className={styles.image} src={`${heroGallery.path}${item.name}`} width={1920}
                               height={1080} alt={item.name}/>
                        :
                        <Image className={styles.image} src={`${heroGallery.path}${item.name}`} width={1920}
                               height={1080} alt={item.name}/>
                    }
                </div>
            ))}
        </Slider>
    );
};

export default HeroSlider;