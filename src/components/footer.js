import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a leading e-commerce platform offering a wide range of products to cater to all your needs.
            Our mission is to provide the best shopping experience with quality products and exceptional customer service.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/newarrivals">New Arrivals</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@ecommerce.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 E-commerce St, Shop City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-commerce. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
