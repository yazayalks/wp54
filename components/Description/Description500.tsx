import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const Description500: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <h1>Ошибка сервера</h1>
            </div>
        </div>);
};

export default Description500;