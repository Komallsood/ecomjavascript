const express = require("express");
const ProductRequest = require("../models/ProductRequest");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, productType } = req.body;
        const newRequest = new ProductRequest({ name, email, productType });
        await newRequest.save();
        res.json({ message: "Product request submitted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error submitting request" });
    }
});

module.exports = router;
