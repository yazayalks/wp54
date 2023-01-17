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
                    <div key={item.id} className={styles.item}>

                        <div className={styles.text__container}>
                            <div className={styles.text__container_inner}>
                                <h1>{item.title}</h1>
                                <p className="big-text">{item.description}</p>
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