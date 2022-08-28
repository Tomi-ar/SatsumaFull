import React from "react";
import NavBar from "../NavBar/NavBar";
import Input from "../UI/Input";

const Login = () => {
  return (
    <div className="container">
      <h2 className="main-title">Ingresa tus credenciales</h2>
      <NavBar />
      <div>
        <form className="search-bar">
          <Input
            label="Usuario: "
            type="text"
            placeholder="Nombre de usuario"
          ></Input>
          <Input
            label="Contraseña: "
            type="password"
            placeholder="Contraseña"
          ></Input>
        </form>
      </div>
    </div>
  );
};

export default Login;
