const { Schema, model } = require('mongoose');

const materialSchema = new Schema({
    ID: { type: String, required: true },
    MATERIAL: { type: String, required: true },
    CATEGORIA1: { type: String, required: true },
    MACRO_CATEGORIA: { type: String, required: true },
}, {timestamps: true}
);

materialSchema.index({ MATERIAL:'text', MACRO_CATEGORIA:'text' });

module.exports = model("materiales", materialSchema);