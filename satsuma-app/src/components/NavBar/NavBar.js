import React from "react";
import MenuOption from "../UI/MenuOption";
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className="barraNav">
      <div className="navBar menuNav">
        <MenuOption link="/login" className="iconNav" icon="sr-user" option="Perfil" />
        <MenuOption link="/search" className="iconNav" icon="br-search" option="Buscador"/>
        <MenuOption link="link" className="iconNav" icon="rr-document" option="Blog"/>
      </div>
    </nav>
  );
};

export default NavBar;
