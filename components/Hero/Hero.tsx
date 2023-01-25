import styles from '../../styles/hero.module.scss';
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, {FC} from "react";
import {GalleryType} from "../../types";


interface HeroProps {
    heroGallery: GalleryType,
    sliderSettings: Settings,
    textAlign?: string
}

const Hero: FC<HeroProps> = ({heroGallery, sliderSettings, textAlign}) => {
    return (
        <Slider {...sliderSettings}>
            {heroGallery.items.map((item: any) => (
                <div key={item.id} className={styles.item}>

                    <div className={`
                        ${styles.text__container}
                            ${textAlign === 'center' ? styles.text__container__center : ''}
                            ${textAlign === 'left' ? styles.text__container__left : ''}
                            ${textAlign === 'right' ? styles.text__container__right : ''}
                            `}>
                        <div className={styles.text__container_inner}>
                            <h1 className="over-title">{item.title}</h1>
                            <p className="big-text over-text">{item.description}</p>
                        </div>
                    </div>
                    <Image loading="lazy" className={styles.image} src={`${heroGallery.path}${item.name}`} width={1900}
                           height={840} alt={item.name}/>
                </div>
            ))}
        </Slider>
    );
};

export default Hero;