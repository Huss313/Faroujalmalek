import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page" dir="rtl">
      <div className="contact-container">
        <h2>اتصل بنا / Contact Us</h2>
        <div className="contact-info">
          <div className="info-card">
            <div className="icon">📱</div>
            <h3>الهاتف / Phone</h3>
            <a href="tel:+96181099880" className="contact-link" dir='ltr' style={{textDecoration:'none' , color:'red'}}>
              +96181099880
            </a>
          </div>
          <div className="info-card">
            <div className="icon">📍</div>
            <h3>العنوان / Address</h3>
            <a style={{textDecoration:'none',color:'red'}}
              href="https://maps.app.goo.gl/Ffkzpe59U1Vp2Qoc7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <p>Autostrad Al-sayyid Hadi , Facing Old Bigsale</p>
            </a>
          </div>
          <div className="info-card">
            <div className="icon">⏰</div>
            <p style={{color:'red'}}>Daily: 12PM - 12AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;