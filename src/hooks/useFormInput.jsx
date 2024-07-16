import { useState } from "react";
import { useFormInput } from "../components/SubscribeForm";

export function ContactForm() {
    // our custom hook still uses useState internally
    
    const [status, setStatus] = useState('');
    const [nameInputProps, resetName] = useFormInput('');
    const [emailInputProps, resetEmail] = useFormInput('');
    const [messageInputProps, resetMessage] = useFormInput('');
    // generic handler function to update state
    
    function handleChange(e) {
        resetName();
        resetEmail();
        resetMessage();
        setStatus('Thank you!');
}
return (
    <div className="ContactForm componentBox">
        <label>
            Name: <input {...nameInputProps} />
        </label>
        <label>
            Email: <input {...emailInputProps} />
        </label>
        <label>
            Message: <textarea {...messageInputProps} />
        </label>
        <button onClick={handleContact}>Send</button>
        <div>{status}</div>
    </div>
);
}