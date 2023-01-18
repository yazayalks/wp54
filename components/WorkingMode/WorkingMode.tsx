import styles from "../../styles/workingMode.module.scss";
import React from "react";


const WorkingMode = () => {
    return (
        <div className={styles.working_mode__inner}>
            <p className="small-text"><strong>Режим работы:</strong></p>
            <p className="small-text">Круглосуточно</p>
            <a href="tel:+7 (913) 381-22-81" className="small-text"><strong>+7 (913) 381-22-81</strong></a>
            <p className="small-text">Ул. Ватутина, 19</p>
        </div>
    );
};

export default WorkingMode;