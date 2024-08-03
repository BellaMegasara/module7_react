import React, { useState } from "react"
import { useUserContext } from "../context/UserContext";



export const ContextWork = () => {
  //state var
  const { currentUser, handleUpdateUser, mode, toggleMode } = useUserContext();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  

  //useEffect

  //func
  const handleNameChange = (e) => {
    //---------------------------
    setName(e.target.value);
    //------------------------------
  };

  const handleEmailChange = (e) => {
    //---------------------------
    setEmail(e.target.value);
  };

  const handleSubmitUser = () => {
    handleUpdateUser({ name: name, email: email });
  };

  //return

  return (
    <div style={{
      border: "solid blue 1px",
      padding: "10px",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: mode === "dark" ? "black" : "lightgrey",
      color: mode === "dark" ? "white" : "black"
    }}
    >

      <p>first context example</p>

     
  
      <input value={name} onChange={handleNameChange} />
      <input value={email} type="email" onChange={handleEmailChange} />
      <button onClick={handleSubmitUser}>Submit</button>
      <button onClick={toggleMode}>{mode} mode</button>

    </div>
  )
};