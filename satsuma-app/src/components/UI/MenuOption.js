import React from "react";
import { Link } from "react-router-dom";

const MenuOption = (props) => {
  return (
    <div className="opcionNav">
      <div className="menuNavIcon">
        <Link to={props.link}>
          <i className={`fi fi-${props.icon} ${props.className}`}></i>
        </Link>
      </div>
      <p>{props.option}</p>
    </div>
  );
};

export default MenuOption;
