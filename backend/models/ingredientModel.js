const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  servingSize: {
    units: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    grams: {
      type: Number,
      required: true,
    },
    scale: {
      type: Number,
      required: true,
    },
  }}, { timestamps: true })

module.exports = mongoose.model('Ingredient', ingredientSchema)