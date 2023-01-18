import styles from '../../styles/contact.module.scss'
import ContactForm from "./ContactForm";
const Contact = () => {
    return (
        <div className="container">
            <div className="sub-container">
                <div className={styles.contact__inner}>
                    <div className={styles.contact__left}>

                    </div>
                    <div className={styles.contact__right}>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;