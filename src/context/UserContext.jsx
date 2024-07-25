import React, { createContext, useContext, useReducer, useState} from "react";



// 1. Create the context
const UserContext = createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>

//-----------reducer----------
const userReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...state, currentUser: action.payload}
        case "TOGGLE_MODE":
            return { ...state, mode: state.mode === "light" ? "dark" : "light" };
            default:
                return state;
    }
};

const initialState = {
    currentUser: { name: "Guest" },
    mode: "light",
};

//----------------------------------------

export const UserProvider = (props) => {

    //------------------------------
    const [state, dispatch] = useReducer(userReducer, initialState);
    //------------------------------

    const handleUpdateUser = (user) => {
        //--------------------------------
        dispatch({ type: "UPDATE_USER", payload: user});
    };

const toggleMode = () => {
    //----------------------------
    dispatch({ type: "TOGGLE_MODE "});
    //-------------------------------
};

//states


// sets user object in state, shared via context

// 2. Provide the context.
// The Provider component of any context (UserContext.Provider)
// sends data via its value prop to all children at every level.
// We are sending both the current user and an update function
return (
<UserContext.Provider value={{...state, handleUpdateUser, toggleMode }}>
{props.children}
</UserContext.Provider>
);
};
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useUserContext = () => {
return useContext(UserContext);
};
// Save as UserContext.jsx in a separate 'context' folder



