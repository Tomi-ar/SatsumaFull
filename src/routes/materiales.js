const { Router } = require("express");
const router = new Router();
const {
  renderBuscador,
  newController,
  newComentarioController,
  updateMacroController,
  getController,
  getMacroCategoryController,
  getMacroCategoryIdController,
  getByIDController,
  getByFraseController,
} = require("../controllers/materialContr");

//const macro_materiales = require('../models/macroSchema')
// router.get("/macros", async (req,res) => {
//     let data = await macro_materiales.find()
//     res.send(data)
// })

router.get("/", renderBuscador);
router.post("/", newController);
router.get("/todos", getController); // SI PONGO EN EL BUSCADOR TODOS ME REDIRIGE A TODOS ...
router.get("/:MATERIAL", getByFraseController);
router.post("/comentario", newComentarioController);
router.get("/id/:id", getByIDController);
router.put("/macroCat/:id", updateMacroController)
router.get("/macroCat/todo", getMacroCategoryController)
router.get("/macroCat/:id", getMacroCategoryIdController)

module.exports = router;
