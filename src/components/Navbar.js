import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../Images/bashapic.png';
import './Navbar.css';

const logo = process.env.PUBLIC_URL + '/Images/malek.jpg';
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Basha Logo" className="logo" style={{borderRadius:'50%'}}/>
        </Link>
      <div className="nav-buttons">
        <Link to="/" className="nav-button menu-button">
           <span className="arabic">القائمة</span>
           <span className="english">Menu</span>
        </Link>
        <Link to="/contact" className="nav-button contact-button">
           <span className="arabic">اتصل بنا</span>
           <span className="english">Contact</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;