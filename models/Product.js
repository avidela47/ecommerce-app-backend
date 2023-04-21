const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "no puede estar en blanco"]
  },
  description: {
    type: String,
    required: [true, "no puede estar en blanco"]
  },
  price: {
    type: String,
    required: [true, "no puede estar en blanco"]
  },
  category: {
    type: String,
    required: [true, "no puede estar en blanco"]
  },
  pictures: {
    type: Array,
    required: true
  }
}, {minimize: false});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
