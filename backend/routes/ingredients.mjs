import express from "express";
import {
  getIngredients, 
  getIngredient, 
  createIngredient, 
  deleteIngredient, 
  updateIngredient
} from '../controllers/ingredientController.mjs';

const router = express.Router()

// GET all workouts
router.get('/', getIngredients)

// GET a single workout
router.get('/:id', getIngredient)

// POST a new workout
router.post('/', createIngredient)

// DELETE a workout
router.delete('/:id', deleteIngredient)

// UPDATE a workout
router.patch('/:id', updateIngredient)

export default router