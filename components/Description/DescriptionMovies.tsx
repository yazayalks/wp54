import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionMovies: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <h3>
                    Фильмы как в кинотеатре!
                </h3>
                <p>
                    Хотите посмотреть свой фильм с друзьями как в кинотеатре, не проблема. Лофт Welcome
                    предоставляет
                    возможность для киновечеров.
                </p>
                <p>
                    Ну и тут придумайте чтонибудь написать, у меня мозгай уже не варит...
                </p>

            </div>
        </div>);
};

export default DescriptionMovies;