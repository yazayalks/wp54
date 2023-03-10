import styles from '../../styles/header.module.scss'
import Logo from "../Logo/Logo";
import React, {FC, useEffect, useRef, useState} from "react";
import Checkbox from "../Сheckbox/Checkbox";

import Link from "next/link";
import {usePathname} from "next/navigation";

const Header: FC = () => {
        const pathname = usePathname();

        const menuItems = [
            {text: 'Главная', href: '/', type: 'link'},
            {text: 'Зал', href: '/hall/', type: 'link'},
            {text: 'Игровая', href: '/game/', type: 'link'},
            {text: 'Услуги', href: 'services', type: 'submenu'},
            {text: 'Мероприятия', href: 'events', type: 'submenu'},
            {text: 'Цены', href: 'prices', type: 'submenu'},
            {text: 'О нас', href: '/about/', type: 'link'},
        ]

        const subMenuServicesItems = [
            {text: 'Оборудование', href: '/equipment', type: 'link'},
            {text: 'Караоке', href: '/karaoke', type: 'link'},
            {text: 'Проектор', href: '/projector', type: 'link'},
            {text: 'Кальян', href: '/hookah', type: 'link'},
        ]

        const subMenuEventsItems = [
            {text: 'Дискотеки', href: '/discos', type: 'link'},
            {text: 'Вечеринки', href: '/parties', type: 'link'},
            {text: 'Корпоративы', href: '/corporate', type: 'link'},
            {text: 'Дни рождения', href: '/birthdays', type: 'link'},
            {text: 'Фильмы', href: '/movies', type: 'link'},
        ]

        const subMenuPricesItems = [
            {text: 'Основные цены', href: '/basic-prices', type: 'link'},
            {text: 'Новогодние цены', href: '/new-year-prices', type: 'link'},
            {text: 'Акции', href: '/stock', type: 'link'},

        ]

        function getSubMenuItems(href: any) {
            if (href === 'services') {
                return subMenuServicesItems;
            }
            if (href === 'events') {
                return subMenuEventsItems;
            }
            if (href === 'prices') {
                return subMenuPricesItems;
            }
            return [];
        }

        function handleToggleSubMenu(e: any, href: any) {


            if (href === 'services') {
                setSubMenuServicesOpen(!subMenuServicesOpen)
                setSubMenuEventsOpen(false)
                setSubMenuPricesOpen(false)
            }
            if (href === 'events') {
                setSubMenuEventsOpen(!subMenuEventsOpen)
                setSubMenuPricesOpen(false)
                setSubMenuServicesOpen(false)
            }
            if (href === 'prices') {
                setSubMenuPricesOpen(!subMenuPricesOpen)
                setSubMenuServicesOpen(false)
                setSubMenuEventsOpen(false)
            }
        }

        function closeSubMenu() {
            setSubMenuServicesOpen(false)
            setSubMenuEventsOpen(false)
            setSubMenuPricesOpen(false)
        }

        const refItems = useRef<any[]>([]) ;
        const handleToggleMenu = () => {
            setMenuOpen(!menuOpen);
        }


        const [menuOpen, setMenuOpen] = useState(false);
        const [subMenuServicesOpen, setSubMenuServicesOpen] = useState(false);
        const [subMenuEventsOpen, setSubMenuEventsOpen] = useState(false);
        const [subMenuPricesOpen, setSubMenuPricesOpen] = useState(false);

        useEffect(() => {
            const handleClickOutside = (e: any) => {
                let isSelected = false;
                refItems.current.forEach(function (current) {
                    if (current.contains(e.target)) {
                        isSelected = true;
                        return
                    }
                });
                if (!isSelected) {
                    closeSubMenu();
                }
            };
            window.addEventListener('click', handleClickOutside, true);
            return () => window.removeEventListener('click', handleClickOutside,true);
        }, [refItems])

        return (
            <header>
                <div className={`container ${styles.header__container}`}>
                    <Logo/>
                    <nav className={`${styles.header__nav} ${(menuOpen) ? styles.open : ''}`}>
                        <ul className={styles.header__nav__list}>
                            {menuItems.map((item, index) => (
                                item.type === 'link' ?
                                    <li key={item.href} className={styles.header__nav__list__item}>
                                        <Link href={item.href} title={`Перейти на страницу ${item.text}`}
                                              className={`${styles.header__nav__list__item__link} ${(pathname === item.href) ? styles.header__nav__list__item__link__active : ''}`}>{item.text}</Link>
                                    </li>
                                    :
                                    <div ref={el => refItems.current[index] = el} key={item.href}>
                                        <div onClick={(e) => handleToggleSubMenu(e, item.href)}
                                             title={`Открыть список ${item.text}`}
                                             className={`${styles.header__nav__list__item__link} ${(pathname === item.href) ? styles.header__nav__list__item__link__active : ''}`}>
                                            <strong>{item.text}</strong></div>
                                        <ul className={`
                                        ${styles.sub_menu__nav__list}
                                        ${(item.href === 'services') ? styles.sub_menu__nav__list__services : ''} 
                                        ${(item.href === 'events') ? styles.sub_menu__nav__list__events : ''} 
                                        ${(item.href === 'prices') ? styles.sub_menu__nav__list__prices : ''} 
                                           ${styles.sub_menu__nav__list__open}
                                        ${subMenuServicesOpen ? styles.open__services : ''}
                                        ${subMenuEventsOpen ? styles.open__events : ''}
                                        ${subMenuPricesOpen ? styles.open__prices : ''}`}>
                                            {(getSubMenuItems(item.href)).map(({text, href, type}, index) => (

                                                <li key={href} className={styles.sub_menu__nav__list__item}>
                                                    <Link href={href} title={`Перейти на страницу ${text}`}
                                                          className={styles.sub_menu__nav__list__item__link}>{text}</Link>
                                                </li>

                                            ))}
                                        </ul>
                                    </div>
                            ))}
                        </ul>
                    </nav>
                    <Checkbox/>
                    <button title="Burger menu" className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`}
                            onClick={handleToggleMenu}>
                        <span/>
                        <span/>
                        <span/>
                    </button>
                </div>
            </header>
        );
    }
;

export default Header;