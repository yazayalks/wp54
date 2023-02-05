import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionBasicPrices: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <h1>
                    Основные цены
                </h1>
                <p>
                  Вы можете ознакомиться с ценами по таблице ниже.
                </p>
            </div>
        </div>);
};

export default DescriptionBasicPrices;