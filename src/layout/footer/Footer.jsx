import "./Footer.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link className="footer-low-preassure" to="/corazon/presion-alta">Presion alta</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;