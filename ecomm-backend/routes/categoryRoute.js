const express = require("express");
const { createCategory, getCategories, deleteCategory, updateCategory, getCategory } = require("../controller/categoryController");

const router = express.Router();

router.post("/create",createCategory)
.get("/getAll",getCategories)
.get("/getCategory/:id",getCategory)
.delete("/delete/:id",deleteCategory)
.put("/update/:id",updateCategory)
exports.router = router