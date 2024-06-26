// ItemDetails.js

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './itemDetails.css';
import new1 from '../images/new1.jpg';
import new9 from '../images/new9.jpg';
import new8 from '../images/new8.jpg';
import new14 from '../images/new14.jpg';
import new15 from '../images/new15.jpg';
import new3 from '../images/new3.jpg';
import new5 from '../images/new5.jpg';
import new6 from '../images/new6.jpg';
import new10 from '../images/new10.jpg';
import new11 from '../images/new11.jpg';

const items = [
  { id: 1, image: new1, name: 'Casual Brown Shirt', amount: '$29', description: 'This classic brown shirt is crafted from premium cotton for ultimate comfort and durability. Perfect for both casual and formal occasions, it features a tailored fit and timeless design.' },
  { id: 2, image: new9, name: 'Blue Denim Shirt', amount: '$39', description: 'Elevate your wardrobe with this stylish shirt, featuring a modern cut and sophisticated design. Made from high-quality fabric, it ensures a comfortable and breathable fit all day long.' },
  { id: 3, image: new8, name: 'Classic White Shirt', amount: '$49', description: 'Add a touch of elegance to your ensemble with this beautifully designed shirt. Its smooth texture and refined look make it ideal for any special occasion.' },
  { id: 4, image: new14, name: 'Formal Grey Shirt', amount: '$59', description: 'Experience luxury and style with this meticulously crafted shirt. Its unique pattern and exquisite detailing set it apart, making it a standout piece in your collection' },
  { id: 5, image: new15, name: 'Striped Red Shirt', amount: '$69', description: 'Stay ahead of the fashion curve with this contemporary shirt, featuring bold colors and innovative design. Perfect for making a statement, its a must-have for any trendsetter.' },
  { id: 6, image: new3, name: 'Floral Pattern Shirt', amount: '$79', description: 'Discover the perfect blend of comfort and style with this versatile shirt. Its relaxed fit and soft fabric make it a go-to choice for any casual outing' },
  { id: 7, image: new5, name: 'Black Party Shirt', amount: '$89', description: 'Upgrade your everyday look with this effortlessly chic shirt. Designed with attention to detail, it offers a flattering fit and timeless appeal.' },
  { id: 8, image: new6, name: 'Green Checkered Shirt', amount: '$99', description: 'Step into sophistication with this elegant shirt, made from the finest materials. Its classic design and impeccable finish make it a staple for any refined wardrobe' },
  { id: 9, image: new10, name: 'Casual Pink Shirt', amount: '$109', description: 'Turn heads with this fashion-forward shirt, featuring a sleek silhouette and contemporary design. Ideal for both work and play, it adds a touch of modernity to any outfit.' },
  { id: 10, image: new11, name: 'Navy Blue Shirt', amount: '$119', description: 'Embrace effortless style with this comfortable yet stylish shirt. Its versatile design and high-quality fabric make it a perfect choice for any occasion' },
  { id: 11, image: new10, name: 'Purple Designer Shirt', amount: '$129', description: 'Make a bold fashion statement with this eye-catching shirt, designed to stand out. Its unique pattern and vibrant colors add a playful touch to your attire.' },
  { id: 12, image: new11, name: 'Yellow Summer Shirt', amount: '$119', description: 'Stay cool and comfortable with this breathable shirt, perfect for warm weather. Its lightweight fabric and relaxed fit ensure all-day comfort without compromising on style' },
];

export const ItemDetails = ({cart,setCart}) => {
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));


  if (!item) return <div>Item not found.</div>;

  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => {
      setNotification({ ...notification, visible: false });
    }, 2000);
  };

  const addCart = (item) => {
    const itemInCart = cart.find((c) => c.id === item.id);
    if (itemInCart) {
      setCart(cart.map((c) => (c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)));
    } else {
      setCart([...cart, { ...item, quantity: 1, size: 'M' }]);
    }
    showNotification('Item added successfully', 'success');
  };

  const removeCart = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
    showNotification('Item removed successfully', 'error');
  };
  return (
    <div className="item-details-page">
      <div className="item-details-content">
        <Link to="/newarrivals" className="back-btn">Back to New Arrivals</Link>
        <div className="item-details-wrapper">
          <img src={item.image} alt={`Item ${item.name}`} className="item-details-image" />
          <div className="item-details-info">
            <h2>{item.name}</h2>
            <p>{item.amount}</p>
            <p className="desc">{item.description}</p>
            {cart.some((c) => c.id === item.id) ? (
                      <button className="btnRemove" onClick={() => removeCart(item)}>
                        <i className="fas fa-trash-alt"></i> Remove item
                      </button>
                    ) : (
                      <button className="add-to-cart-btn" onClick={() => addCart(item)}>
                        <i className="fas fa-check"></i> Add to Cart
                      </button>
                    )}
          
          </div>
        </div>
      </div>
    </div>
  );
};

