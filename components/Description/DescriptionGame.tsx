import React, {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionGame: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <div className={styles.description__title__left}>
                    <h2>НУ ТУТ ВООБЩЕ СКАЗКА, Игровая имеет площадь $$$ квадратных метров.</h2>
                </div>
                <div className={styles.description__title__left}>
                    <p>Она рассчитана на компанию <span className="emphasis-text">до 6 человек </span>(большее
                        количество
                        обговаривается дополнительно).</p>

                    <h3>Список оборудования:</h3>
                    <ul>
                        <li>
                            <p>
                                X-box
                            </p>
                        </li>
                        <li>
                            <p>
                                Пуфы
                            </p>
                        </li>
                        <li>
                            <p>
                                Джостики
                            </p>
                        </li>
                        <li>
                            <p>
                                Телек
                            </p>
                        </li>
                        <li>
                            <p>
                                Аренда от 4 часов!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
};

export default DescriptionGame;