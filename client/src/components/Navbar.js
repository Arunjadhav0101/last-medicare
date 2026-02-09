import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">💊</span>
          <span className="logo-text">MediCare</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blood-bank">Blood Bank</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/orders">My Orders</Link></li>
          {user ? (
            <>
              <li><span>Hi, {user.username}</span></li>
              <li><button onClick={handleLogout} className="btn-logout">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="btn-login">Login</Link></li>
              <li><Link to="/signup" className="btn-signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
