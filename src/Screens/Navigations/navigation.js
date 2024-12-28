import React from "react"
import "./navigation_style.css"


var logo = require('../../assets/logo.png');
function Navigation() { 

    return (
<div className="homescreen_main">
<div className="main_row">
    <div className="box1">
    <img 
            src={logo} 
            alt="Logo" 
            className="footer-logo-img"
          />    
          </div>

    <div className="box2">
     
        <div className="box2-column"></div>

            <div className="search-container">
                <span class="search-icon">&#128269;</span> 
                <input type="text" placeholder="Search here" id="search"/>
            </div>

        <div class="menu">
            <a href="#" class="menu-item">Home</a>
            <a href="#" class="menu-item">Ministry</a>
            <a href="#" class="menu-item">State</a>
            <a href="#" class="menu-item">About Us</a>
            </div>

    </div>
            
    <div className="box3">
        <button className="signup_login" >sign up</button>
        <button className="signup_login" >log in</button>
        
    </div>

        </div>


</div>
    )
}
export default Navigation;