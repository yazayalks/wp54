import React, {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionGame: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <div className={styles.description__title__left}>
                    <h2>ГЕЙМЕРСКАЯ КОМНАТА В НОВОСИБИРСКЕ</h2>
                </div>
                <div className={styles.description__title__left}>
                    <p>
                        Часто ли вы задаётесь вопросом: где можно с друзьями поиграть в консольные игры в Новосибирске?
                    </p>
                    <p>
                        Лофт wp54 специально для этого создал уютную комнату с мягкими пуфами, большим экраном
                        телевизора, домашней игровой приставкой Xbox и двумя геймпадами. Если кто-то устал или заскучал,
                        игровая комната отлично подойдёт для поднятия настроения. Наличие огромного количества игр
                        удовлетворит вкусы любого геймера. Приятное времяпровождения в играх Вам обеспечено!
                    </p>
                </div>
            </div>
        </div>);
};

export default DescriptionGame;