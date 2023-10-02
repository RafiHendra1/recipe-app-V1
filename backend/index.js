const ingre = {
  "_id": "f84d72ac-a3c5-400f-a3e7-8a9161598ef7",
  "name": "Raw Egg",
  "servingSize": {
    "units": "large",
    "desc": "1 large",
    "qty": 1,
    "grams": 50,
    "scale": 1
  }
}

// Replace the uri string with your connection string.
const uri = "mongodb+srv://RafifHendra:ADozNPB0ZayiVCMl@recipecluster.55w9oo1.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const database = client.db("Items");
    const IngredientDB = database.collection("Ingredients");
    const result = await IngredientDB.insertOne(ingre);
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
