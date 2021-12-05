import React from "react";
import './Header.css'

const Header=({headerCompressed})=>{
    return(
        <div className="head-container">
            <img className={headerCompressed?'head-img-compressed':'head-img'} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="Header" />
            <h1 className="head-text">Name Kit!</h1>
        </div>
    )
}

export default Header;