import React, { useEffect, useState } from "react";
import { BiFork } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import EmptyHeader from "../fragments/EmptyHeader";
import Footer from "../fragments/Footer";
import RecipeDetailsDisplay from "../displayContent/RecipeDetailsDisplay";
import RecipeDetails from "../models/RecipeDetails";

export default function RecipeDetailsPage() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [isForked, setIsForked] = useState(false);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const recipeName = urlSearchParams.get("recipe_name");
    const isForkedParam = urlSearchParams.get("isForked");
    const isForkedValue = isForkedParam === "true";
    setIsForked(isForkedValue);
    if (recipeName) {
      fetchRecipeDetailsFromBackend(recipeName, isForkedValue);
    }
  }, []);

  const fetchRecipeDetailsFromBackend = async (recipeName, isForked) => {
    try {
      const fetchedRecipeDetails = await RecipeDetails().fetchRecipeDetails(
        recipeName,
        isForked
      );
      if (fetchedRecipeDetails) {
        setRecipeDetails(fetchedRecipeDetails);
      } else {
        console.log("Recipe not found");
        // Handle the scenario when no recipe is found
      }
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <>
      <div className="body">
        <EmptyHeader headerTag={recipeDetails.recipeName} />
        <div className="sep-line"></div>
        <div className="author-back-feature">
          <Link to="/homepage">
            <IoArrowBackOutline className="back-arrow" />
          </Link>
          <div className="author-tag">
            <p className="author-text">{recipeDetails.recipeAuthor}</p>
          </div>
        </div>
        <Link
          to={`/newUpdate?recipe_details=${encodeURIComponent(
            JSON.stringify(recipeDetails)
          )}&isForked=true`}
        >
          {!isForked && (
            <div className="fork-tag">
              <BiFork className="fork-icon" />
              <p className="fork-text">Fork</p>
            </div>
          )}
        </Link>
        <RecipeDetailsDisplay recipeDetails={recipeDetails} />
      </div>
      <Footer />
    </>
  );
}
