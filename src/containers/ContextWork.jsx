import React from "react"
import { useUserContext } from "../context/UserContext";



export const ContextWork = () => {
  //state var
const { currentUser, handleUpdateUser, mode, toggleMode } = useUserContext();

//useEffect

//func
const handleNameChange = (e) => {
  //---------------------------
  handleUpdateUser({ name: e.target.value });
  //------------------------------
};

//return

return (
<div style={{ width: "100%" }}>
<div style={{
  border:"solid blue 1px",
  padding: "10px",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: mode === "dark" ? "black" : "lightgrey",
  color: mode === "dark" ? "white" : "black" }}
      >

        <p>first context example</p>

     
  
      <input value={currentUser.name} onChange={handleNameChange} />
      <button onClick={toggleMode}>{mode} mode</button>
</div>
</div>
);
};