import './ContactForm.style.css'
import {FormHeader} from "./FormHeader";
import FormInput from "./FormInput";

const ContactForm = () => {
    return (
        <div className={'container'}>
            <FormHeader/>
            <FormInput/>
        </div>
    )
}
export default ContactForm