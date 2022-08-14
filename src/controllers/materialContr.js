const Materiales = require("../containers/materialCont");
const materialCont = new Materiales();

const renderBuscador = async (req, res) => {
  res.render("buscador");
};

const newController = async (req, res) => {
  let objetos = req.body;
  let materiales = [];
  for (let i = 0; i < objetos.length; i++) {
    let material = await materialCont.newMaterial(objetos[i]);
    materiales.push(material);
  }
  res.json({ data: materiales });
};

const newComentarioController = async (req, res) => {
  let objeto = req.body;
  let comentarios = [];
  for (let i = 0; i < objeto.length; i++) {
    let comentario = await materialCont.newMacroComentario(objeto[i]);
    comentarios.push(comentario);
  }
  res.json({ data: comentarios });
};
const updateMacroController = async (req, res) => {
  let ID = req.params.id;
  let comentarios = req.body.comentarios;
  let macroCat = await materialCont.getMacroByID(ID, comentarios);
  res.json({ data: macroCat });
};

const getController = async (req, res) => {
  let materiales = await materialCont.getMateriales();
  res.json({ data: materiales });
};
const getMacroCategoryController = async (req, res) => {
  let macroCat = await materialCont.getMacroCategory();
  res.json({ data: macroCat });
};
const getMacroCategoryIdController = async (req, res) => {
  let ID = req.params.id;
  let macroCat = await materialCont.getMacroCategoryID(ID);
  res.json({ data: macroCat });
};
const getByIDController = async (req, res) => {
  let material = await materialCont.getByID(req.params.id);
  let indice = Math.floor(Math.random() * (4 - 0 + 1));
  let comms = material[0].macroCat.COMENTARIOS.slice(indice, indice + 2);
//   res.render("detalles", { resultado: material[0], comms: comms });
  res.json({data: material})
};

const getByFraseController = async (req, res) => {
  console.log("material: " + req.params.MATERIAL);
  let materiales = await materialCont.getByFrase(req.params.MATERIAL);
  res.json({ data: materiales });
  // res.render('resultados', {resultados: materiales})
};

module.exports = {
  renderBuscador,
  newController,
  newComentarioController,
  updateMacroController,
  getController,
  getMacroCategoryController,
  getMacroCategoryIdController,
  getByIDController,
  getByFraseController,
};
