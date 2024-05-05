const express = require("express");
const {
  registerController,
  loginController,
  getAllUsers,
  addToCart,
  getCart,
  deleteInCart,
  updateCart,
  createOrder,
  getOrders,
  getOrder,
  resetCart,
  getPayment,
  findUser,
} = require("../controller/userController");
const { requireSignIn } = require("../middlewares/userMiddlewares");
const formidable = require("express-formidable");
const router = express.Router();
router
  .post("/register", registerController)
  .post("/login", loginController)
  .get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  })
  .get("/admin-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  })
  .get("/admin/users", getAllUsers)
  .post("/addToCart/:id", formidable(), addToCart)
  .get("/getCart/:id", getCart)
  .post("/deleteCart/:id", deleteInCart)
  .post("/updateCart/:id", updateCart)
  .post("/resetCart/:id", resetCart)
  .get("/getPayment/:id", getPayment)
  .get("/getUser/:id", findUser);
exports.router = router;
