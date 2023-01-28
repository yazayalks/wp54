import styles from '../../styles/checkbox.module.scss'
import {useTheme} from 'next-themes'
import {FC} from "react";

const Checkbox: FC = () => {
    const {theme, setTheme} = useTheme();

    const handleThemeClick = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme == 'dark' ? 'light' : 'dark')

    }
    return (
        <div className={styles.switch}>
            <input title="Смена темы" className={styles.checkbox} type="checkbox" onClick={handleThemeClick}/>
        </div>
    );
};

export default Checkbox;