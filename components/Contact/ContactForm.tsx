import styles from '../../styles/contact.module.scss'
import ContactInput from "./ContactInput";
import emailJs from '@emailjs/browser'
import {MutableRefObject, useRef} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
const ContactForm = () => {
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;
    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailJs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,formRef.current, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}` )
            .then(result => {
                console.log('ura')
            }, error => {
                console.log('error')
            })

    }
    return (
        <form onSubmit={sendForm} className={styles.contact__form} ref={formRef}>
            <ContactInput type="text" text="ФИО" placeholder="Укажите Ваше ФИО" name="fullName"/>
            <ContactInput type="phone" text="Телефон" placeholder="Укажите Ваш телефон" name="phone"/>
            <ContactInput type="email" text="Почта" placeholder="Укажите Вашу почту" name="email"/>
            <textarea maxLength={500} placeholder="Введите Ваше сообщение или задайте вопрос" name="message" required></textarea>
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