import React from "react";
import logoImage from "../assets/Qtify2.png"
import headPhone from "../assets/Headphone.png"
import "./Logo.css"


export default function Logo (){

    return (
        <div className="imageConatiner">  
            <img  src={logoImage} alt="logo" />
            <img  className="headphoneImg" src={headPhone} alt="logo" />
        </div>
    )
}