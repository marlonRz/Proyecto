import { NavLink } from "react-router";
import "./Header.css";
import logo from "../../assets/img/biodigest_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion" 

const Header = () => {
  return (
    <motion.header
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 10, opacity: 1 }}
    transition={{ type: "tween", duration: 2 }}>
      <nav className="navbar">
        <div className="nav-left">
          <NavLink className="nav-link-company" to="/" end>
            <img src={logo} alt="" className="header-logo-biodigest" />BioDigest
          </NavLink>
        </div>
        <div className="nav-rigth">
          <NavLink className="nav-link" to="about-we" end>
            Nosotros
          </NavLink>
          <NavLink className="nav-link" to="/" end>
            Inicio
          </NavLink>
          <NavLink className="nav-link" to="quiz" end>
            Quiz
          </NavLink>
          <NavLink className="nav-link" to="inicio-sesion"  end>
            Perfil<FontAwesomeIcon className="icons" icon={faCircleUser} />
          </NavLink>
        </div>
      </nav>
    </motion.header>
  );
};


export default Header;