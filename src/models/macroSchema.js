const { Schema, model } = require('mongoose');

const macroSchema = new Schema({
    MACRO_CATEGORIA: { type: String, required: true },
    COMENTARIOS: { type: Array, required: true },
}, {timestamps: true}
);

module.exports = model("macro_materials", macroSchema);