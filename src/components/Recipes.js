import React from "react";
import foodJson from "../foods.json";
import TextInput from "./TextInput";


const seedArr = foodJson; 

const Recipes = (props) => {

    const [recipesArr, setRecipesArr] = React.useState(seedArr);
    const [newRecipe, setNewRecipe] = React.useState('');

    const [name, setName] = React.useState('')
    const [ingredients, setIngredients] = React.useState('')
    const [instructions, setInstructions] = React.useState('')
    const [vegetarian, setVegetarian] = React.useState('')

    function addRecipe (e) {
        e.preventDefault(); 
        let addedRecipe = {
            name: name,
            ingredients: ingredients,
            instructions: instructions,
            vegetarian: vegetarian
        }
        console.log("NEW RECIPE", addedRecipe)

        setRecipesArr(recipesArr.concat(addedRecipe))
        setNewRecipe("")
    }

  return (
    <div>
        <form onSubmit={addRecipe} >
            <TextInput name="name" value={name} action={(e)=> setName(e.target.value)}/>
            <TextInput name="ingredients" value={ingredients} action={(e)=> setIngredients(e.target.value)}/>
            <TextInput name="instructions" value={instructions} action={(e)=> setInstructions(e.target.value)}/>
            <TextInput name="vegetarian" value={vegetarian} action={(e)=> setVegetarian(e.target.value)}/>
            <button onClick={addRecipe}>Add Recipe</button>
        </form>
        
        <table>
            <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Vegetarian?</th>
            </tr>
            {recipesArr.map(function(indivRecipe){
                let isVegetarian;

                if (indivRecipe.vegetarian) {
                    isVegetarian = "Yes"
                } else {
                    isVegetarian = "No"
                }


                return(
            <tr>
            <td>{indivRecipe.name}</td>
            <td>{indivRecipe.ingredients}</td>
            <td>{indivRecipe.instructions}</td>
            <td>{isVegetarian}</td>
            </tr>
            )
        })}
        </table>
    </div>
  );
};

export default Recipes;
