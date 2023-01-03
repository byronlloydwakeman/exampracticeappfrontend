import React from "react";
import "./user.css";

const User = ({ User }) => {
    return(
        <div className="user__container">
            <h1 className="user__text" >{ User }</h1>
        </div>

    )
}

export default User;
