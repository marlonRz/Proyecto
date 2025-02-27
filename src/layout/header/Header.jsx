import { NavLink } from "react-router";
import "./Header.css";
import logo from "../../assets/img/biodigest_logo.png";


const Header = () => {
  return (
    <header>
      <nav>
      <img src={logo} alt="" className="header-logo-biodigest" />
        <NavLink className="nav-link-company" to="/" end>
          BioDigest
        </NavLink>
        <NavLink className="nav-link" to="about-we" end>
          Nosotros
        </NavLink>
        <NavLink className="nav-link" to="/" end>
          Inicio
        </NavLink>
        <NavLink className="nav-link"  to="quiz" end>
          Quiz
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;