import React from "react";
import Category from "./Categories/statecategories.js";
// Import Css
import "../../HomeScreen/css/style.css";
import Navigation from "../../Navigations/navigation.js";
import ThreeContainersRow from "../../HomeScreen/Containers/threeContainers.js";
import Footer from "../../footer/footer.js";



var stateimage = require('../../HomeScreen/facility_gridview/assets/icons/banking-and-finacial-service.png');
function StateScreen() {
    return (
      <div className="statescreen">    
                      <Navigation />
                        <img src={stateimage} alt='statesector' width="100%" className="stateimg"/>
                      <br></br>
                      <br></br>
                      
                      <p id="category_title">Find Schemes as per your state. Categories are divided as below</p>
                      <Category></Category>
                      <br></br>
                      <br></br>
                      <p id="Containers_title">How to find relevant schemes</p>
                    <ThreeContainersRow/>
                    <Footer />
                      
      </div>
     
  );
  }
  export default StateScreen;