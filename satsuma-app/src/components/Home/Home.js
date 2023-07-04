import React from "react";
import NavBar from "../NavBar/NavBar";
import SearchResult from "../SearchResult/SearchResult"
import "../SearchResult/search.css"

const Home = (props) => {
  return (
    <div className="container">
      <h1 className="main-title">Bienvenidos a SATSUMA</h1>
      <SearchResult />
      <NavBar />
    </div>
  );
};

export default Home;
