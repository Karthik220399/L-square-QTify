import React from "react";
import logoImage from "../assets/Qtify2.png"
import headPhone from "../assets/Headphone.png"
import styles from "./Logo.module.css"


export default function Logo (){

    return (
        <div className={styles.imageConatiner}>  
            <img  src={logoImage} alt="logo" />
            <img  className={styles.headphoneImg} src={headPhone} alt="logo" />
        </div>
    )
}