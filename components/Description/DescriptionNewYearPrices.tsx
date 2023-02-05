import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionNewYearPrices: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container}`}>
                <h1>
                    Новогодние цены
                </h1>
                <p>
                    Данные цены будут размещены в декабре 2023 года.
                </p>


            </div>
        </div>);
};

export default DescriptionNewYearPrices;