import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import ingredientRoutes from "./routes/ingredients.mjs";

// express app
const app = express()

app.use(cors({origin: "*"}))
// Define your routes and other middleware here


// middleware

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/ingredients', ingredientRoutes)
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

// connect to db
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('connected to database')
//     // listen to port
//     app.listen(process.env.PORT, () => {
//       console.log('listening for requests on port', process.env.PORT)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   }) 
  
