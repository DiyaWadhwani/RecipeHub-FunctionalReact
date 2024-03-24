// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import MyFirebaseDB from "../models/MyFirebaseDB";

// export default function RecipeImageDisplay() {

//   useEffect(() => {
//     downloadImage();
//   }, []);

//   return (
//     <div>
//       {imageUrl ? (
//         <img className="recipe-image-display" src={imageUrl} alt="Downloaded" />
//       ) : (
//         <p>Loading image...</p>
//       )}
//     </div>
//   );
// }

// export default class RecipeImageDisplay extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { imageUrl: null };
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.recipeName !== this.props.recipeName) {
//       this.downloadImage();
//     }
//   }

//   async downloadImage() {
//     const { recipeName } = this.props;
//     const myDatabase = new MyFirebaseDB();
//     try {
//       const imageUrl = await myDatabase.downloadImage(recipeName);
//       this.setState({ imageUrl });
//     } catch (error) {
//       console.error("Error downloading image:", error);
//       throw error;
//     }
//   }

// RecipeImageDisplay.propTypes = {
//   recipeName: PropTypes.string,
// };
