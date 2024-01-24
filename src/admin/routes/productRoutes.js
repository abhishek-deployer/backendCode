const express = require('express');
const productController = require('../product/index');

const router = express.Router();

router.post('/product', productController.createProduct);
router.get('/product', productController.getAllProducts);
router.delete('/productDelete/:id', productController.deleteProductById);
router.get('/getByIdProduct/:id', productController.getProductById);
router.put('/productUpdate/:id', productController.updateProductById);

module.exports = router;
