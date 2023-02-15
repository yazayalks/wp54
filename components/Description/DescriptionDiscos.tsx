import styles from "../../styles/description.module.scss";
import {FC} from "react";


const DescriptionDiscos: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <h2>
                    НОЧНОЙ КЛУБ В НОВОСИБИРСКЕ
                </h2>
                <p>
                    Оригинальное место для проведения нереальной дискотеки на всю ночь только для твоей компании. У нас
                    можно арендовать лофт вместимостью до 30 человек. Вам не помешает никто! Отличная шумоизоляция,
                    световое оборудование и громкая музыка на ваш вкус – всё необходимое для воссоздания эффекта ночного
                    клуба!
                </p>
                <p>
                    Только у нас Вы сможете оторваться по полной.
                </p>

                <p>
                    Чтобы арендовать частный клуб на всю ночь звоните нам по номеру телефона <a
                    href="tel:+7 (913) 381-22-81" className="small-text"
                    title="Номер телефона лофта +7 (913) 381-22-81"><strong>+7 (913) 381-22-81</strong></a> или оставьте
                    заявку на сайте, пока желаемая дата свободна.
                </p>
            </div>
        </div>);
};

export default DescriptionDiscos;