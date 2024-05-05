const { Order } = require("../model/orderModel");
const moment = require("moment");
exports.createOrder = async (req, res) => {
  try {
    const { id } = req.params;
    let { payment, ...products } = req.body;
    console.log(products);
    products = {
      ...products,
      status: "pending",
      date: moment().calendar(),
      payment: payment,
    };

    const setOrder = new Order({ id: id, products }).save();
    res.status(201).send({
      success: true,
      message: "Succcess in creating Order",
      setOrder,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in creating order",
      error,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const o = await Order.find({ id: id }).select("products");
    // const order = o[0].products[0].orders
    res.status(200).send({
      success: true,
      message: "Fetched Successfully",
      o,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting orders",
      error,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting Order",
      error,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send({
      success: true,
      message: "Success in getting Orders",
      orders,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in fetching orders",
      error,
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const  {status} = req.body;
    console.log(status)
    const order = await Order.findById(id).select("products");
    const updatedOrder = await Order.updateOne(
      { _id: id, "products.orders.name": "rolex" },
      { $set: { "products.$[outer].status": status } },
      { arrayFilters: [ { "outer.orders.name": "rolex" } ] }
    );
    console.log(updatedOrder);
    res.status(201).send({
      success: true,
      message: "Updated Order successfully",
      order,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in updating orders",
      error,
    });
  }
};

exports.getPaymentMethod = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Order.find({ id: id });
    res.status(200).send({
      success: true,
      message: "Fetched Cart Successfully",
      cart,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting Order",
      error,
    });
  }
};
