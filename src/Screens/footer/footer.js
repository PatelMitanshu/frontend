import React from 'react';
import './footer.css'; // Link to the styles file
import 'bootstrap-icons/font/bootstrap-icons.css';
var logo = require('../../assets/logo.png');
const Footer = () => {
  return (
    <div className="modern-footer">
      {/* Top Section: Image + About + Quick Links */}
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo">
          <img 
            src={logo} 
            alt="Logo" 
            className="footer-logo-img"
          />
          <p className="footer-tagline">
            Empowering connectivity across services and resources.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-quick-links">
          <h3>Quick Links</h3>
          <div className="quick-links-grid">
            <ul>
              <li>Ministry</li>
              <li>State</li>
              <li>About Us</li>
              <li>Health Care</li>
              <li>Banking Services</li>
              <li>Agriculture</li>
            </ul>
            <ul>
              <li>Law</li>
              <li>Disability</li>
              <li>Education</li>
              <li>Sports</li>
              <li>Housing</li>
              <li>Business</li>
            </ul>
          </div>
        </div>

        {/* About Us Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We strive to deliver seamless access to resources, ensuring every user can explore, connect, and benefit from government and private services in one platform.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section: Follow Us + Copyright */}
      <div className="footer-bottom">
        {/* Social Icons */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <i className="bi bi-facebook" style={{ fontSize: '1.5rem', color: '#1877F2', margin: '0 0px' }}></i>
            <i className="bi bi-twitter" style={{ fontSize: '1.5rem', color: '#1DA1F2', margin: '0 0px' }}></i>
            <i className="bi bi-instagram" style={{ fontSize: '1.5rem', color: '#E4405F', margin: '0 0px' }}></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; 2024 Yojna Gyan. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
