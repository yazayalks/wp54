import {FC} from "react";
import styles from "../../styles/description.module.scss";


const DescriptionKaraoke: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <h1>Караоке в Новосибирске</h1>
                <h2>
                    Проверьте кто из вашей компании лучше всего поёт
                </h2>
                <p>
                    В нашем лофте wp54 для любого мероприятия есть возможность исполнить песни в караоке!
                </p>
                <p>
                    Репертуар можно выбрать любой, на ваш вкус!
                </p>

                <p>
                    Проектор имеет размер 2 метра, звуковое оборудование передает четкий звук.
                </p>
                <p>
                    Услуга входит в стоимость любого мероприятия!
                </p>
            </div>
        </div>);
};

export default DescriptionKaraoke;