const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  email: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;