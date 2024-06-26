// App.js
import './App.css';
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';

import { Cart } from './components/cart';
import { ItemDetails } from './components/itemDetails';
import Footer from './components/footer';
import Contact from './components/contact';
import { NewArrivals } from './components/newarrivals';




function App() {
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);

    return (
        <Router>
            <div>
                <Navbar cart={cart} setShowModal={setShowModal}  setSearchQuery={setSearchQuery}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/newarrivals" element={<NewArrivals cart={cart} setCart={setCart} searchQuery={searchQuery}  />} />
                    <Route  path="/item/:id" element={<ItemDetails cart={cart} setCart={setCart}/>}/>
                    <Route  path="/contact" element={<Contact/>}/>
                </Routes>
                <Cart cart={cart} setCart={setCart} showModal={showModal} setShowModal={setShowModal} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
