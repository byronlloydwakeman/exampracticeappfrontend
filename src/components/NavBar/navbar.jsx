import React from "react";
import userIcon from "./userIcon.png";

import User from "./user.jsx";

import "./navbar.css";

const NavBar = () => 
{
    return (
        <div className="navBar__container">
            <img className="navBar__img" src={userIcon} alt="userIcon"/>
            <User User="Byron"/>
        </div>
    )
}

export default NavBar;