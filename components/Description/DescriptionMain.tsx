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
                        Предоставляем Вам возможность арендовать помещение в стиле лофт для проведения мероприятий:
                        <span className="text--important">
                        {' '}взрослые и детские дни рождения, вечеринки, корпоративы, караоке, киновечера и т. д.
                    </span>
                    </p>
                    <p>
                        Welcome party – это место, где проходят яркие праздники и зажигательные вечеринки, и это
                        всё {' '}
                        <span
                            className="text--important"> по низким ценам
                    </span>
                        {' '}и
                        <span
                            className="text--important">  в 5 минутах от м. Площадь Маркса города Новосибирск.
                    </span>


                    </p>
                    <p>
                        Площадка в стиле ЛОФТ подходит для проведения любого мероприятия в любое удобное для Вас время!
                    </p>
                    <p>
                        В Вашем распоряжении две комнаты площадью <span className="text--important">85 кв. м.</span>,
                        которые делятся на 2 зоны:
                    </p>
                </div>


                <h3>ГЛАВНЫЙ ЗАЛ 45 м.кв.</h3>
                <p>
                    Оборудован звуковой и световой техникой, которая придаст вайб самой настоящей тусовки, а
                    экран и проектор погрузят в ламповую атмосферу!
                </p>
                <p>
                    Помимо этого, при помощи караоке Вы сможете посоревноваться со своей компанией в навыках исполнения
                    любимых песен.
                </p>


                <h3>ИГРОВАЯ 15 м.кв.</h3>
                <p>
                    X-box и мягкие пуфы. Всё что нужно для комфортной игры есть в этой комнате.
                </p>
            </div>
        </div>
    );
};

export default DescriptionMain;