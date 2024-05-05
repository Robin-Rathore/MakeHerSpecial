const express = require("express")
const { createOrder, getOrder, deleteOrder, getPaymentMethod, getAllOrders, updateStatus } = require("../controller/orderController")

const router = express.Router()

router.post("/createOrder/:id",createOrder)
.get("/getOrder/:id",getOrder)
.delete("/deleteOrder/:id",deleteOrder)
.get("/getPayment/:id",getPaymentMethod)
.get("/getAllOrders",getAllOrders)
.post("/updateOrder/:id",updateStatus)
exports.router = router