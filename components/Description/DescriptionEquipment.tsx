import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionEquipment: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <div className={styles.description__title}>
                    <h1>НАЛИЧИЕ ОБОРУДОВАНИЯ В ЛОФТЕ WP54</h1>
                </div>
                <p>
                    В лофте wp54 имеется огромное наличие разного оборудования, которое включено в стоимость аренды
                    помещения.
                </p>

                <h3>В ВАШЕМ РАСПОРЯЖЕНИИ ПРИСУТСТВУЕТ:</h3>
                <ul>
                    <li>
                        Бесплатный Wi-Fi
                    </li>
                    <li>
                        Караоке
                    </li>
                    <li>
                        Профессиональная звуковая система
                    </li>
                    <li>
                        Светодиодные гирлянды
                    </li>
                    <li>
                        Стробоскоп
                    </li>
                    <li>
                        Микшерный пульт
                    </li>
                    <li>
                        Проектор
                    </li>
                    <li>
                        Экран 2 метра
                    </li>
                    <li>
                        Микрофоны
                    </li>
                    <li>
                        Xbox и два геймпада
                    </li>
                    <li>
                        Вытяжка
                    </li>

                </ul>
                <br/>
                <h3>
                    Также из удобств:
                </h3>
                <ul>
                    <li>
                        Столы и стулья
                    </li>
                    <li>
                        Мягкие диваны и пуфы
                    </li>
                    <li>
                        Гардероб
                    </li>
                    <li>
                        Тапочки
                    </li>
                    <li>
                        Микроволновка
                    </li>
                    <li>
                        Электрическая плита
                    </li>
                    <li>
                        Чайник
                    </li>
                    <li>
                        Мини-холодильник
                    </li>
                    <li>
                        Туалет
                    </li>

                </ul>
            </div>
        </div>);
};

export default DescriptionEquipment;