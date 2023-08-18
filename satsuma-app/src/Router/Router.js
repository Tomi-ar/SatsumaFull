import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MaterialDetail from "../components/MaterialDetail/MaterialDetail";
import SearchResult from "../components/SearchResult/SearchResult";
import RegisterForm from "../components/Register/Register";

const Router = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<SearchResult />} />
    <Route exact path="/login" element={<Login />} />
    <Route path="/search/:id" element={<MaterialDetail />} /> 
    <Route path="/register" element={<RegisterForm />}></Route>
  </Routes>
  )
};

export default Router;
