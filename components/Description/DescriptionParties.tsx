import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionParties: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <h3>
                    Аренда Лофта для вечеринки в Новосибирске
                </h3>
                <p>
                    Получить эмоции и реализовать свои идеи можно именно в нашем Лофт пространстве для вечеринок в
                    Новосибирске. 140 м2 для одной шумной компании со светом, вкусной едой, профессиональными
                    ведущим и диджеем, оформлением под Ваш стиль – наша специализация!

                </p>
                <p>
                    Укомплектованное уютное помещение со световым и звуковым оборудованием позволит создать полный
                    эффект НОЧНОГО КЛУБА по приятным ценам круглосуточно!

                </p>
                <p>
                    Мы не ставим границ, а реализовываем все Ваши идеи, включая тематические вечеринки, квесты и
                    конкурсы, авторские игры от наших профессионалов. Все это мы реализовываем в комплексе, что
                    позволяет не только удовлетворить желания любой компании разных возрастов, но и провести
                    вечеринку
                    недорого.
                </p>
                <p>
                    Два зала с мягкими зонами, возможность зарядить самый вкусный кальян, попеть в караоке, включить
                    проектор с сумасшедшими клипами – это еще не все!
                </p>
                <p>
                    Любой праздник, о котором вы мечтали. Спросите как? Позвоните или оставьте заявку на сайте,
                    консультация займет не более 5 минут, и вы сделаете свой выбор!
                </p>
                <p>
                    Ознакомьтесь с ценами, но специальное предложение можно получить только при обращении, спешите!
                </p>
            </div>
        </div>);
};

export default DescriptionParties;