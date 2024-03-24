import { getStorage, getDownloadURL, ref } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

  return me;
}

export const myFirebase = new MyFirebase();
