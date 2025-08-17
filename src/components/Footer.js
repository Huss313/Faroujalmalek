import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Developed by <span className="my-name">Hussein Rachid</span>
      </p>
    </footer>
  );
}

export default Footer;
