import React, { useEffect, useState } from 'react'
import './statescheme.css'
import axios from 'axios'
import Navigation from '../../../Navigations/navigation.js'
import { useLocation, useNavigate } from 'react-router-dom'
import gujarat from './assets/Gujarat inside image.jpeg'
import AndhraPradesh from './assets/Andhr pradesh.jpeg'
import chattisgarh from './assets/Chattisgarh inside image.jpeg'
import Goa from './assets/Goa inside image.webp'
import Haryana from './assets/Haryana.jpeg'
import Karnatak from './assets/Karnataka.jpeg'
import Maharashtra from './assets/Maharashtr.jpeg'
import punjab from './assets/Punjab inside image.jpeg'
import Rajasthan from './assets/Rajasthan inside image.jpg'

function Statescheme() {
    const [schemedata, setSchemedata] = useState([]);
    const [sector, setSector] = useState(null);
    const [caste, setCaste] = useState(null);
    const [ministry, setMinistry] = useState(null);
    const [disability, setDisability] = useState(null);
    const [minority, setMinority] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    var state = location.state.message;
    
useEffect(() => {
    axios.get(`https://backend-wq9h.onrender.com/api/v1/users/giveparticularstatescheme/${state}`).then((response) => { 
     setSchemedata(response.data);
   }).catch((error) => {
       console.log(error);
    });
     
    if(state === 'Gujarat'){
         setImageSrc(gujarat)
    }
    if(state === 'Andhra Pradesh'){
        setImageSrc(AndhraPradesh)
    }
    if(state === 'Chattisgarh'){
        setImageSrc(chattisgarh)
    }
    if(state === 'Goa'){
        setImageSrc(Goa)
    }
    if(state === 'Haryana'){
        setImageSrc(Haryana)
    }
    if(state === 'Karnataka'){
        setImageSrc(Karnatak)
    }
    if(state === 'Maharashtra'){
        setImageSrc(Maharashtra)
    }
    if(state === 'Punjab'){
        setImageSrc(punjab)
    }
    if(state === 'Rajasthan'){
        setImageSrc(Rajasthan)
    }
    
},[]);

var scheme_data = () => {
    if(sector){
        return schemedata.filter((scheme) => scheme.sector === sector).map((scheme) => {
            console.log(scheme);
            return (
                <button 
                    className="scheme_detailes" 
                    key={scheme._id}>   
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
               <img className="scheme_image"  src={imageSrc} alt="sector_image" />
             </div>
           <div className="scheme_data" >
              <div className="filter_container">
                  <h4 className="filter_text" >Filter By</h4>
            
            <div className="flex" >
            <select className="filter_dropdown" onChange={(e) => setSector(e.target.value)}>
                    <option value="">Sector</option>
                    <option value="Banking and finance">Banking and finance</option>
                    <option value="Womanandchildempowerment">Womanandchildempowerment</option>
                    <option value="Sector 3">Sector 3</option>
                </select>    
                      <div className='dropdown'>
                        <p>cast</p>
                        <button>+</button>
                      </div>
                      <select className="filter_dropdown">
                          <option value="">Ministry Name</option>
                          <option value="ministry1">Ministry 1</option>
                          <option value="ministry2">Ministry 2</option>
                          <option value="ministry3">Ministry 3</option>
                      </select>
                      <div className='dropdown'>
                        <p>Disability</p>
                        <button>+</button>
                      </div>
                      <div className='dropdown'>
                        <p>Minority</p>
                        <button>+</button>
                      </div>
                      <div className='dropdown'>
                        <p>student</p>
                        <button>+</button>
                      </div>
                      <select className="filter_dropdown">
                          <option value="">
                          Occupation</option>
                          <option value="ministry1">Ministry 1</option>
                          <option value="ministry2">Ministry 2</option>
                          <option value="ministry3">Ministry 3</option>
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