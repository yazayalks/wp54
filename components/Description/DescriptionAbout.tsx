import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionAbout: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <h1>
                    О нас
                </h1>
                <h2>
                    Лофт wp54 в Новосибирске
                </h2>
                <h3>
                    Наш лофт с радостью примет гостей практически под любое мероприятие:
                </h3>
                <ul>
                    <li>
                        вечеринки
                    </li>
                    <li>
                        дни рождения
                    </li>
                    <li>
                        корпоративы
                    </li>
                    <li>
                        дискотеки
                    </li>
                    <li>
                        корпоративы
                    </li>
                    <li>
                        киновечера
                    </li>
                </ul>
                <h3>
                    Так же у нас есть оборудование:
                </h3>
                <ul>
                    <li>
                        караоке
                    </li>
                    <li>
                        профессиональная звуковая система
                    </li>
                    <li>
                        лазер и световые приборы
                    </li>

                    <li>
                        микшерный пульт
                    </li>

                    <li>
                        AUX кабель
                    </li>
                    <li>
                        проектор
                    </li>
                    <li>
                        микрофоны
                    </li>
                    <li>
                        столы, стулья, диваны, пуфы
                    </li>
                    <li>
                        гардероб, танцол, кухня, туалет.
                    </li>
                    <li>
                        Всё оборудование предоставляется вместе с помещением бесплатно.
                    </li>
                </ul>
            </div>
        </div>);
};

export default DescriptionAbout;