import {Link} from 'react-scroll';
import styles from '../../styles/header.module.scss';
import Logo from '../Logo/Logo';
const Header = () => {
    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;
    return (
        <header>
            <div className={`container ${styles.header__container}`}>
                <div  className={styles.header__logo}>
                    <Logo/>
                </div>

                <nav className={styles.header__nav}>
                    <ul className={styles.header__nav__list}>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" to='Main' className={styles.header__nav__list__item__link}>Главная</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" to='Hall' className={styles.header__nav__list__item__link}>Зал</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" to='Game' className={styles.header__nav__list__item__link}>Игровая</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" to='Services' className={styles.header__nav__list__item__link}>Услуги</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" to='Events' className={styles.header__nav__list__item__link}>Мероприятия</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link href="/" to='Prices' className={styles.header__nav__list__item__link}>Цены</Link>
                        </li>
                        {/*<li className={styles.header__nav__list__item}>*/}
                        {/*    <Link href="/" to='About' className={styles.header__nav__list__item__link}>О нас</Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;

