import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page" dir="rtl">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-info">
          <div className="info-card">
            <div className="icon">📱</div>
            <div>
              <h3>الهاتف / Phone</h3>
              <a
                href="tel:+96181099880"
                dir="ltr"
                className="contact-link"
              >
                +961 81 099 880
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="info-card">
            <div className="icon">📍</div>
            <div>
              <h3>العنوان / Address</h3>
              <a
                href="https://maps.app.goo.gl/Ffkzpe59U1Vp2Qoc7"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Autostrad Al-sayyid Hadi, Facing Old Bigsale
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="info-card">
            <div className="icon">⏰</div>
            <div>
              <h3>ساعات العمل / Hours</h3>
              <p className="contact-text">Daily: 12PM - 12AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
