import {FC} from "react";
import styles from "../../styles/description.module.scss";

const DescriptionHookah: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <h1>Кальянная в Новосибирске</h1>
                <h2>
                    Провести время с кальяном в уютной обстановке в Новосибирске
                </h2>
                <p>
                    Наше пространство гарантирует приятное время препровождения в лофте!
                </p>
                <p>
                    Кальян не входит в общую стоимость бронирования лофта.
                </p>
                <p>
                    Стоимость кальяна 700 рублей, а пользование длится до конца времени бронирования лофта.
                </p>
                <p>
                    Есть электрическая печь для разогрева углей, а также Вы можете приобрести у нас разные экзотические
                    вкусы импортного табака.
                </p>
            </div>
        </div>);
};

export default DescriptionHookah;