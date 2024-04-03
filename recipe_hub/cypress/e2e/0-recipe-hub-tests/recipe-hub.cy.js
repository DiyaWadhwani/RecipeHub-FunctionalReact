/* global cy */
/// <reference types="cypress" />

describe("Login Form", () => {
  //Executes before each test
  beforeEach(() => {
    cy.visit("https://recipehub-functional.web.app/");
  });

  //test1: Login form is displayed, user is logged in, homepage is displayed on correct credentials, error message is displayed on incorrect credentials
  it("Submits the login form with valid credentials", () => {
    cy.get("input[type='email']").type("diya@gmail.com");
    cy.get("input[type='password']").type("diya@2024");
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/homepage");
    cy.contains("RecipeHub");
  });

  it("Displays an error message with invalid credentials", () => {
    cy.get("input[type='email']").type("test@example.com");
    cy.get("input[type='password']").type("password");
    cy.get("button[type='submit']").click();
    cy.contains("Invalid email or password");
  });
});

describe("Navigation", () => {
  //test2: User is able to navigate through the pages
  it("Navigates through homepage", () => {
    cy.visit("https://recipehub-functional.web.app/underConstruction");
    cy.get("h1").contains("This page is under construction");

    cy.visit("https://recipehub-functional.web.app/recipelist");
    cy.get(".back-arrow").click();
    cy.url().should("include", "/homepage");

    cy.visit("https://recipehub-functional.web.app/recipelist");
    cy.get(".recipe-list").should("contain", "No recipes found.");
    cy.get(".recipe-list").should("not.contain", "Loading...");

    cy.visit("https://recipehub-functional.web.app/myList");
    cy.get(".recipe-list").should("contain", "No recipes found.");
    cy.get(".recipe-list").should("not.contain", "Loading...");

    cy.visit("https://recipehub-functional.web.app/myForkedList");
    cy.get(".recipe-list").should("contain", "No recipes found.");
    cy.get(".recipe-list").should("not.contain", "Loading...");
  });
});

describe("Create Recipe", () => {
  //test3: User is able to create a recipe
  it("Creates a recipe", () => {
    cy.visit("https://recipehub-functional.web.app/newUpdate");
    cy.get("input[name='recipeName']").type("Test Recipe");
    cy.get("input[name='ingredientName']").type("Test Ingredient");
    cy.get("input[name='quantity']").type("Test Quantity");
    cy.get("textarea[name='instruction']").type("Test Instructions");
    cy.get("input[name='authorName']").type("Test Author");
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub");
    });

    cy.get("button[type='submit']").click();

    // Wait for the alert and assert its message
    cy.get("@alertStub").should(
      "be.calledWith",
      "Thank you for sharing your recipe to RecipeHub!"
    );
  });
});
