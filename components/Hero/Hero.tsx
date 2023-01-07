import {useEffect, useState} from 'react';
import styles from '../../styles/hero.module.scss';
import HeroItem from "./HeroItem";
import Dots from "../Dots/Dots";
import Arrows from '../Arrows/Arrows';


const heroImages =  [
    {
        title: "First Slide",
        description: "This is the first slider Image of our carousel",
        urls: '../../images/hero/img-1.png',
    },
    {
        title: "Second Slide",
        description: "This is the second slider Image of our carousel",
        urls:'../../images/hero/img-2.png',
    },
    {
        title: "Third Slide",
        description: "This is the Third slider Image of our carousel",
        urls:'../../images/hero/img-3.png',
    },
];

const Hero = () => {
    // return (
    //     <section>
    //         <div>
    //             <div className={styles.hero__inner}>
    //                 <img src={`${process.env.URL_BASE }/images/hero/img-1.png`} alt="1"/>
    //             </div>
    //         </div>
    //     </section>
    // );

    const [activeIndex, setActiveIndex] = useState(0);
    const len = heroImages.length - 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <HeroItem activeIndex={activeIndex} heroImage={heroImages} />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                heroImage={heroImages}
                onclick={(activeIndex : any) => setActiveIndex(activeIndex)}
            />
        </div>
    );
};

export default Hero;