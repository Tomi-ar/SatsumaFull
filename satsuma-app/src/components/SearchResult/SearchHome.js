import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Input from "../UI/Input";
import SearchButton from "../UI/SearchButton";
import "./search.css";
import axios from "axios";
import SearchBox from "./SearchBox";

const SearchHome = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [palabraBusqueda, setPalabraBusqueda] = useState("");
  const [materials, setMaterials] = useState([]);

  const URI = "https://master--cute-souffle-34850e.netlify.app/materiales/";

  const getMaterials = () => {
    axios
      .get(URI + "todos")
      .then((res) => {
        setMaterials(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getByFrase = async () => {
    const res = await axios.get(URI + searchInput);
    console.log(res.data.data);
    setMaterials(res.data.data);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit: " + searchInput);
    setPalabraBusqueda(searchInput);
    if (searchInput === "") {
      getMaterials();
    } else {
      getByFrase();
    }
  };

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
    console.log("search word: " + searchInput);
  };

  useEffect(() => {}, [materials]);

  return (
    <div>
      <div className="container">
        <h2 className="main-title">Buscar por material</h2>
        <NavBar />
        <form onSubmit={submitHandler} className="search-cont">
          <Input
            htmlFor="Search"
            placeholder="Busca por material..."
            type="text"
            id="Search"
            onChange={searchInputHandler}
            value={searchInput}
          />
          <SearchButton className="button" type="submit">
            Buscar
          </SearchButton>
        </form>
      </div>
      <div className="search-results">
        {materials === undefined && <p>No hay resultados</p>}
        {materials !== undefined && materials.length > 0 && (
          <>
            <div className="text-center">
              <p>Resultados para:</p>
              <h3>{palabraBusqueda}</h3>
            </div>

            {materials.map((mat) => (
              <SearchBox
                key={mat.ID}
                material={mat.MATERIAL}
                categoria1={mat.CATEGORIA1}
                macro_categoria={mat.MACRO_CATEGORIA}
                _id={mat._id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchHome;
