import styles from '../../styles/contact.module.scss'
import ContactForm from "./ContactForm";
import ContactsMessengers from "../ContactsMessengers/ContactsMessengers";
import WorkingMode from "../WorkingMode/WorkingMode";
import {FC} from "react";

const Contact: FC = () => {
    return (

        <div className="sub-container">
            <div className={styles.contact__container}>
                <h2 style={{textAlign: 'center'}}>СВЯЖИТЕСЬ С НАМИ</h2>
                <div className={styles.contact__inner}>
                    <div className={styles.contact__description}>
                        <p>
                            Вы можете связаться с нами прямо сейчас через месенджеры или по номеру телефона.
                            Также вы можете отправить нам заявку, после чего мы свяжемся с Вами.
                        </p>
                    </div>
                    <div className={styles.contact__contacts_messengers}>

                        <ContactsMessengers/>
                        <div className={styles.contact__working_mode}>

                            <WorkingMode/>
                        </div>
                    </div>
                    <div className={styles.contact__form}>

                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;