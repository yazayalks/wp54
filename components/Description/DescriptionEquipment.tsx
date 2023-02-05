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
                    <h2>Наличие оборудования в лофте wp54</h2>
                </div>
                <h3>В Вашем распоряжении присутствует:</h3>
                <ul>
                    <li>
                        караоке
                    </li>
                    <li>
                        профессиональная звуковая система
                    </li>
                    <li>
                        светодиодные гирлянды
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
                        экран 2 метра
                    </li>
                    <li>
                        микрофоны
                    </li>
                    <li>
                        вытяжка
                    </li>

                </ul>
                <br/>
                <h3>
                    Также из удобств:
                </h3>
                <ul>
                    <li>
                        столы и стулья
                    </li>
                    <li>
                        диваны и пуфы
                    </li>
                    <li>
                        гардероб
                    </li>
                    <li>
                        микрофолновка
                    </li>
                    <li>
                        мини-холодильник
                    </li>
                    <li>
                        туалет
                    </li>
                </ul>
            </div>
        </div>);
};

export default DescriptionEquipment;