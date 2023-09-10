import React from "react";
import "./header.scss";
import Logo from "../../../public/images/logo.svg";
import Hamburguer from "../../../public/images/hamburguer.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar-lumen">
      <div className="logo">
        <img src={Logo} alt="logo-lumen" width={50} />
      </div>
      <div className="menu-icon" onClick={handleShowMenu}>
        <img src={Hamburguer} alt="hamburguer" width={50} />
      </div>
      <div className={`nav-elements ${showMenu && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/projetos">Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/transparencia">Transparência</NavLink>
          </li>
          <li>
            <NavLink to="/parceiro">Parceiros</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Quero ajudar a salvar vidas</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
