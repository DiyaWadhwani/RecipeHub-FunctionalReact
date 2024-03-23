import React from "react";
import "../styling/Header.css";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center p-3">
      <div className="container">
        <span className="text-muted">
          &copy; 2024 RecipeHub. All rights reserved 🪔{" "}
        </span>
      </div>
    </footer>
  );
}
