import React from "react";
import Slider from "./slider/slider.js";
import Category from "./facility_gridview/categories.js";
// Import Css
import "./css/style.css";
import Footer from "../footer/footer.js"
import Navigation from '../Navigations/navigation.js';
import ThreeContainersRow from './Containers/threeContainers.js';



function HomeScreen() {
  return (
    <div className="homeScreen">    
                    <Navigation></Navigation>

                    <Slider></Slider>
                    <br></br>
                    <p id="category-title">Find Schems as per your requirement. Categories are divided as below</p>
                    <Category></Category>
                    <br></br>
                    <br></br>
                    <p id="Containers-title">How to find relevant schemes</p>
                    <ThreeContainersRow></ThreeContainersRow>
                    <Footer></Footer>
                    
    </div>
   
);
}
export default HomeScreen;