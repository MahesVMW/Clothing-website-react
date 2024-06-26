import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = ({ cart, setShowModal, setSearchQuery }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
    navigate('/newarrivals'); // Navigate to the new arrivals page after search
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth < 992) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarToggler && navbarCollapse) {
        navbarToggler.classList.add('collapsed');
        navbarCollapse.classList.remove('show');
      }
    }
    // Clear search query when navigating to other links
    setSearchQuery('');
    setQuery('');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="btn btn-info" to="/" id="sidebarCollapse">
          <span>Dream Clothings</span>
        </Link>
        <div className="d-flex align-items-center">
          <button className="btn btn-dark d-lg-none" onClick={() => setShowModal(true)}>
            <i className="fas fa-shopping-cart"></i>
            <span className="badge bg-secondary">{cart.length}</span>
          </button>
          <button
            className="btn btn-dark navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/newarrivals" onClick={handleNavLinkClick}>New Arrivals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="" onClick={handleNavLinkClick}>Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ml-auto d-none d-lg-flex">         
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setShowModal(true)}>
                Cart <span className="badge bg-secondary">{cart.length}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
