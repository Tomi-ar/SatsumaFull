const { Router } = require('express');
const router = new Router();
const { renderBuscador, newController, newComentarioController, getController, getByIDController, getByFraseController } = require("../controllers/materialContr")


//const macro_materiales = require('../models/macroSchema')
// router.get("/macros", async (req,res) => {
//     let data = await macro_materiales.find()
//     res.send(data)
// })

router.get("/", renderBuscador)
router.post("/", newController)
router.get("/:MATERIAL", getByFraseController)
router.post("/comentario", newComentarioController)
router.get("/todos", getController)
router.get("/id/:ID", getByIDController)


module.exports = router;