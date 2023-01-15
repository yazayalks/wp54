import styles from '../../styles/hero.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import React from "react";

const Hero = ({heroItems, heroSettings}  : any) => {
    return (

            <Slider {...heroSettings}>
                {heroItems.map((item: any) => (
                    <div key={item.id} className={styles.imageCard}>

                        <div className={styles.containerHero}>
                            <div className={styles.containerHero2}>
                                <h2>{item.title}</h2>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                        <Image className={styles.image} src={item.url} width={1900}
                               height={840} alt={item.name}/>
                    </div>
                ))}
            </Slider>

    );
};

export default Hero;