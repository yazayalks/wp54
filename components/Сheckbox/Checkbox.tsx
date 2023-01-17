import styles from '../../styles/checkbox.module.scss'
import {useTheme} from "../../hooks/useTheme";
import {useState} from "react";

const Checkbox = () => {
    const {theme, setTheme} = useTheme();
    // const [checked, setChecked] = useState(true);
    const handleThemeClick = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark')
        // setChecked(!checked)
    }
    return (
        <div className={styles.switch}>
            <input        className={styles.checkbox} type="checkbox" onClick={handleThemeClick}/>
        </div>
    );
};

export default Checkbox;