import { NavLink } from "react-router";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
     <div className="navigation-section">
          <div className="navigation-container">
            <p>&copy; 2025 Copyright.</p>
            <p>
              <a href="/about-we">Acerca de</a> | 
              <a href="/">Contacto</a> | 
              <a href="/">Política de privacidad</a>
            </p>
            <p>Síguenos en: 
              <a href="https://facebook.com/" target="_blank">Facebook</a> | 
              <a href="https://instagram.com/" target="_blank">Instagram</a>
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;