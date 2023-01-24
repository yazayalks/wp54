import {FC} from "react";
import styles from "../../styles/description.module.scss";


const DescriptionKaraoke: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <h1>Караоке в Новосибирске</h1>
                <p>
                    В нашем лофте FREEDOM для любого мероприятия есть возможность исполнить песни в караоке!
                </p>
                <br/>
                <p>
                    Репертуар можно выбрать любой, на ваш вкус!
                </p>
                <br/>
                <p>
                    Проектор имеет размер 3 метра, звуковое оборудование передает четкий звук, а также мероприятие
                    поможет дополнить световое оборудование.
                </p>
                <br/>
                <p>
                    Услуга входит в стоимость любого мероприятия!
                </p>
            </div>
        </div>);
};

export default DescriptionKaraoke;