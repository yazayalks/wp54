import styles from '../../styles/contact.module.scss'
import {ContactInputType} from '../../types';


const ContactInput = ({type, title, text, placeholder, name}: ContactInputType) => {
    return (
        <label htmlFor="">
            <p><strong>{text}:</strong></p>
            <input maxLength={50} className={styles.contact__input}
                   type={type}
                   title={title}
                   placeholder={placeholder}
                   name={name}
                   required
            />
        </label>
    );
};

export default ContactInput;