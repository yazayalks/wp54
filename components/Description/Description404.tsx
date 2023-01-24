import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const Description404: FC = () => {
    return (
        <div className="sub-container">
            <div className={styles.description__container}>
                <h1>Страница не найдена</h1>
            </div>
        </div>);
};

export default Description404;