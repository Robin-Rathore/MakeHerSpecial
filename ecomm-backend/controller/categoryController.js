const { Category } = require("../model/categoryModel");
const slugify = require("slugify");
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).send({
        success: false,
        message: "Already Exists",
      });
    }
    const category = new Category({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "Created Successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in creating Category",
      error,
    });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).send({
      success: true,
      message: "Successfull",
      categories,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting categories",
      error,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    res.status(201).send({
      success: true,
      message: "Deleted Successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting Category",
      error,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    )
    res.status(201).send({
      success: true,
      message: "Successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in updating",
      error,
    });
  }
};

exports.getCategory = async(req,res)=>{
    try {
        const {id} = req.params;
        const category = await Category.findById(id);
        res.status(200).send({
            success:true,
            message:"Success",
            category
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in getting category",
            error,
          });
    }
}