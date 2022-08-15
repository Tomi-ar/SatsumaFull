const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./src/config/mongoDB");

const app = express();

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MOTOR DE PLANTILLAS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/satsuma-app/build"));
app.get('*', (req,res) => {
  res.sendFile(__dirname + '/satsuma-app/build' + 'index.html')
})

// CORS
const cors = require("cors");
app.use(cors())

// ROUTER
const materiales = require("./src/routes/materiales");
app.use("/materiales", materiales);
const usuarios = require("./src/routes/users");
app.use("/login", usuarios);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(process.env.PORT || 8002 , () => {
  console.log(`Escuchando en el puerto ${process.env.PORT}`);
});
