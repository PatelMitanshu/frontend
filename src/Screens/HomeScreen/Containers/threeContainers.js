import React from 'react';
import './containers_style.css';  // Make sure to include the styles in an external CSS file
var touchscreen = require("./asstes/touchscreen.png");
var search = require("./asstes/search.png");
var login_signup = require("./asstes/login-signup.png");
const ThreeContainersRow = () => {
  return (
    <div className="row-container">
      <div className="container">
        <img src={login_signup} alt="Image 1" className="image" />
        <p className="title">Login/Sign up first</p>
      </div>
      <div className="container">
        <img src={search} alt="Image 2" className="image" />
        <p className="title">Search for what type of scheme you want to find</p>
      </div>
      <div className="container">
        <img src={touchscreen} alt="Image 3" className="image" />
        <p className="title">Select & Apply</p>
      </div>
    </div>
  );
};

export default ThreeContainersRow;
