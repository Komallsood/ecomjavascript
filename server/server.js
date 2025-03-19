const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRequestRoutes = require("./routes/productRequests");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("DB Connection Error:", err));

app.use("/api/product-requests", productRequestRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
