import logo from "./logo.svg";
import "./App.css";
import foodsJson from "./foods.json";
import Recipes from "./components/Recipes";
import SignUp from "./components/SignUp";

const recipesArr = foodsJson;



function App() {
  return (
    <div>
      <h1>Iron Chef</h1>
      <Recipes/>
      <SignUp/>
    </div>
  );
}

export default App;
