import {FC} from 'react';
import styles from "../../styles/description.module.scss";

const DescriptionMovies: FC = () => {
    return (
        <div className="sub-container">
            <div className={`${styles.description__container} ${styles.description__container__left}`}>
                <h2>
                    ЛИЧНЫЙ КИНОТЕАТР В НОВОСИБИРСКЕ
                </h2>
                <p>
                    Иногда дома не получается собрать большую компанию для проведения киновечера. Не беда! Лофт wp54
                    предоставит всё необходимое для воссоздания своего личного кинотеатра.
                </p>
                <p>
                    Огромный экран и хороший проектор позволят насладиться просмотром своего фильма, а удобные мягкие
                    пуфы и диваны помогут комфортно провести время.
                </p>
                <p>
                    Также для тех, кто не хочет по какой-либо причине смотреть фильм, всегда может уединиться в игровой
                    комнате и поиграть в Xbox.
                </p>
                <p>
                    Для аренды своего личного кинотеатра, просто позвоните нам по номеру телефона
                    <a
                        href="tel:+7 (913) 381-22-81" className="small-text"
                        title="Номер телефона лофта +7 (913) 381-22-81"><strong>+7 (913) 381-22-81</strong></a> или
                    оставьте заявку на сайте.
                </p>
            </div>
        </div>);
};

export default DescriptionMovies;