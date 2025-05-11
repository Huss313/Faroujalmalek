import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Find Us</h1>
      <div className="contact-info">
        <a href="tel:+961 81 099 880" className="contact-link" dir="ltr">
          📞 +961 81 099 880
        </a>
        <a href="https://maps.app.goo.gl/Ffkzpe59U1Vp2Qoc7" className="contact-link" dir="ltr">
          📍 Autostrad Alsayyid Hadi
        </a>
        <p>Open daily: 12AM - 12PM</p>
      </div>

      <Link to="/Menu" className="mobile-menu-btn">
        🔙 Back to Menu
      </Link>
    </div>
  );
}