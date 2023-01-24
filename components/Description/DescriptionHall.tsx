import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionHall: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <div className={styles.description__title__left}>
                    <h2>Дайте этому парню заголовок!</h2>
                </div>
                <div className={styles.description__text__left}>
                    <p>Не знаю сколько квадратных метров пространства.</p>

                    <p>Высота потолков наверное блльшая.</p>

                    <p>Скока та кв. м. гостевая.</p>

                    <p>Кухня, посуда (тарелки, вилки, стаканы, рюмки, бокалы) - этого всего нет</p>

                    <p>Раздевалка это гостевая</p>

                    <p>Один страшный туалета</p>

                    <p>Холодильникбез морозильной камеры</p>

                    <p>Вмещает до 30 человек, а может и больше.</p>
                </div>
            </div>
        </div>);
};

export default DescriptionHall;