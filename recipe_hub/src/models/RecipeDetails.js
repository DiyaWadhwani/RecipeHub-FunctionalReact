import Ingredient from "./Ingredient";
import PropTypes from "prop-types";
import { myFirebase } from "./FirebaseConfig";

export default function RecipeDetails() {
  const me = [];

  me.fetchRecipeDetails = async (recipeName, isForked) => {
    try {
      console.log("checking isForked to fetch recipe", isForked);

      if (isForked === "true") {
        console.log("fetching forkedRecipe from firebase");
        const fetchedRecipeDetails =
          await myFirebase.fetchForkedRecipe(recipeName);
        return fetchedRecipeDetails;
      } else {
        console.log("fetching og recipe from firebase");
        const fetchedRecipeDetails =
          await myFirebase.fetchRecipeDetails(recipeName);
        return fetchedRecipeDetails;
      }
    } catch (error) {
      console.error("Error fetching recipes in RecipeDetails:", error);
      return [];
    }
  };

  me.fetchRecipeNames = async () => {
    try {
      const allRecipes = await myFirebase.fetchRecipeNames();
      return allRecipes;
    } catch (error) {
      console.error("Error fetching recipes in RecipeDetails:", error);
      return [];
    }
  };

  me.fetchMyRecipeNames = async () => {
    try {
      const myRecipes =
        myFirebase.fetchUserSpecificRecipeNames("createdRecipes");
      return myRecipes;
    } catch (error) {
      console.error("Error fetching recipes in RecipeDetails:", error);
      return [];
    }
  };

  me.fetchUserForkedRecipeNames = async () => {
    try {
      const myRecipes = myFirebase.fetchUserForkedRecipeNames();
      return myRecipes;
    } catch (error) {
      console.log("Error fetching recipes in RecipeDetails: ", error);
    }
  };
}

RecipeDetails.propTypes = {
  recipeName: PropTypes.string,
  recipeAuthor: PropTypes.string,
  recipeInstructions: PropTypes.objectOf(PropTypes.string),
  recipeIngredients: PropTypes.arrayOf(PropTypes.instanceOf(Ingredient)),
  recipeImageURL: PropTypes.string,
};
