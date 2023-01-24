import React, {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionProjector: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container__left}>
                <div className={styles.description__title}>
                    <h1>Проектор для мероприятий</h1>
                </div>
                <p>
                    Проектор для конференц-зала и мероприятий в Новосибирске
                    Лофт Welcome предоставляет проекцию в 3 метра для презентаций, караоке, фотографий и видео.
                </p>
                <br/>
                <p>
                    Услуга входит в стоимость любого мероприятия, а с ценами можно ознакомиться здесь! Задавайте
                    вопросы по телефону или онлайн на сайте!
                </p>
                <br/>
                <h3>Также мы бесплатно предоставляем:</h3>
                <ul>
                    <li>
                        <p>
                            кликер
                        </p>
                    </li>
                    <li>
                        <p>
                            HDMI кабель
                        </p>
                    </li>
                    <li>
                        <p>
                            флипчарт
                        </p>
                    </li>
                    <li>
                        <p>
                            микрофоны
                        </p>
                    </li>
                    <li>
                        <p>
                            компьютер
                        </p>
                    </li>
                </ul>
            </div>
        </div>);
};

export default DescriptionProjector;