import styles from "../../styles/description.module.scss";
import {FC} from "react";


const DescriptionDiscos: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <h2>
                    Лофт с эффектом ночного клуба
                </h2>
                <p>
                    Оригинальное место для проведения нереальной вечеринки на всю ночь только для твоей компании. Вам не
                    помешает никто! Отличная
                    шумоизоляция, световое оборудование и громкая музыка на ваш вкус.
                </p>
                <p>
                    Именно у нас вы сможете оторваться по полной.
                </p>
                <p>
                    У нас есть всё для воссоздания эффекта ночного клуба!
                </p>
                <p>
                    Чтобы арендовать частный клуб на всю ночь звоните или пишите нам скорее, пока желаемая дата
                    свободна.
                </p>
            </div>
        </div>);
};

export default DescriptionDiscos;