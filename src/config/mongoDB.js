const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_HOST+process.env.MONGO_NAME+"?retryWrites=true&w=majority")
mongoose.connection.on("open", () => {
    console.log("base de datos conectada");
})
mongoose.connection.on("error", () => {
    console.log("Error al abrir la BD");
})
