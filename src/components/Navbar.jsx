import React from "react"
import { useUserContext } from "../context/UserContext"
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const {mode} = useUserContext();
    //state
    const linkList = [
        { to: "/lab-one", label: "Lab One" },
        { to: "/lab-two", label: "Lab Two" }, 
        { to: "/slide-work", label: "Slide Work" },
        { to: "/context-worl", lable: "Context Work"},

    ];

    //func
    const linkListDisplayHandler = () => {
        return linkList.map((linkObject) => {
            return (
                <li key={linkObject.to}>
                    <NavLink>{linkObject.label}</NavLink>
                </li>
            );
        });
    };

    //return

    return (
        <nav className="NavBar"
style={{backgroundColor: mode === 'light' ? 'white': 'black',
color: mode === 'light' ? 'black' : 'white'}}>
            
            <ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
        {linkListDisplayHandler()}
</ul> {/* ++ Add another page with route and component */} </nav>
    );
};