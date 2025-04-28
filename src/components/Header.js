// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Link to the Home page */}
          <li><Link to="/about">About</Link></li> {/* Link to the About page */}
          <li><Link to="/gallery">Gallery</Link></li> {/* Link to the Gallery page */}
          <li><Link to="/reservation">Reservation</Link></li> {/* Link to the Reservation page */}
          <li><Link to="/adminlogin">Admin Login</Link></li> {/* Link to the Admin Login page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
