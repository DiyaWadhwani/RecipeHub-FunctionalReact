import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, StorageError } from "firebase/storage";
import firebaseConfig from "../models/FirebaseConfig";
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
        const newRecipeList = [];
        for (const recipe of recipes) {
          try {
            const imageRef = ref(
              firebaseConfig.storage,
              `/images/${recipe.name}.png`
            );
            const imageUrl = await getDownloadURL(imageRef);
            newRecipeList.push({ ...recipe, imageUrl });
          } catch (error) {
            if (
              error instanceof StorageError &&
              error.code === "storage/object-not-found"
            ) {
              // Handle object not found error
              console.error(
                `Image for ${recipe.name} not found. Using placeholder.`
              );
              newRecipeList.push({ ...recipe, imageUrl: placeholderImage });
            } else {
              // Handle other errors
              console.error(`Error fetching image for ${recipe.name}:`, error);
              throw error; // Rethrow other errors
            }
          }
        }
        setRecipeList(newRecipeList);
      } catch (error) {
        console.error("Error fetching recipe list:", error);
        // Handle error
      }
    };

    fetchData();
  }, []); // Empty dependency array to mimic componentDidMount

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
