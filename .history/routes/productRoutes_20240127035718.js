// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Thêm sản phẩm mới
router.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Xóa sản phẩm theo ProductCode
router.delete('/products/:productCode', async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ ProductCode: req.params.productCode });
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
