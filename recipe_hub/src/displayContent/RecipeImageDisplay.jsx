import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MyFirebaseDB from "../models/MyFirebaseDB";

const RecipeImageDisplay = ({ recipeName }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const downloadImage = async () => {
      const myDatabase = new MyFirebaseDB();
      try {
        const imageUrl = await myDatabase.downloadImage(recipeName);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error("Error downloading image:", error);
        throw error;
      }
    };

    downloadImage();
  }, [recipeName]);

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
