const express = require("express")
const { createProduct, getAllProducts, getProduct, deleteProduct, updateProduct, getPhoto, getFilteredProducts, getPricedProducts } = require("../controller/productController")
const formidable = require("express-formidable")
const router = express.Router()

router.post("/create",formidable(),createProduct)
.get("/getAll",getAllProducts)
.get("/getProduct/:id",getProduct)
.delete("/delete/:id",deleteProduct)
.put("/update/:id",formidable(),updateProduct)
.get("/photo/:id",getPhoto)
.post("/filteredProducts",getFilteredProducts)
.post("/pricedProducts",getPricedProducts)
exports.router = router;