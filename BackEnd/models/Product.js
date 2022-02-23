const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   },
   rating: {
      type: Number,
      default: 0
   },
   comments: {
      type: Array,
      default: []
   },
})

module.exports = mongoose.model('Product', ProductSchema);