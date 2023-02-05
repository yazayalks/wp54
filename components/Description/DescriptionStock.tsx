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
                    В честь дня рождения предоставляется скидка 10% по предоставлению удостоверяющего личность
                    документа. Скидка действует в течении 3 дней до и после даты дня рождения.
                </p>
            </div>
        </div>);
};

export default DescriptionStock;