import React, { useEffect, useState } from 'react'
import './statescheme.css'
import axios from 'axios'
import Navigation from '../../../Navigations/navigation.js'
import { useLocation, useNavigate } from 'react-router-dom'
function Statescheme() {
    const [schemedata, setSchemedata] = useState([]);
    const [sector, setSector] = useState(null);
    const [caste, setCaste] = useState(null);
    const [ministry, setMinistry] = useState(null);
    const [disability, setDisability] = useState(null);
    const [minority, setMinority] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    var state = location.state.message;

    
useEffect(() => {
    axios.get(`https://backend-wq9h.onrender.com/api/v1/users/giveparticularstatescheme/${state}`).then((response) => { 
     setSchemedata(response.data);
   }).catch((error) => {
       console.log(error);
    });
},[]);

const  scheme_data = () => {
    if(sector){
        return schemedata.filter((scheme) => scheme.sector === sector).map((scheme) => {
            return (
                <button 
                    className="scheme_detailes" 
                    key={scheme.id}>   
                    <div className="scheme_">
                        <p className="scheme_name">{scheme.schemeName}</p>
                        <p className="scheme_inf">{scheme.QuickOverview}</p>
                    </div>
                </button>
            );
        });
    }

    else{
    return  schemedata.map((scheme) => {
        return (
            <button 
                className="scheme_detailes" 
                key={scheme.id}>   
                <div className="scheme_">
                    <p className="scheme_name">{scheme.schemeName}</p>
                    <p className="scheme_inf">{scheme.QuickOverview}</p>
                </div>
            </button>
           );
    });

}
} 

    return (
        <div className="sector_container">
          <Navigation />
          <div className="sector_container">
             <div className="sector_image">  
               <img className="scheme_image"  src='' alt="sector_image" />
             </div>
           <div className="scheme_data" >
              <div className="filter_container">
                  <h4 className="filter_text" >Filter By :</h4>
            
            <div className="flex" >
                <select   className="filter_dropdown"  onChange={(e) =>  setSector(e.target.value)}>
                    <option value="">Sector</option>
                    <option value="sector1">Banking and finance</option>
                    <option value="sector2">Womanandchildempowerment</option>
                    <option value="sector3">Sector 3</option>
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
                      <p>{state}</p>
                  </div>
                  {scheme_data()}
              </div>
      
      
              </div>
          </div>
           </div>
       </div>
          );
}

export default Statescheme;