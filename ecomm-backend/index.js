const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRoute");
const productRouter = require("./routes/productRoute");
const orderRouter = require("./routes/orderRoute")

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGOURL);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};


connectDB();
app.use("/api/v1/user", userRouter.router);
app.use("/api/v1/category", categoryRouter.router);
app.use("/api/v1/product", productRouter.router);
app.use("/api/v1/order", orderRouter.router);


//payments


// This is your test secret API key.
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// app.post("/api/v1/create-checkout-session",async(req,res)=>{
//   const {price,cart} = req.body;
//   const lineItems = cart.map((c)=>({
//     price_data:{
//       currency:"usd",
//       product_data:{
//         name:c.name,
//       },
//       unit_amount:parseInt(c.price) ,
//     },
//     quantity:c.quantity
//   }))
//   const session =await stripe.checkout.sessions.create({
//     payment_method_types:["card"],
//     line_items:lineItems,
//     mode:"payment",
//     success_url:"http://localhost:3000/",
//     cancel_url:"http://localhost:3000/cart",
//   })
//   res.json({id:session.id})
// })


app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});

