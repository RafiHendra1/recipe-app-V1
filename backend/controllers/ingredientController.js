const Ingredient = require('../models/ingredientModel')
const mongoose = require('mongoose')

// get all ingredients
const getIngredients = async (req, res) => {
  const ingredients = await Ingredient.find({}).sort({createdAt: -1})

  res.status(200).json(ingredients)
}

// get a single ingredient
const getIngredient = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such ingredient'})
  }

  const ingredient = await Ingredient.findById(id)

  if (!ingredient) {
    return res.status(404).json({error: 'No such ingredient'})
  }

  res.status(200).json(ingredient)
}

// create a new Ingredient
const createIngredient = async (req, res) => {
  try {
    const newIngredient = new Ingredient(req.body);
    await newIngredient.save();
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// delete an ingredient
const deleteIngredient = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such ingredient'})
  }

  const ingredient = await Ingredient.findOneAndDelete({_id: id})

  if(!ingredient) {
    return res.status(400).json({error: 'No such ingredient'})
  }

  res.status(200).json(ingredient)
}

// update an ingredient
const updateIngredient = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such ingredient'})
  }

  const ingredient = await Ingredient.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!ingredient) {
    return res.status(400).json({error: 'No such ingredient'})
  }

  res.status(200).json(ingredient)
}

module.exports = {
  getIngredients,
  getIngredient,
  createIngredient,
  deleteIngredient,
  updateIngredient
}