import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytes,
  StorageError,
} from "@firebase/storage";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import placeholderImage from "../assets/placeholder-image.png";

export default function MyFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCPhEcbkiySYg38JEVK-nUmzNJ08hdzfz0",
    authDomain: "recipehub-2822d.firebaseapp.com",
    projectId: "recipehub-2822d",
    storageBucket: "recipehub-2822d.appspot.com",
    messagingSenderId: "397137383460",
    appId: "1:397137383460:web:ec732284465758e4e308b1",
    measurementId: "G-RB0QG4M7EZ",
  };

  const app = initializeApp(firebaseConfig);
  const myDatabase = getFirestore(app);
  const myStorage = getStorage(app);

  const me = {};

  me.fetchRecipeList = async () => {
    const recipes = [];
    const querySnapshot = await getDocs(collection(myDatabase, "recipes"));
    querySnapshot.forEach((doc) => {
      const recipe = { name: doc.id, ...doc.data() };
      recipes.push(recipe);
    });
    return recipes;
  };

  me.fetchRecipeImages = async (recipes) => {
    const recipeImageURLs = [];
    for (const recipe of recipes) {
      try {
        console.log(`Fetching image for ${recipe.name}`);
        const imageRef = ref(myStorage, `/images/${recipe.name}.png`);
        const imageUrl = await getDownloadURL(imageRef);
        console.log(`Fetched image for ${recipe.name}:`, imageUrl);
        recipeImageURLs.push({ recipeName: recipe.name, imageUrl });
      } catch (error) {
        console.error(`Error fetching image for ${recipe.name}:`, error);
        recipeImageURLs.push({
          recipeName: recipe.name,
          imageUrl: placeholderImage,
        });
      }
    }
    return recipeImageURLs;
  };

  me.fetchRecipeNames = async () => {
    try {
      if (!myDatabase) {
        console.error("Database not initialized!");
        return;
      }
      const recipesCollection = await getDocs(
        collection(myDatabase, "recipes")
      );

      const recipeList = [];

      for (let doc of recipesCollection.docs) {
        recipeList.push(doc.id);
      }
      return recipeList;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  };

  me.fetchUserSpecificRecipeNames = async (fieldValue) => {
    try {
      const userCollectionRef = collection(myDatabase, "users");
      const userCollectionSnap = await getDocs(userCollectionRef);

      if (!userCollectionSnap.empty) {
        const firstUserDoc = userCollectionSnap.docs[0];
        const userDocRef = doc(myDatabase, "users", firstUserDoc.id);

        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userDocData = userDocSnap.data();
          console.log("userDocData -- ", userDocData);

          const currentRecipeNameList = userDocData[fieldValue] || [];

          console.log("Fetched current recipes", currentRecipeNameList);
          return currentRecipeNameList;
        } else {
          console.log("User document does not exist.");
        }
      }
    } catch (error) {
      console.error("Error updating createdRecipes array:", error);
    }
  };

  me.fetchRecipeDetails = async (recipeName) => {
    try {
      const recipeDocRef = doc(myDatabase, "recipes", recipeName);
      const recipeDocSnap = await getDoc(recipeDocRef);

      if (recipeDocSnap.exists()) {
        const recipeDocumentData = recipeDocSnap.data();

        // Fetch ingredients
        const ingredientsRef = collection(
          myDatabase,
          "recipes",
          recipeName,
          "ingredients"
        );
        const ingredientsSnap = await getDocs(ingredientsRef);

        // Map ingredients data
        const ingredientList = [];

        ingredientsSnap.docs.forEach((doc) => {
          const data = doc.data();
          const ingredient = {
            ingredientName: doc.id,
            ingredientQuantity: data.qty,
          };
          ingredientList.push(ingredient);
        });

        const fetchedRecipeDetails = {
          recipeName: recipeName,
          recipeAuthor: recipeDocumentData.author,
          recipeInstructions: recipeDocumentData.instructions,
          recipeIngredients: ingredientList,
        };
        return fetchedRecipeDetails;

        // Return the fetched recipe details directly
      } else {
        console.log("Recipe not found -- js file");
        return null;
      }
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      return null;
    }
  };

  me.fetchForkedRecipe = async (recipeName) => {
    try {
      const userCollectionRef = collection(myDatabase, "users");
      const userCollectionSnap = await getDocs(userCollectionRef);

      if (!userCollectionSnap.empty) {
        const firstUserDoc = userCollectionSnap.docs[0];
        const userDocRef = doc(myDatabase, "users", firstUserDoc.id);

        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          console.log("userdocsnap exists", userDocSnap);
          const forkedRecipesCollectionRef = collection(
            userDocRef,
            "forkedRecipes"
          );
          const forkedRecipeDocRef = doc(
            forkedRecipesCollectionRef,
            recipeName
          );
          const forkedRecipeDocSnap = await getDoc(forkedRecipeDocRef);

          if (forkedRecipeDocSnap.exists()) {
            // Fetch ingredients for the forked recipe
            const ingredientsRef = collection(
              forkedRecipesCollectionRef,
              recipeName,
              "ingredients"
            );
            const ingredientsSnap = await getDocs(ingredientsRef);

            // Map ingredients data
            const ingredientList = [];

            ingredientsSnap.docs.forEach((doc) => {
              const data = doc.data();
              ingredientList.push(doc.id, data.qty);
            });

            const fetchedRecipeDetails = {
              recipeName: recipeName,
              recipeAuthor: forkedRecipeDocSnap.data().author,
              recipeInstructions: forkedRecipeDocSnap.data().instructions,
              recipeIngredients: ingredientList,
            };

            return fetchedRecipeDetails;
          } else {
            console.log("userdocSnap does not exist");
          }
        }
      }
    } catch (error) {
      console.log("Error in fetchForkedRecipe: ", error);
    }
  };

  me.downloadImage = async (recipeName) => {
    try {
      console.log("trying to download image", recipeName);
      const imageRef = ref(myStorage, `/images/${recipeName}.png`);
      console.log("printing URL - ", imageRef);
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  me.addRecipeToFirestore = async (recipeDetails) => {
    try {
      console.log("Adding recipe to firestore now !!");

      // Step 1: Upload image to Firebase Storage
      console.log("step 1 - uploading");
      const imageFile = recipeDetails.recipeImageURL;
      const storageRef = ref(
        this.storage,
        `/images/${recipeDetails.recipeName}.png`
      );
      await uploadBytes(storageRef, imageFile);
      // const uploadedImageURL = await getDownloadURL(storageRef);
      console.log("step 1 completed");

      // Step 2: Add or update the recipe document with the image URL
      console.log("step 2 -- update doc with image url");
      const recipeRef = doc(myDatabase, "recipes", recipeDetails.recipeName);
      await setDoc(recipeRef, {
        author: recipeDetails.recipeAuthor,
        instructions: recipeDetails.recipeInstructions,
        // imageUrl: uploadedImageURL,
      });
      console.log("step 2 completed");

      //Step 3: Add or update ingredient documents
      console.log("Step 3 - adding ingrds");
      for (const ingredient of recipeDetails.recipeIngredients) {
        const ingredientRef = doc(
          myDatabase,
          "recipes",
          recipeDetails.recipeName,
          "ingredients",
          ingredient.ingredientName
        );

        // Set the qty field in the ingredient document
        await setDoc(ingredientRef, {
          qty: ingredient.quantity,
        });
      }
      console.log("step 3 completed");

      //Step 4: Add it to users createdRecipes
      console.log("Step 4 - update user contributions");
      this.addNewRecipeNameToUser(recipeDetails.recipeName);

      console.log("Recipe added successfully!");
    } catch (error) {
      console.error("Error adding recipe to Firestore:", error);
    }
  };

  me.addNewRecipeNameToUser = async (recipeName) => {
    try {
      const userCollectionRef = collection(myDatabase, "users");
      const userCollectionSnap = await getDocs(userCollectionRef);

      if (!userCollectionSnap.empty) {
        const firstUserDoc = userCollectionSnap.docs[0];
        const userDocRef = doc(myDatabase, "users", firstUserDoc.id);

        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userDocData = userDocSnap.data();

          const currentCreatedRecipes = userDocData.createdRecipes || [];

          // Add the new value to the array
          const updatedCreatedRecipes = [...currentCreatedRecipes, recipeName];

          // Update the document with the new 'createdRecipes' array
          await updateDoc(userDocRef, {
            createdRecipes: updatedCreatedRecipes,
          });

          console.log("Value added to createdRecipes array successfully.");
        } else {
          console.log("User document does not exist.");
        }
      }
    } catch (error) {
      console.error("Error updating createdRecipes array:", error);
    }
  };

  me.addForkedRecipeToUser = async (recipeDetails) => {
    try {
      console.log("Adding forked recipe name to user");

      const userCollectionRef = collection(myDatabase, "users");
      const userCollectionSnap = await getDocs(userCollectionRef);

      if (!userCollectionSnap.empty) {
        const firstUserDoc = userCollectionSnap.docs[0];
        const userDocRef = doc(myDatabase, "users", firstUserDoc.id);

        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          console.log("userdocsnap exists", userDocSnap);
          const forkedRecipesCollectionRef = collection(
            userDocRef,
            "forkedRecipes"
          );

          // Extract data from recipeDetails
          const {
            recipeName,
            recipeAuthor,
            recipeInstructions,
            recipeIngredients,
          } = recipeDetails;

          console.log("extracted data and building object");
          // Build the newRecipeData object
          const newRecipeData = {
            author: recipeAuthor,
            instructions: recipeInstructions,
          };

          // Use setDoc to add a new document to the forkedRecipes collection
          const newRecipeDocRef = doc(forkedRecipesCollectionRef, recipeName);
          await setDoc(newRecipeDocRef, newRecipeData);

          console.log(
            "New recipe added to forkedRecipes collection with ID:",
            newRecipeDocRef.id
          );

          // Create a new collection for ingredients
          const ingredientsCollectionRef = collection(
            newRecipeDocRef,
            "ingredients"
          );

          // Add each ingredient to the ingredients collection
          recipeIngredients.forEach(async (ingredient) => {
            const ingredientData = {
              qty: ingredient.quantity,
            };

            await setDoc(
              doc(ingredientsCollectionRef, ingredient.ingredientName),
              ingredientData
            );
          });

          console.log("New forked recipe added to collection forkedRecipes");
        } else {
          console.log("User document does not exist.");
        }
      }
    } catch (error) {
      console.error("Error updating createdRecipes array:", error);
    }
  };

  me.fetchUserForkedRecipeNames = async () => {
    try {
      if (!myDatabase) {
        console.error("Database not initialized!");
        return [];
      }

      const usersCollectionRef = collection(myDatabase, "users");
      const usersCollectionSnapshot = await getDocs(usersCollectionRef);

      if (!usersCollectionSnapshot.empty) {
        const firstUserDoc = usersCollectionSnapshot.docs[0];
        const forkedRecipesCollectionRef = collection(
          usersCollectionRef,
          firstUserDoc.id,
          "forkedRecipes"
        );

        const forkedRecipesSnapshot = await getDocs(forkedRecipesCollectionRef);

        if (!forkedRecipesSnapshot.empty) {
          const forkedRecipeNames = forkedRecipesSnapshot.docs.map(
            (doc) => doc.id
          );
          console.log("Forked Recipe Names:", forkedRecipeNames);
          return forkedRecipeNames;
        } else {
          console.log("Forked recipes collection is empty.");
          return [];
        }
      } else {
        console.log("Users collection is empty.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching forked recipes:", error);
      return [];
    }
  };

  me.fetchImagesForRecipes = async (recipes) => {
    const newRecipeList = [];
    for (const recipe of recipes) {
      try {
        const imageRef = ref(myStorage, `/images/${recipe.name}.png`);
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
    return newRecipeList; // Return newRecipeList after the loop completes
  };

  return me;
}

export const myFirebase = new MyFirebase();
