import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionHall: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <div className={styles.description__title__left}>
                    <h2>Всё что нужно для классного времяпрепровождение находится здесь</h2>
                </div>
                <div className={styles.description__text__left}>
                    <p>
                        Зал является связующей комнатой между всеми остальными. Это самая большая комната лофта, и
                        именно
                        тут будет происходить основная жизнь мероприятия.
                    </p>
                    <h3>
                        В этой комнате находится:
                    </h3>

                    <ul>
                        <li>
                            Стол и стулья
                        </li>
                        <li>
                            Мягкие пуфы
                        </li>
                        <li>
                            Проектор
                        </li>
                        <li>
                            Аудио система и микшерный пульт
                        </li>
                        <li>
                            Караоке
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
};

export default DescriptionHall;