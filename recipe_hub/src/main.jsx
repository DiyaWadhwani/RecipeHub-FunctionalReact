import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RecipeDetailsPage from "./pages/RecipeDetailsPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import RecipeListPage from "./pages/RecipeListPage.jsx";
import UnderConstructionPage from "./pages/UnderConstructionPage.jsx";
import CreateRecipePage from "./pages/CreateRecipePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/myList",
    element: <RecipeListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/myForkedList",
    element: <RecipeListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/newUpdate",
    element: <CreateRecipePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/underConstruction",
    element: <UnderConstructionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/recipeList",
    element: <RecipeListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/recipe",
    element: <RecipeDetailsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/homepage",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
