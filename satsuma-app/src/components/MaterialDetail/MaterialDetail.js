import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './MaterialDetail.css'

const MaterialDetail = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [comentarios, setComentarios] = useState([])
  const [loading, setLoading] = useState(false);
  const URI = "https://master--cute-souffle-34850e.netlify.app/materiales/id/";

  useEffect(() => {
    setLoading(true);
    axios
      .get(URI + id)
      .then((res) => {
        setDetails(res.data.data[0]);
        setComentarios(res.data.data[0].macroCat.COMENTARIOS)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // console.log(details.macroCat.COMENTARIOS)

  return (
    <>
    <NavBar />
    <div className="container detalles">
      <h2 className="main-title">{details.MATERIAL}</h2>
      {loading && <h2>Cargando...</h2>}
      <p className="detalle_catPpal">Familia de materiales:</p>
      <h3 className="detalle_catPpal2">{details.MACRO_CATEGORIA}</h3>
      <p>Si el residuo está:</p>
      <ul>
      {comentarios.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
    </>
  );
};

export default MaterialDetail;
