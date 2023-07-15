import React, { useState } from "react";
import Input from "../UI/Input";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./register.css"

const RegisterForm = () => {

  const [emailValue, setEmailValue] = useState("")  
  const [nameValue, setNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [ageValue, setAgeValue] = useState("")

  let validForm = false

  const validEmail = emailValue.includes('@');
  const validName = nameValue.trim() !== ""
  const validLastName = lastNameValue.trim() !== ""
  const passCheck = pass1 === pass2? true : false

  if (validEmail && validName && validLastName && passCheck) {
    validForm = true
  }

  const emailChangeHandler = (e) => {
    setEmailValue(e.target.value)
  }
  const pass1ChangeHandler = (e) => {
    setPass1(e.target.value)
  }
  const pass2ChangeHandler = (e) => {
    setPass2(e.target.value)
  }
  const nameChangeHandler = (e) => {
    setNameValue(e.target.value)
  }
  const lastNameChangeHandler = (e) => {
    setLastNameValue(e.target.value)
  }
  const ageChangeHandler = (e) => {
    setAgeValue(e.target.value)
  }

  const registerHandler = (e) => {
    e.preventDefault();

    console.log(validForm)
    console.log(emailValue+" "+nameValue+" "+lastNameValue)

    setEmailValue("")
    setNameValue("");
    setLastNameValue("")
    setPass1("")
    setPass2("")
    setAgeValue("")
  }

  return (
    <div className="container">
      <h2 className="main-title">Registrate completando los siguientes campos:</h2>
      <NavBar />
      <div>
        <form className="search-bar" onSubmit={registerHandler}>
          <Input
            value={emailValue}
            onChange={emailChangeHandler}
            label="Email: "
            type="text"
            placeholder="Email"
          ></Input>
          <Input
            value={pass1}
            onChange={pass1ChangeHandler}
            label="Contraseña: "
            type="password"
            placeholder="Contraseña"
          ></Input>
          <Input
            value={pass2}
            onChange={pass2ChangeHandler}
            label="Repetir contraseña: "
            type="password"
            placeholder="Contraseña"
          ></Input>
          <Input
            value={nameValue}
            onChange={nameChangeHandler}
            label="Nombre: "
            type="text"
            placeholder="Nombre"
          ></Input>
          <Input
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            label="Apellido: "
            type="text"
            placeholder="Apellido"
          ></Input>
          <Input
            value={ageValue}
            onChange={ageChangeHandler}
            label="Edad: "
            type="number"
            placeholder="Edad"
          ></Input>
          {/* <SearchButton disable={!validForm} className="button loginButton" type="submit">Registrar</SearchButton> */}
          <button disabled={!validForm} className="loginButton">Registrar</button>
        </form>
      </div>
      <div className="secondOption">
        <p>Ya estás registrado?</p>
        <Link to="/login" className="loginButton">Ir a Login</Link>
      </div>
    </div>
  )
}

export default RegisterForm;