import React from "react";
import NavBar from "../NavBar/NavBar";
import Input from "../UI/Input";
import SearchButton from "../UI/SearchButton";
import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="container">
      <h2 className="main-title">Ingresa tus credenciales</h2>
      <NavBar />
      <div>
        <form className="search-bar">
          <Input
            label="Email: "
            type="text"
            placeholder="Email"
          ></Input>
          <Input
            label="Contraseña: "
            type="password"
            placeholder="Contraseña"
          ></Input>
          <SearchButton className="button loginButton" type="submit">Ingresar</SearchButton>
        </form>
      </div>
      <div className="container secondOption">
        <p>Aún no tienes cuenta?</p>
        <Link to="/register" className="loginButton">Registrate</Link>
      </div>

    </div>
  );
};

export default Login;
