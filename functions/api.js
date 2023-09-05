const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("../src/config/mongoDB");
PORT = process.env.PORT
const serverless = require("serverless-http")

const app = express();

// CORS
const cors = require("cors");
app.use(cors())

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MOTOR DE PLANTILLAS
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");
// app.use(express.static(__dirname+"/satsuma-app/dist"));

// ROUTER
const materiales = require("../src/routes/materiales");
app.use("/.netlify/functions/api/materiales", materiales);
const usuarios = require("../src/routes/users");
app.use("/.netlify/functions/api/login", usuarios);

// app.get('*', (req,res) => {
//   res.sendFile(__dirname+'/dist/'+'index.html')
// })

app.get("/", (req, res) => {
  res.send("home page");
});

// app.listen( PORT || 8002, () => {
//   console.log(`Escuchando en el puerto ${process.env.PORT}`);
// });
module.exports.handler = serverless(app)