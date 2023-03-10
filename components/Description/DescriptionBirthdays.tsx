import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionBirthdays: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <h2>
                    ПРОВЕСТИ ДЕНЬ РОЖДЕНИЯ В НОВОСИБИРСКЕ
                </h2>
                <p>
                    Лофт wp54 предоставляет помещение для проведения дня рождения по приятной цене в Новосибирске в 5
                    минутах от м. Площадь Маркса.
                </p>
                <p>
                    Мы воплощаем Ваши идеи, поэтому проведение дня рождения понравится любой компании.
                </p>
                <p>
                    Также наше лофт пространство имеет мягкую зону, всё необходимое для курения кальяна, караоке для
                    исполнения любимых песен и два микрофона, через которые вы сможете говорить тосты, проектор, с
                    помощью которого можно показать любые видеопоздравления, а также мощную аудиосистему для
                    проигрывания Вашего любимого плейлиста.
                </p>
                <p>
                    Имеются все удобства: туалет, гардероб, мини кухня.
                </p>

                <h3>
                    ПРОВЕДЕНИЕ ВЗРОСЛОГО ДНЯ РОЖДЕНИЯ
                </h3>
                <p>
                    Громкость звука в нашем лофте не ограничена, хорошая звукоизоляция даст вам любое количество часов
                    для праздника ведь мы работаем круглосуточно!
                </p>
                <h3>
                    ПРОВЕСТИ ДЕНЬ РОЖДЕНИЯ ДЛЯ ПОДРОСТКА
                </h3>
                <p>
                    Компания подростков получит самую современную, музыкальную вечеринку и огромное количество
                    современных игр на Xbox.
                </p>
                <p>
                    Хотите отпраздновать у нас свой день рождения? Звоните по номеру телефона <a
                    href="tel:+7 (913) 381-22-81" className="small-text"
                    title="Номер телефона лофта +7 (913) 381-22-81"><strong>+7 (913) 381-22-81</strong></a> или
                    оставить заявку на сайте, а также ознакомьтесь с ценами для проведения своего праздника.
                </p>
            </div>
        </div>);
};

export default DescriptionBirthdays;