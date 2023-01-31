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
                    Тут пишите всё про оплату
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facere!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, consectetur consequatur culpa
                    dolores eos id incidunt ipsa laborum minima non officiis possimus quam repellat reprehenderit
                    suscipit tempore, voluptatem. Accusamus at excepturi fugiat illo iure labore, laborum, minima
                    officiis perspiciatis quae quod suscipit, vel vitae. Aspernatur autem esse facere nemo nostrum?
                </p>
            </div>
        </div>);
};

export default DescriptionBasicPrices;