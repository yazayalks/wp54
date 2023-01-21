import styles from '../../styles/contact.module.scss'
interface IContactInput {
    type: string;
    text: string;
    placeholder: string;
    name: string;
}

const ContactInput = ({type, text, placeholder, name}: IContactInput) => {
    return (
        <label htmlFor="">
            <p><strong>{text}:</strong></p>
            <input maxLength={50} className={styles.contact__input}
                type={type}
                placeholder={placeholder}
                name = {name}
                required
            />
        </label>
    );
};

export default ContactInput;