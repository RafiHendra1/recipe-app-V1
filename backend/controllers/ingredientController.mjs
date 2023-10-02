import db from "../conn.mjs";
import { ObjectId } from "mongodb";

// get all ingredients
const getIngredients = async (req, res) => {
  let collection = await db.collection("Ingredients");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
}

// get a single ingredient
const getIngredient = async (req, res) => {
  let collection = await db.collection("Ingredients");
  let result = await collection.findOne(req.params._id);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
}

// create a new Ingredient
const createIngredient = async (req, res) => {
  try {
    let collection = await db.collection("Ingredients");
    let result = await collection.insertOne(req.body);
    res.send(result).status(204);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// delete an ingredient
const deleteIngredient = async (req, res) => {
  // const query = { _id: new ObjectId(req.params._id) };
  const collection = db.collection("Ingredients");
  let result = await collection.deleteOne(req.params._id);
  res.send(result).status(200);
}

// update an ingredient
const updateIngredient = async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level
    }
  };

  let collection = await db.collection("Ingredients");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);

}

export {
  getIngredients,
  getIngredient,
  createIngredient,
  deleteIngredient,
  updateIngredient
}