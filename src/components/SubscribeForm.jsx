import React, { useState } from "react";

export default function SubscribeForm() {
    const [status, setStatus] = useState('');
    
    // similar state variables mapped to form input
    const [firstName, setFirstName] = useState('Mary');
    const [lastName, setLastName] = useState('Poppins');
    const [email, setEmail] = useState('mary@poppins.com');

    // similar handler functions
    const handleNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    
    //function
    function handleSubscribe() {
        setFirstName('');
        setLastName('');
        setEmail('');
        setStatus(`Thanks for subscribing, ${firstName.value}!`)
}
    return (
       <div className="SubscribeForm componentBox">
          <label>First name: {/* form inputs with similar props */}
             <input value={firstName} onChange={handleNameChange} />
          </label>
          <label>
            Last name:
            <input value={lastName} onChange={handleLastNameChange} />
          </label>
          <label>Email: {/* form inputs with similar props */}
             <input value={email} onChange={handleEmailChange} />
          </label>
          <button onClick={handleSubscribe}>Subscribe</button>
          <div>{status}</div>
       </div>
); }

export function useFormInput(initialValue) {
    // our custom hook still uses useState internally
    
    const [value, setValue] = useState(initialValue);
    // generic handler function to update state
    
    function handleChange(e) {
        setValue(e.target.value);
}
    // generic function to reset input value
    const reset = () => setValue('');
    
    // object containing the state value and handler function
    // can be unpacked to set as props for input element
    const inputProps = {
        value: value,
        onChange: handleChange
    };
    // returns data to be used by a component
    return [inputProps, reset];
}