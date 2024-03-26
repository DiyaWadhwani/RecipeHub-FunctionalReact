import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myFirebase } from "../models/FirebaseConfig";
import placeholderImage from "../assets/placeholder-image.png";

const LandingRecipesDisplay = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      // Simulate fetching recipe data
      return [
        { name: "Cheeseburger", imageUrl: null },
        { name: "Margherita Pizza", imageUrl: null },
        { name: "Chicken Momos", imageUrl: null },
        { name: "Cannoli", imageUrl: null },
        // Add more recipe objects as needed
      ];
    };

    const fetchData = async () => {
      try {
        // Fetch recipe list
        const recipes = await fetchRecipes();
        setRecipeList(recipes);

        // Fetch random images for each recipe
        const newRecipeList = await myFirebase.fetchImagesForRecipes(recipes); // Await here
        console.log("New recipe list:", newRecipeList);
        setRecipeList(newRecipeList);
      } catch (error) {
        console.error("Error fetching recipe list:", error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex-box-recipes">
        <div>
          <h2>Popular Recipes</h2>
        </div>
        <div className="popular-recipes-grid-container">
          {recipeList.map((recipe, index) => (
            <div className="popular-recipes-grid-item" key={index}>
              <Link to={`/recipe?recipe_name=${recipe.name}`}>
                <img
                  className="food-imgs"
                  src={recipe.imageUrl || placeholderImage}
                  alt={`Image ${index + 1}`}
                  width="400"
                  height="250"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingRecipesDisplay;
