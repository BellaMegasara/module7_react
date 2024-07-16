import React from "react"
import { useUserContext } from "../context/UserContent";
import { UserProvider } from "../context/UserContent";



export const ContextWork = () => {
  //state var
const { currentUser, handleUpdateUser } = useUserContext();

//useEffect

//func

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
        ...
        {currentUser.name}
        <button onClick={() => handleUpdateUser({ name: "Arnie" })}>
          Update user
          </button>
</div>
</div>
);
};

