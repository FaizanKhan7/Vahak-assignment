import React from 'react'
import styles from "./header.module.css"
import Hamburger from "../../assets/Hamburger.png"
import Honda from "../../assets/Logo.png"
import Profile from "../../assets/Profile.png"

function Header() {
    return (
        <div className={styles.headerStyles}>
            <div className={styles.headerItems}>
                <img src={Hamburger} alt="menu-bar"/>                        
                <img src={Honda} alt="logo"/>                        
                <img src={Profile} alt="Profile-photo"/>                        
            </div>
        </div>
    )
}

export default Header
