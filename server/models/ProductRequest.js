const mongoose = require("mongoose");

const ProductRequestSchema = new mongoose.Schema({
    name: String,
    email: String,
    productType: String
});

module.exports = mongoose.model("ProductRequest", ProductRequestSchema);
