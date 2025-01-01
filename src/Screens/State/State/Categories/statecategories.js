import React from 'react';
import './state_category.css';
import { useNavigate } from 'react-router-dom';

// Import images dynamically from the folder
const images = [
  require('./assets/Gujarat.png'),
  require('./assets/Maharashtra.png'),
  require('./assets/Punjab.png'),
  require('./assets/Rajasthan.png'),
  require('./assets/Karnataka.png'),
  require('./assets/Haryana.png'),
  require('./assets/Chattisgarh.png'),
  require('./assets/Kerela.png'),
  require('./assets/Andhra Pradesh.png'),
  require('./assets/Goa.png'),
];

// Example titles
const titles = [
  "Gujarat","Mahrashtra","Punjab","Rajasthan","Karnataka","Haryana","Chattisgarh","Kerala","Andhra Pradesh","Goa"
];


const Category = () => {
  const navigate = useNavigate();
  const handleRedirect = (schemesector) => {
    //pass the message to the sector page
    navigate('/state/particularstatescheme', { state: { message: schemesector } });
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
