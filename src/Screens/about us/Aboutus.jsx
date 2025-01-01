import React from 'react';
import  './About.css';
import Aboutimg from './aboutus img.jpg'
import Navigation from '../Navigations/navigation';
import Footer from '../footer/footer';

function Aboutus() {
  return (
    <>
    <Navigation />
        <div className="image_container">
            <img src={Aboutimg} alt="Aboutus" className="aboutus_img" />
           
        </div>
        <div className="heading">
        <p><b><u>About Us:</u></b></p>
      </div>
      <div className='description'>
      Welcome to Yojana Gyan, your premier destination for comprehensive information on government schemes across various sectors in India. Our platform is dedicated to providing citizens with detailed insights into welfare programs that aim to uplift and empower communities.

    <br/>
    <br/>
    <br/>

<b><u>Our Mission:</u></b>
<br/>
<br/><b>(1)Empowerment through Knowledge:</b> We strive to equip individuals with the necessary information to access and benefit from government schemes tailored to their needs.
<br/><b>(2)Inclusivity: </b> Our aim is to ensure that every citizen, regardless of their background, can easily find and understand the schemes available to them.


<br/>
<br/>
<br/>

<b><u>What We Offer:</u></b><br/>
<br/>
<b>-->Extensive Coverage of Sectors:</b> We provide detailed information on government schemes across multiple sectors, including:<br/>
<b>-->Disability:</b> Initiatives aimed at supporting individuals with disabilities through financial aid, vocational training, and accessibility programs.<br/>
<b>-->Sports: </b>Schemes designed to promote sports and physical education, including funding for athletes and infrastructure development.<br/>
<b>-->Agriculture: </b>Programs that support farmers with subsidies, loans, and training to enhance productivity and sustainability.<br/>
<b>-->Education:</b> Initiatives focused on improving access to quality education, scholarships, and skill development for students.<br/>
<b>-->Women and Child Welfare:</b> Schemes aimed at empowering women and ensuring the well-being of children through health, nutrition, and education programs.<br/>
<b>-->Business and Entrepreneurship:</b> Support for startups and small businesses through funding, mentorship, and training programs.<br/>
<b>-->Banking and Finance:</b> Information on financial schemes, loans, and subsidies available to individuals and businesses.<br/>
<b>-->User -Friendly Filtration Options:</b> Our website features advanced filtration options that allow users to:<br/>
<b>-->Search for schemes by category </b>(e.g., education, agriculture, etc.)<br/>
<b>-->Filter schemes based on state to find region-specific initiatives.</b><br/><br/>



<b><u>Our Vision</u></b><br/><br/>
<b>-->Building an Informed Community: </b>We envision a society where every citizen is aware of and can access the government schemes that can significantly improve their quality of life.<br/>
<b>-->Connecting Citizens with Opportunities:</b> By simplifying access to information, we aim to bridge the gap between government initiatives and the citizens they are designed to serve.<br/><br/>



<b><u>Conclusion</u></b><br/><br/>
At Yojana Gyan, we are committed to fostering an informed and empowered citizenry. Our goal is to ensure that everyone can take full advantage of the government schemes available to them, ultimately contributing to a more equitable society.
Copyright Notice
      </div>
      <Footer />
      </>
  )
};

export default Aboutus;