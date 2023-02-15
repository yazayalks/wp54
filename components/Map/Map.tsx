import React, {FC} from 'react';
import styles from '../../styles/map.module.scss'


const MapWp: FC = () => {

    function toiletEnterHandler() {
        console.log(123)
    }

    function toiletLeaveHandler() {
        console.log(123)
    }



    return (
        <div className="sub-container">
            <div className={styles.map__container}>
                <h2>Карта лофта</h2>
                <div className={styles.map__inner}>

                    <div className={styles.text__inner}>

                        <p className={styles.text_toilet}>
                            <strong>ТУАЛЕТ</strong>
                        </p>


                        <p className={styles.text_game}>
                            <strong>ИГРОВАЯ - 10 м.кв.</strong>
                        </p>
                        <p className={styles.text_hall}>
                            <strong>ЗАЛ - 45 м.кв.</strong>
                        </p>
                        <p className={styles.text_staff_only}>
                            <strong>СЛУЖЕБНАЯ</strong>
                        </p>
                        <p className={styles.text_guestbook}>
                            <strong>ГОСТЕВАЯ - 15 м.кв.</strong>
                        </p>
                        <p className={styles.text_entrance}>
                            <strong>ВХОД</strong>
                        </p>

                    </div>
                    <svg viewBox="0 0 700 797" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onMouseOver={toiletEnterHandler}
                              onMouseOut={toiletLeaveHandler} className={styles.toilet}
                              d="M452.586 114.655V36.2068H331.897V24.1378H235.345V181.034H331.897V84.4826H356.034V168.965H404.31V156.896H500.862V114.655H452.586Z"
                        />
                        <path className={styles.hall}
                              d="M404.31 181.034V168.965H356.034V247.414H343.965V277.586H356.034V482.759H343.965V531.034H356.034V651.724H675.862V181.034H404.31Z"
                        />
                        <path className={styles.game}
                              d="M331.897 247.414V205.172H24.1379V319.828H331.897V277.586H343.966V247.414H331.897Z"
                        />
                        <path className={styles.staff_only}
                              d="M24.1379 343.966V458.621H283.621V470.69H319.828V458.621H331.897V343.966H24.1379Z"

                        />
                        <path className={styles.guestbook}
                              d="M319.828 482.759V470.69H283.621V482.759H24.1379V651.724H150.862V663.793H199.138V651.724H331.897V531.035H343.966V482.759H319.828Z"
                        />
                        <path className={styles.walls}
                              d="M525 156.897C525 156.897 525 107.07 525 90.5172H476.724V12.069H356.034C356.034 9.06379 356.034 3.00517 356.034 0C318.44 0 242.773 0 205.172 0V181.034H0V675.862H120.69V796.552H144.828V675.862H150.862V651.724H24.1379V482.759H283.621V458.621H24.1379V343.966H331.897V458.621H319.828V482.759H356.034C356.034 482.759 356.034 370.083 356.034 277.586H331.897V319.828H24.1379V205.172H331.897V247.414H356.034V84.4828H331.897C331.897 119.489 331.897 157.458 331.897 181.034H235.345V24.1379H331.897V36.2069H452.586V114.655H500.862V156.897C500.862 156.897 404.31 156.891 404.31 156.897V181.034C505.69 181.034 675.862 181.034 675.862 181.034V651.724C675.898 651.724 356.034 651.724 356.034 651.724V531.034H331.897C331.897 572.805 331.897 651.724 331.897 651.724H199.138V675.862H205.172V796.552H229.31V675.862H700V156.897H525Z"
                              fill="black"/>
                        <path className={styles.entrance}
                              d="M199.138 675.862V663.793H150.862V675.862H144.828V796.552H205.172V675.862H199.138Z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default MapWp;