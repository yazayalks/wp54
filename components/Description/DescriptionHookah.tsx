import {FC} from "react";
import styles from "../../styles/description.module.scss";

const DescriptionHookah: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <h1>Кальянная в Новосибирске</h1>
                <h3>
                    Провести время с кальяном в уютной обстановке в Новосибирске
                </h3>
                <p>Наше пространство гарантирует приятное время препровождения в мягкой зоне лофта!</p>

                <p>
                    Для приготовления вкусного кальяна мы приглашаем в наше пространство профессионального
                    кальянщика.
                </p>

                <p>
                    В кальянном меню присутствуют как классические, так и экзотические вкусы импортного табака, а
                    также все способы приготовления на основах!
                </p>

                <p>
                    Стоимость кальяна 700 рублей.
                </p>
            </div>
        </div>);
};

export default DescriptionHookah;