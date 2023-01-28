import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionMain: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <div className={styles.description__title}>
                    <h2> Аренда лофт помещения для мероприятий в Новосибирске</h2>
                </div>

                <div className={styles.description__text}>
                    <p>
                        Предлагаем Вам арендовать наше помещение для проведения мероприятий:
                        <span className="text--important">
                        взрослые и детские дни рождения, вечеринки, корпоративы, караоке, киновечеры и т. д.
                    </span>
                    </p>
                    <p>
                        Наш лофт – это место, где проходят яркие праздники и серьезные бизнес-мероприятия по
                        приятным ценам
                        <span
                            className="text--important"> в Новосибирске    в 5 минутах от м. Площадь Маркса.
                    </span>
                    </p>
                    <p>
                        Площадка в стиле ЛОФТ подходит для проведения любого мероприятия.
                    </p>
                    <p>
                        Две комнаты площадью <span className="text--important">$$$ кв. м.</span> делятся на 2 зоны:
                    </p>
                </div>


                        <h3>ГЛАВНЫЙ ЗАЛ $$$ м.кв.</h3>
                        <p>
                            Оборудован звуковой и световой техникой, которая позволяет добиться эффекта
                            ночного клуба.
                            Экран, проектор, караоке,микшерный пульт, колонки, освещение
                        </p>


                        <h3>ИГРОВАЯ $$$ м.кв.</h3>
                        <p>
                            Тут можно задротить в X-box и сидеть жопой на мягких пуфах.
                        </p>
            </div>
        </div>
    );
};

export default DescriptionMain;