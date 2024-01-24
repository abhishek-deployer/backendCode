const Product = require('../schema/productSchema');

const createProduct = async (req, res) => {
  try {
    const {categoryName, productName } = req.body;
    // Check if the product already exists
    const existingProduct = await Product.findOne({ productName });

    if (existingProduct) {
      return res.status(409).json({ message: 'Product already exists' });
    }

    const newProduct = new Product({categoryName, productName });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const { productName ,categoryName} = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { productName,categoryName },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(204).json({ message: 'Product deleted' }); // No content for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
