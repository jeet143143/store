const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/add', (req, res) => {
  res.render('product-form');
});

router.post('/add', async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.redirect('/products');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;