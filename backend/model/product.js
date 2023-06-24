const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vă rugăm să introduceți numele produsului!"],
  },
  description: {
    type: String,
    required: [true, "Vă rugăm să introduceți descrierea produsului!"],
  },
  category: {
    type: String,
    required: [true, "Vă rugăm să introduceți categoria produsului!"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, "Vă rugăm să introduceți prețul produsului!"],
  },
  stock: {
    type: Number,
    required: [true, "Vă rugăm să introduceți stocul produsului!"],
  },
  images: [
    {
      type: String,
    },
  ],
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      productId: {
        type: String,
      },
      createdAt:{
        type: Date,
        default: Date.now(),
      }
    },
  ],
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
