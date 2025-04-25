import { NavLink } from "react-router";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
     <div className="navigation-section">
          <div className="navigation-container">
            <span className="diseases-text">copyright</span>
            <ul className="navigation-list">
              <li className="navigation-item">Contactos</li>
              <li className="navigation-item">Contactos</li>
              <li className="navigation-item">Contactos</li>
              <li className="navigation-item">Contactos</li>
            </ul>
          </div>
        </div>
    </footer>
  );
};

export default Footer;