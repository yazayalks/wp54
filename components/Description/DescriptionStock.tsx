import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionStock: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container}`}>
                <h1>
                    Акции
                </h1>
                <p>
                    Тут надо описать ваши специальные предложения и скидки
                </p>
            </div>
        </div>);
};

export default DescriptionStock;