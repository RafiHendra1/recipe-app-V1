import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./Components/PrimarySearchAppBar";
import Home from "./Pages/Home";
import LikedRecipes from "./Pages/LikedRecipes";
import ShoppingList from "./Pages/ShoppingList";
import RecipePage from "./Pages/RecipePage";
import Submit from "./Pages/Submit";
import Searched from "./Pages/Searched";

function App() {
  return (
    
    <BrowserRouter> 
      <PrimarySearchAppBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LikedRecipes" element={<LikedRecipes />} />
        <Route path="/ShoppingList" element={<ShoppingList />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/Searched/:search" element={<Searched />} />
        <Route path="/RecipePage/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
