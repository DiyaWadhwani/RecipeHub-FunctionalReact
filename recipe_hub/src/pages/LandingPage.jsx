import React, { useEffect, useState } from "react";
import { myFirebase } from "../models/FirebaseConfig.js";
import "../styling/LandingPage.css";
import Header from "../fragments/Header";
import NavBar from "../fragments/NavBar";
import UserModuleDisplay from "../displayContent/UserModuleDisplay";
import LandingRecipesDisplay from "../displayContent/LandingRecipesDisplay";
import Footer from "../fragments/Footer";

export default function LandingPage() {
  const [recipeList, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipeList = async () => {
      const recipeList = await myFirebase.fetchRecipeList();
      setRecipes(recipeList);
    };
    fetchRecipeList();
  }, []);

  return (
    <>
      <Header />
      <NavBar />

      <div className="body">
        {/* separation between Navbar and page content */}
        <div className="sep-line"></div>

        <div className="d-flex flex-col mb-2">
          <UserModuleDisplay />
          <LandingRecipesDisplay recipeList={recipeList} />
        </div>
      </div>
      <Footer />
    </>
  );
}
