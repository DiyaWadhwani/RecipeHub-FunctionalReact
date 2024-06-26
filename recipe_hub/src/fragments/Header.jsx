import React from "react";
import recipehubLogo from "../assets/recipehub-logo.png";
import "../styling/Header.css";

export default function Header() {
  const handleInputClick = () => {
    alert("This feature has been disabled!");
  };
  return (
    <>
      <header>
        <div className="header container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-and-text">
            <a className="navbar-brand" href="#">
              <img src={recipehubLogo} alt="Logo" width="70" height="70" />
            </a>
            <h1 className="app-name">RecipeHub</h1>
          </div>

          <form className="search-form d-flex">
            <input
              className="search-input form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onClick={handleInputClick}
              disabled
            />
            <button
              className="search-button btn btn-outline-success"
              type="submit"
              onMouseDown={handleInputClick}
            >
              Search
            </button>
          </form>
        </div>
      </header>
    </>
  );
}
