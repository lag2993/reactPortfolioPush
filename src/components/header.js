import React from "react";

import profile from "../assets/images/profile.jpg"

function Header(props){
    return(
    <header className="flex-row space-between 15px">
        <h1>Luis Guillen</h1>
        <img src={profile}alt="blue background"></img>
        {props.children}
    </header>
    )
}
export default Header