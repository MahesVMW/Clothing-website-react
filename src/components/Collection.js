import React, { Component } from 'react';
import model9 from '../images/model9.jpg';
import model12 from '../images/model12.jpg';
import model13 from '../images/model13.jpg';
import model7 from '../images/model7.jpg';
import model8 from '../images/model8.jpg';
import model3 from '../images/model3.jpg'
import './collection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export class Collection extends Component {
  render() {
    return (
      <div className="container">
        <h5 className="mt-3">NEW ARRIVALS</h5>
        <h3>Sunshine state of mind</h3>
        <div className="row">
          <div className="column">
            <div className="image-container">
              <img src={model9} alt="Model 9" className="img-fluid model-image" />
              <div className="overlay-text">New Collection</div>
              <div className="size-options">
                <div className="size-text">S</div>
                <div className="size-text">M</div>
                <div className="size-text">L</div>
                <div className="size-text">XL</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="image-container">
              <img src={model12} alt="Model 12" className="img-fluid model-image" />
              <img src={model13} alt="Model 13" className="img-fluid hover-image" />
              <div className="overlay-text">Summer Vibes</div>
              <div className="size-options">
                <div className="size-text">S</div>
                <div className="size-text">M</div>
                <div className="size-text">L</div>
                <div className="size-text">XL</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="image-container">
              <img src={model7} alt="Model 7" className="img-fluid model-image" />
              <img src={model8} alt="Model 8" className="img-fluid hover-image" />
              <div className="overlay-text">Casual Comfort</div>
              <div className="size-options">
                <div className="size-text">S</div>
                <div className="size-text">M</div>
                <div className="size-text">L</div>
                <div className="size-text">XL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scrolling-text-container">
          <div className="scrolling-text">
            Discover our new collection! Trendy, stylish, and comfortable clothing for every occasion.
          </div>
        </div>
        <div className="row new-section mt-5">
          <div className="column">
            <img src={model3} alt="Clothing" className="img-fluid" />
          </div>
          <div className="column">
            <div className="clothing-description">
            Our latest collection features an array of stylish and comfortable clothing options perfect for any occasion. Whether you're looking for casual wear or something more formal, our new arrivals have you covered. Each piece is designed with attention to detail, ensuring you look and feel your best.Elevate your wardrobe with our latest designs. From sleek and modern to classic and timeless, our new collection offers something for everyone. Experience the perfect blend of comfort and style.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
