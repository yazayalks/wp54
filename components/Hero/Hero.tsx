import styles from '../../styles/hero.module.scss';
import React, {FC} from "react";
import Image from "next/image";
import {GalleryType, Pages} from "../../types";

interface HeroProps {
    heroGallery: GalleryType,
    page?: Pages,

}

const getStylePage = (page?: Pages) => {
    if (page === Pages.Discos) {
        return styles.hero__text__container__inner__discos
    }
    if (page === Pages.Parties) {
        return styles.hero__text__container__inner__parties
    }
    if (page === Pages.Corporate) {
        return styles.hero__text__container__inner__corporate
    }
    if (page === Pages.Birthdays) {
        return styles.hero__text__container__inner__birthdays
    }
    if (page === Pages.Movies) {
        return styles.hero__text__container__inner__movies
    }
    if (page === undefined) {
        return ''
    }
}

const Hero: FC<HeroProps> = ({heroGallery, page}) => {
    const heroItem = heroGallery.items[0];
    return (
        <div className={styles.hero}>
            <div className={styles.hero__text__container}>
                <div className={`${styles.hero__text__container__inner} ${getStylePage(page)}`}>
                    <h1 className="over-title">{heroItem.title}</h1>
                    <p className="big-text over-text">{heroItem.description}</p>
                </div>
            </div>
            <Image priority className={styles.image} src={`${heroGallery.path}${heroItem.name}`} width={1920}
                   height={1080} alt={heroItem.name}/>
        </div>
    );
};

export default Hero;