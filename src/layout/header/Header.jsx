import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="nav-link-company" to="/" end>
          <img src="../assets/img/biodigest.png" alt="" />BioDigest
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