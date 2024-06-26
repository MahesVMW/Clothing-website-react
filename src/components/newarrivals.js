import React, { useState } from 'react';
import './newarrivals.css';
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
import { Link } from 'react-router-dom';

export const NewArrivals = ({ cart, setCart, searchQuery }) => {
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });

  const items = [
    { id: 1, image: new1, name: 'Casual Brown Shirt', amount: '$29' },
    { id: 2, image: new9, name: 'Blue Denim Shirt', amount: '$39' },
    { id: 3, image: new8, name: 'Classic White Shirt', amount: '$49' },
    { id: 4, image: new14, name: 'Formal Grey Shirt', amount: '$59' },
    { id: 5, image: new15, name: 'Striped Red Shirt', amount: '$69' },
    { id: 6, image: new3, name: 'Floral Pattern Shirt', amount: '$79' },
    { id: 7, image: new5, name: 'Black Party Shirt', amount: '$89' },
    { id: 8, image: new6, name: 'Green Checkered Shirt', amount: '$99' },
    { id: 9, image: new10, name: 'Casual Pink Shirt', amount: '$109' },
    { id: 10, image: new11, name: 'Navy Blue Shirt', amount: '$119' },
    { id: 11, image: new10, name: 'Purple Designer Shirt', amount: '$129' },
    { id: 12, image: new11, name: 'Yellow Summer Shirt', amount: '$119' },
  ];


  const filteredItems = items.filter((item) =>
    searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );

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

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div>
      <div className="row mt-5">
        {filteredItems.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
            <div className="image-container">
              <div className="item-details">
                <p>{item.name}</p>
                <p>{item.amount}</p>
              </div>
              <img src={item.image} className="img-fluid" alt={`New Arrival ${item.id}`} />
              <div className="overlay">
                <div className="text">
                  <div className="button-group">
                    {sizes.map((size, idx) => (
                      <button key={idx} className="size-btn">
                        {size}
                      </button>
                    ))}
                    <div className="btn-row">
                      {cart.some((c) => c.id === item.id) ? (
                        <button className="btnRemove" onClick={() => removeCart(item)}>
                          <i className="fas fa-trash-alt"></i> Remove from Cart
                        </button>
                      ) : (
                        <button className="add-to-cart-btn" onClick={() => addCart(item)}>
                          <i className="fas fa-check"></i> Add to Cart
                        </button>
                      )}
                      <Link to={`/item/${item.id}`} className="add-to-cart-btn">
                        View Item
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {notification.visible && (
        <div className={`notification ${notification.type}`}>
          {notification.type === 'success' ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="fas fa-trash-alt"></i>
          )}
          {notification.message}
        </div>
      )}
    </div>
  );
};

