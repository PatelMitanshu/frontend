import React from "react"
import "./navigation_style.css"
import { useNavigate } from "react-router-dom";
var logo = require('../../assets/logo.png');
function Navigation() { 
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/state");
    }

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
                <span className="search-icon">&#128269;</span> 
                <input type="text" placeholder="Search here" id="search"/>
            </div>
 
        <div className="menu">
            <button onClick={() => navigate("/")} className="menu-item">Home</button>
            <button className="menu-item">Ministry</button>
            <button onClick={() =>{navigate("/state")}} className="menu-item">State</button>
            <button onClick={()=>{navigate("/Aboutus")}} className="menu-item">About Us</button>
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