const express = require('express');
const categoryController = require('../category/index');

const router = express.Router();

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);
router.delete('/delete/:id', categoryController.deleteCategoryById);
router.get('/getById/:id', categoryController.getCategoryById);
router.put('/update/:id', categoryController.updateCategoryById);

module.exports = router;
