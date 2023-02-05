import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionMovies: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <h2>
                    Фильмы как в кинотеатре
                </h2>
                <p>
                    Хотите посмотреть свой фильм с друзьями как в кинотеатре, не проблема. Лофт wp54
                    предоставляет
                    возможность для киновечеров.
                </p>
            </div>
        </div>);
};

export default DescriptionMovies;