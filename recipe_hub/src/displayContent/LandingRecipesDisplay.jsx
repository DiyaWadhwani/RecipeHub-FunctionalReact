import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { myFirebase } from "../models/FirebaseConfig.js";
import PropTypes from "prop-types";
import placeholderImage from "../assets/placeholder-image.png";

export default function LandingRecipesDisplay({ recipeList }) {
  const [recipeImages, setRecipeImages] = useState([]);

  useEffect(() => {
    const fetchRecipeImages = async () => {
      try {
        const recipeImages = await myFirebase.fetchRecipeImages(recipeList);
        setRecipeImages(recipeImages);
      } catch (error) {
        console.error("Error fetching recipe images:", error);
        setRecipeImages([]);
      }
    };
    fetchRecipeImages();
  }, []);

  return (
    <>
      <div className="flex-box-recipes">
        <div>
          <h2>Popular Recipes</h2>
        </div>
        <div className="popular-recipes-grid-container">
          {recipeList.map((recipe, index) => {
            // Check if recipeImages is defined and is an array before using find
            if (Array.isArray(recipeImages)) {
              const correspondingImage = recipeImages.find(
                (image) => image.recipeName === recipe.name
              );

              const imageUrl = correspondingImage
                ? correspondingImage.imageUrl
                : placeholderImage;

              return (
                <div className="popular-recipes-grid-item" key={index}>
                  <Link to={`/recipe?recipe_name=${recipe.name}`}>
                    <img
                      className="food-imgs"
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      width="400"
                      height="250"
                    />
                  </Link>
                </div>
              );
            } else {
              return null; // Or render a loading indicator or fallback UI
            }
          })}
        </div>
      </div>
    </>
  );
}

LandingRecipesDisplay.propTypes = {
  recipeList: PropTypes.array.isRequired,
};
