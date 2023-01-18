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
            <span>{text}</span>
            <input
                type={type}
                placeholder={placeholder}
                name = {name}
                required

            />
        </label>
    );
};

export default ContactInput;