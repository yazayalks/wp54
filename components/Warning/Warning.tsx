import React, { useState } from 'react';
import styles from "../../styles/hero.module.scss";

const Warning = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className={styles.warning}>
            <button className={styles.closeButton} onClick={() => setVisible(false)}>
                ×
            </button>
            Внимание! Лофт wp54 временно закрыт. Мы работаем над открытием новой точки и скоро вернемся к вам с обновленным пространством и новыми возможностями. Следите за нашими обновлениями и благодарим за ваше терпение!
        </div>
    );
};

export default Warning;
