import React, {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionGame: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <div className={styles.description__title__left}>
                    <h2>НУ ТУТ ВООБЩЕ СКАЗКА</h2>
                </div>
                <div className={styles.description__title__left}>
                    <p>
                        Данная комната предназначена для лампового времяпровождения в играх. Список игр огромен и
                        удовлетворит любого геймера.
                    </p>
                    <h3>В этой комнате Вы можете найти:</h3>
                    <ul>
                        <li>
                            X-box
                        </li>
                        <li>
                            Пуфы
                        </li>
                        <li>
                            Джостики
                        </li>
                        <li>
                            Телевизор
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
};

export default DescriptionGame;