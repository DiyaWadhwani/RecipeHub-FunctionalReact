import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { myFirebase } from "../models/FirebaseConfig";

const RecipeImageDisplay = ({ recipeName }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const downloadImage = async () => {
      try {
        console.log("Downloading image for recipe:", recipeName);
        const imageUrl = await myFirebase.downloadImage(recipeName);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error("Error downloading image:", error);
        throw error;
      }
    };

    downloadImage();
  }, []);

  console.log("Image URL:", imageUrl);

  return (
    <div>
      {imageUrl ? (
        <img className="recipe-image-display" src={imageUrl} alt="Downloaded" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

RecipeImageDisplay.propTypes = {
  recipeName: PropTypes.string,
};

export default RecipeImageDisplay;
