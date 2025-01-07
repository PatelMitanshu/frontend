import React, { useEffect, useState }  from "react";
import Navigation from "../../Navigations/navigation"
import Footer from "../../footer/footer"
import "./sector.css"
import { useLocation } from 'react-router-dom';
import  bank from "../facility_gridview/assets/icons/banking-and-finacial-service.png";
import Transport_and_infrastructure from "../facility_gridview/assets/icons/Transport and infrastructure.png";
import disable_people from "../facility_gridview/assets/icons/Disability main page image.jpg";
import { useNavigate } from 'react-router-dom';

const Sector = () => {
    // get the props from the category page
    const location = useLocation();
    const navigate = useNavigate();
    var message = location.state.message;
    const [schemes, setSchemes] = useState([]);
    const [image, setImage] = useState([]);
    const [image_name, setImage_name] = useState([]);
             
    useEffect(() => {
        const schemes_backend_url = "https://backend-wq9h.onrender.com/api/v1/users/scheme-get";
        fetch(schemes_backend_url)
            .then(response => response.json())
            .then(data => setSchemes(data));
            setImage_name(message);
            if(message === "Banking and finance"){
                setImage(bank);
            }
            else if(message === "Transport and infrastructure"){
                setImage(Transport_and_infrastructure);
            }
          
            else if(message === "Disable people"){
                setImage(disable_people);
            }


    }, [message]);

const redirectschememain = (scheme) => { 
    navigate('/sector/scheme', { state: { message: scheme } });
}
const schemedata = () => {
    return schemes.filter((scheme) => scheme.sector === message).map((scheme) => {
        return (
            <button 
                onClick={() => redirectschememain(scheme._id)} // Use arrow function to pass the correct scheme
                className="scheme_detailes" 
                key={scheme.id}>   
                <div className="scheme_">
                    <p className="scheme_name">{scheme.schemeName}</p>
                    <p className="scheme_inf">{scheme.QuickOverview}</p>
                </div>
            </button>
        );
    });
};
    return (
        
  <div className="sector_container">
    <Navigation />
    <div className="sector_container">
       <div className="sector_image">  
         <img className="scheme_image" src={image} alt="sector_image" />
       </div>
     <div className="scheme_data" >
        <div className="filter_container">
            <h4 className="filter_text" >Filter By :</h4>
      
      <div className="flex" >
            <select className="filter_dropdown">
                <option value="">State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                </select>
                <select className="filter_dropdown">
                    <option value="">Caste</option>
                    <option value="caste1">Caste 1</option>
                    <option value="caste2">Caste 2</option>
                    <option value="caste3">Caste 3</option>
                </select>
                <select className="filter_dropdown">
                    <option value="">Ministry Name</option>
                    <option value="ministry1">Ministry 1</option>
                    <option value="ministry2">Ministry 2</option>
                    <option value="ministry3">Ministry 3</option>
                </select>
                <select className="filter_dropdown">
                    <option value="">Disability</option>
                    <option value="disability1">Disability 1</option>
                    <option value="disability2">Disability 2</option>
                    <option value="disability3">Disability 3</option>
                </select>
                <select className="filter_dropdown">
                    <option value="">Minority</option>
                    <option value="minority1">Minority 1</option>
                    <option value="minority2">Minority 2</option>
                    <option value="minority3">Minority 3</option>
                </select>
                </div>
        </div>
        <div className="scheme_list" >
            <div className="search_bar_container">
              <input type="text" className="search_bar" placeholder="🔍Search here" />
            </div>
           
            <div className="scheme_container">
            <div className="scheme_card">
                <p>All Schemes</p>
            </div>
            {schemedata()}
        </div>


        </div>
    </div>
     </div>
 </div>
    );
}

export default Sector;