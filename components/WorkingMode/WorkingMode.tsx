import styles from "../../styles/workingMode.module.scss";
import React, {FC} from "react";


const WorkingMode: FC = () => {
    return (
        <div data-testid="working_mode" className={styles.working_mode__inner}>
            <p data-testid="paragraph" className="small-text"><strong>Режим работы:</strong></p>
            <p data-testid="paragraph" className="small-text">Круглосуточно</p>
            <a data-testid="paragraph" href="tel:+7 (913) 381-22-81" className="small-text" title="Номер телефона лофта +7 (913) 381-22-81"><strong>+7 (913) 381-22-81</strong></a>
            <p data-testid="paragraph" className="small-text">Ул. Ватутина, 19</p>
        </div>
    );
};

export default WorkingMode;