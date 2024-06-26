import React, { useEffect, useState } from 'react';
import './cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Cart = ({ cart = [], setCart, showModal, setShowModal }) => {
    const [total, setTotal] = useState(0);
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);

    useEffect(() => {
        const totalAmount = cart.reduce((acc, item) => acc + item.quantity * parseFloat(item.amount.replace('$', '')), 0);
        setTotal(totalAmount);
    }, [cart]);

    const removeCart = (item) => {
        setCart(cart.filter((c) => c.id !== item.id));
    };

    const updateQuantity = (item, increment) => {
        setCart(cart.map((c) => c.id === item.id ? { ...c, quantity: c.quantity + increment } : c));
    };

    const updateSize = (item, size) => {
        setCart(cart.map((c) => c.id === item.id ? { ...c, size } : c));
    };

    const handleCheckout = () => {
        setCheckoutSuccess(true);
        setTimeout(() => {
            setCheckoutSuccess(false);
            setShowModal(false);
            setCart([]); 
        }, 2000); 
    };

    return (
        <div className={`modal right fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart Products</h5>
                        <button type="button" className="close" onClick={() => setShowModal(false)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {checkoutSuccess && <div className="checkout-success">Order placed successfully!</div>}
                        <div className="cart-container">
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <div className="cart-product" key={item.id}>
                                        <div className="img">
                                            <img src={item.image} alt="Product" />
                                        </div>
                                        <div className="cart-product-details">
                                            <h3>{item.name}</h3>
                                            <p>Price Rs: {item.amount}</p>
                                            <div className="quantity-selector">
                                                <button onClick={() => updateQuantity(item, -1)} disabled={item.quantity <= 1}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item, 1)}>+</button>
                                            </div>
                                            <div className="size-selector">
                                                <label htmlFor={`size-${item.id}`}>Size:</label>
                                                <select id={`size-${item.id}`} value={item.size} onChange={(e) => updateSize(item, e.target.value)}>
                                                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                                        <option key={size} value={size}>{size}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <button className="remove-from-cart-btn" onClick={() => removeCart(item)}>Remove Item</button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="empty-cart-message">Your cart is empty.</div>
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <p className="cart-amt">Total Amount Rs: {total}</p>
                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                        {cart.length > 0 && <button type="button" className="btn btn-primary" onClick={handleCheckout}>Checkout</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};
