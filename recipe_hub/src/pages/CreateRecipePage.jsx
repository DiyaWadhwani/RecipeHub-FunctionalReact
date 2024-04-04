import React, { useState, useEffect } from "react";
import EmptyHeader from "../fragments/EmptyHeader";
import "../styling/CreateRecipePage.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { myFirebase } from "../models/FirebaseConfig";

export default function CreateRecipePage() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([
    { ingredientName: "", ingredientQuantity: "" },
  ]);
  const [instructions, setInstructions] = useState([""]);
  const [authorName, setAuthorName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isForked, setIsForked] = useState(false);

  useEffect(() => {
    // Check if query parameters exist
    const urlParams = new URLSearchParams(window.location.search);
    const recipeDetailsParam = urlParams.get("recipe_details");
    setIsForked(urlParams.get("isForked") === "true");

    if (recipeDetailsParam) {
      try {
        // Check if recipeDetailsParam is already an object
        const recipeDetails =
          typeof recipeDetailsParam === "string"
            ? JSON.parse(decodeURIComponent(recipeDetailsParam))
            : recipeDetailsParam;
        setRecipeName(recipeDetails.recipeName);
        setIngredients(recipeDetails.recipeIngredients);
        setAuthorName(recipeDetails.recipeAuthor);
        setInstructions(recipeDetails.recipeInstructions);
        setImageFile(recipeDetails.recipeName + ".png");
      } catch (error) {
        console.error("Error parsing recipeDetailsParam:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "recipeName":
        setRecipeName(value);
        break;
      case "authorName":
        setAuthorName(value);
        break;
      default:
        break;
    }
  };

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target;
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][name] = value;
    setIngredients(updatedIngredients);
  };

  const handleInstructionChange = (e, index) => {
    const { value } = e.target;
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = value;
    setInstructions(updatedInstructions);
  };

  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      { ingredientName: "", ingredientQuantity: "" },
    ]);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const onCreate = (event) => {
    event.preventDefault();

    // Create instances of RecipeDetails and Ingredient based on user input
    const recipeDetails = {
      recipeName,
      recipeAuthor: authorName,
      recipeInstructions: instructions,
      recipeImageURL: imageFile,
      recipeIngredients: ingredients,
      isForked: isForked, // Assuming isForked is already part of your state
    };

    // Log the instances to the console
    console.log("RecipeDetails instance:", recipeDetails);

    // Send data to firebase
    if (isForked) {
      // Assuming isForked is part of your state
      myFirebase.addForkedRecipeToUser(recipeDetails);
    } else {
      const response = myFirebase.addRecipeToFirestore(recipeDetails);
      console.log("Response from adding to the db -- ", response);
    }

    // Clear form inputs
    setRecipeName("");
    setIngredients([{ ingredientName: "", ingredientQuantity: "" }]);
    setInstructions([""]);
    setAuthorName("");
    setImageFile(null);

    alert("Thank you for sharing your recipe to RecipeHub!");
  };

  return (
    <>
      <EmptyHeader headerTag="RecipeHub" />
      <Link to="/recipeList">
        <IoArrowBackOutline className="back-arrow" />
      </Link>
      <div className="form-styling">
        <form onSubmit={onCreate} className="container mt-4">
          <div className="mb-3">
            <label className="form-label">Recipe Name(required) :</label>
            <input
              type="text"
              className="form-control"
              name="recipeName"
              value={recipeName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Ingredients(required) :</label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="ingredientName"
                  placeholder="Ingredient Name"
                  value={ingredient.ingredientName}
                  onChange={(e) => handleIngredientChange(e, index)}
                  required
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  name="ingredientQuantity"
                  placeholder="Ingredient Quantity"
                  value={ingredient.ingredientQuantity}
                  onChange={(e) => handleIngredientChange(e, index)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label">Instructions(required) :</label>
            {instructions.map((instruction, index) => (
              <div key={index} className="mb-2">
                <textarea
                  className="form-control"
                  name="instruction"
                  placeholder={`Step ${index + 1}`}
                  value={instruction}
                  onChange={(e) => handleInstructionChange(e, index)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAddInstruction}
            >
              Add Instruction
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label">Author Name(required) :</label>
            <input
              type="text"
              className="form-control"
              name="authorName"
              value={authorName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image(optional) :</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" className="btn btn-primary custom-btn">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
