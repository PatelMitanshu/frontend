import React from 'react';
import './category_css.css';
import { useNavigate } from 'react-router-dom';
import Sector from '../sector/sector.js';

// Import images dynamically from the folder
const images = [
  require('./assets/icons/auction.png'),
  require('./assets/icons/bank.png'),
  require('./assets/icons/disabled-person.png'),
  require('./assets/icons/mother.png'),
  require('./assets/icons/physical.png'),
  require('./assets/icons/education-cap.png'),
  require('./assets/icons/investment.png'),
  require('./assets/icons/healthcare.png'),
  require('./assets/icons/planting.png'),
  require('./assets/icons/houses.png'),
  require('./assets/icons/bus.png'),
  require('./assets/icons/auction.png'),
];

// Example titles
const titles = [
  "Banking and finance", "Transport and infrastructure", "sports", "Womanandchildempowerment",
  "Item 5", "Item 6", "Item 7", "Item 8",
  "Item 9", "Item 10", "Item 11", "Item 12",
];


const Category = () => {
  const navigate = useNavigate();
  const handleRedirect = (schemesector) => {
    //pass the message to the sector page
    navigate('/sector', { state: { message: schemesector } });
  };
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div className="grid-item" key={index}>
          <div className="circle-container">
            <img src={image}   alt={`icon-${index}`} className="icon" />
          </div>
          <button className="title" onClick={() => handleRedirect(titles[index])}>{titles[index]}</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
