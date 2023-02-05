import styles from '../../styles/footer.module.scss'
import Logo from "../Logo/Logo";
import React, {FC} from "react";
import Link from 'next/link';
import ContactsMessengers from "../ContactsMessengers/ContactsMessengers";
import WorkingMode from "../WorkingMode/WorkingMode";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
                <div className={styles.footer__inner}>
                    <div className={styles.footer__item}>
                        <div className={styles.footer__logo}>
                            <Logo/>
                        </div>
                        <div className={styles.footer__map}>
                            <iframe title="Посмотреть лофт wp54 на Яндекс карте"
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A98a21e0f1dad03790cbcee5c2863810295a82c5784dbb4dcb61fb430a114a4c3&amp;source=constructor"
                                width="400" height="400">
                            </iframe>
                        </div>

                        <div className={styles.footer__contacts_messengers}>
                            <ContactsMessengers/>
                        </div>
                        <div className={styles.footer__working_mode}>
                            <WorkingMode/>
                        </div>

                    </div>
                    <div className={styles.footer__item}>
                        <ul className={styles.footer__politics__list}>
                            <li className={styles.footer__politics__list__item}>
                                <Link title="Перейти на страницу  политики конфиденциальности" className={`${styles.footer__politics__list__item__link} small-text`} href='/privacy-policy'>
                                    <strong>
                                        Политика
                                        конфиденциальности
                                    </strong>
                                </Link>
                            </li>
                            <li className={styles.footer__politics__list__item}>
                                <Link title="Перейти на страницу политики защиты и обработки персональных данных" className={`${styles.footer__politics__list__item__link} small-text`} href='/personal-data-policy'>
                                    <strong>
                                        Политика защиты и обработки персональных данных
                                    </strong>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__item}>
                        <div className={styles.footer__copyright}>
                            <a target="_blank" rel="noreferrer" title="Заказать сайт у автора" className={`${styles.footer__copyright__link} small-text`}
                               href='https://vk.com/ya_za_ya'>
                                <strong>
                                    © «lks studio», 2022-2023
                                </strong>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
        ;
};

export default Footer;