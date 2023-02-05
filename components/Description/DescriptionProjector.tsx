import React, {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionProjector: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container__left}>
                <div className={styles.description__title}>
                    <h1>Проектор для мероприятий</h1>
                </div>
                <h2>
                    Проектор для мероприятий в Новосибирске
                </h2>
                <p>
                    Лофт wp54 предоставляет проекцию в 2 метра для презентаций, караоке, фотографий и видео.
                </p>
                <p>
                    Услуга входит в стоимость любого мероприятия!
                </p>
            </div>
        </div>);
};

export default DescriptionProjector;