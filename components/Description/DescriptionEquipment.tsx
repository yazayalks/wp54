import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionEquipment: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <div className={styles.description__title}>
                    <h1>Наше оборудование </h1>
                </div>
                <div className={styles.description__title}>
                    <h3>Наличие оборудования в лофте Welcome</h3>
                </div>
                <h3>В Вашем распоряжении присутствует:</h3>
                <ul>
                    <li>
                        <p>
                            караоке
                        </p>
                    </li>
                    <li>
                        <p>
                            профессиональная звуковая система 2,5 кВт
                        </p>
                    </li>
                    <li>
                        <p>
                            световые головы
                        </p>
                    </li>
                    <li>
                        <p>
                            лазер и световые приборы
                        </p>
                    </li>
                    <li>
                        <p>
                            дым машина
                        </p>
                    </li>
                    <li>
                        <p>
                            микшерный пульт
                        </p>
                    </li>
                    <li>
                        <p>
                            AUX кабель
                        </p>
                    </li>
                    <li>
                        <p>
                            HDMI кабель
                        </p>
                    </li>
                    <li>
                        <p>
                            проектор
                        </p>
                    </li>
                    <li>
                        <p>
                            кликер
                        </p>
                    </li>
                    <li>
                        <p>
                            флипчарт
                        </p>
                    </li>
                    <li>
                        <p>
                            экран 3 метра
                        </p>
                    </li>
                    <li>
                        <p>
                            микрофоны
                        </p>
                    </li>
                    <li>
                        <p>
                            ноутбук
                        </p>
                    </li>

                </ul>
                <h3>
                    Также из удобств:
                </h3>
                <p>
                    столы, стулья, диваны
                    гардероб, танцпол, кухня, туалет.
                </p>
            </div>
        </div>);
};

export default DescriptionEquipment;