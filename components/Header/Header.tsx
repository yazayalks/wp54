
import Logo from '../Logo/Logo';
import {useMediaQuery} from "../../hooks";
import React, {useState} from "react";
import {useRouter} from "next/router";

import styles from '../../styles/header.module.scss';
import stylesMenu from '../../styles/mobileMenu.module.scss';
import Link from "next/link";
const Header = () => {
    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;

    const router = useRouter()

    const menuItems = [
        {text: 'Главная', href: '/'},
        {text: 'Зал', href: '/hall'},
        {text: 'Игровая', href: '/game'},
        {text: 'Услуги', href: '/services'},
        {text: 'Мероприятия', href: '/events'},
        {text: 'Цены', href: '/prices'},
        {text: 'О нас', href: '/about'},
    ]

    const isMobile = useMediaQuery(1200);
    const [menuOpen, setMenuOpen] = useState(false);
    const currentMenuItemClass = isMobile ? stylesMenu.menu__item : styles.header__nav__list__item;

    const handleToggleMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden');
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden');
        setMenuOpen(false);
    }
    return (
        <header>
            <div className={`container ${styles.header__container}`}>
                <div  className={styles.header__logo}>
                    <Logo/>
                </div>
                {isMobile && <button className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`} onClick={handleToggleMenu}>
                    <span/>
                    <span/>
                    <span/>
                </button> }

                <nav className={`${ isMobile ? stylesMenu.menu : styles.header__nav} ${menuOpen ? stylesMenu.open : ''}`}>
                    <ul className={`${isMobile ? styles.list_reset : styles.header__nav__list}`}>
                        {menuItems.map(({text, href}, index) => (
                            <li key={href} className={styles.header__nav__list__item} >
                                <Link href={href} className={`${styles.header__nav__list__item__link} ${(router.pathname === href) ? styles.header__nav__list__item__link__active : ''}`}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;

