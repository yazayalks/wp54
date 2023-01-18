import styles from '../../styles/contact.module.scss'
import ContactInput from "./ContactInput";
const ContactForm = () => {
    return (
        <form className={styles.contact__form}>
            <ContactInput type="text" text="Имя" placeholder="Укажите Ваше имя" name="name"/>
            <ContactInput type="phone" text="Телефон" placeholder="Укажите Ваш телефон" name="phone"/>
            <ContactInput type="email" text="Почта" placeholder="Укажите Вашу почту" name="email"/>
            <button className={styles.contact__form__btn}>
                Отправить заявку
            </button>
            <label htmlFor="">
                <input className={styles.contact__checkbox__input} type="checkbox"/>
                <span className={styles.contact__checkbox__span}/>
                <p className={styles.contact__checkbox__text}></p>
            </label>
        </form>
    );
};

export default ContactForm;