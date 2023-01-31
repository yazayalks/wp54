import styles from '../../styles/contact.module.scss'
import ContactInput from "./ContactInput";
import emailJs from '@emailjs/browser'
import React, {FC, MutableRefObject, useRef, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import {PropagateLoader} from "react-spinners";
import Link from "next/link";


const ContactForm: FC = () => {
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;
    const [acceptWithRules, setAcceptWithRules] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const toggleAcceptWithRules = (e: React.ChangeEvent<HTMLInputElement>) => {
            setAcceptWithRules(!acceptWithRules)
        }
    ;
    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSpinner(true);
        emailJs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, formRef.current, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
            .then(result => {
                setSpinner(false);
                toast.success(`Данные отправлены`);
                formRef.current.reset();
            }, error => {
                setSpinner(false);
                toast.error(`Данные не отправлены`);

                console.log('error')
            })
        setAcceptWithRules(!acceptWithRules);
    }
    return (
        <form title="Форма отправки заявки" onSubmit={sendForm} className={styles.contact__form} ref={formRef}>
            <ContactInput type="text" title="Фамилия Имя Отчество" text="ФИО" placeholder="Укажите Ваше ФИО" name="fullName"/>
            <ContactInput type="phone" title="Телефон" text="Телефон" placeholder="Укажите Ваш телефон" name="phone"/>
            <ContactInput type="email" title="Почта" text="Почта" placeholder="Укажите Вашу почту" name="email"/>
            <p><strong>Сообщение:</strong></p>
            <textarea title="Cообщение или вопрос" className={styles.contact__textarea} maxLength={500}
                      placeholder="Введите Ваше сообщение или задайте вопрос" name="message" required></textarea>
            <button title="Send a request" disabled={!acceptWithRules} style={{width: 'auto'}}
                    className={styles.contact__form__btn}>
                <strong> {spinner ? <PropagateLoader color="#fff"/> : 'Отправить заявку'}</strong>
            </button>
            <div className={styles.contact__checkbox}>

                <label title="Принять политику конфиденциальности и обработку персональных данных" className={styles.toggle}>
                    <input title="Принять политику конфиденциальности и обработку персональных данных" className={styles.toggle__input} onChange={(e) => toggleAcceptWithRules(e)} type="checkbox"
                           checked={acceptWithRules}/>
                    <span className={styles.toggle__label}>
        </span>
                </label>
                <p className={styles.contact__checkbox__text}>Нажимая на кнопку «Отправить заявку», я соглашаюсь с
                    <Link title="Перейти на страницу политики конфиденциальности" href='/privacy-policy'>
                        <strong>
                            {' '} Политикой конфиденциальности {' '}
                        </strong>
                    </Link>
                    и даю согласие на
                    <Link title="Перейти на страницу обработки персональных данных" href='/personal-data-policy'>
                        <strong>
                            {' '} обработку персональных данных
                        </strong>
                    </Link>
                    . </p>
            </div>
        </form>
    );
};

export default ContactForm;