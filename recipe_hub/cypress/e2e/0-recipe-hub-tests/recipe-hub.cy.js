/* global cy */
/// <reference types="cypress" />

describe("Test 1: Login Form", () => {
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

  it("Logs out the user", () => {
    cy.visit("https://recipehub-functional.web.app/homepage");
    cy.get(".edit-profile").click();
    cy.contains("Login");
  });
});

describe("Test 2: Navigation through NavBar", () => {
  //test2: User is able to navigate through the pages
  it("Overview", () => {
    cy.visit("https://recipehub-functional.web.app/underConstruction");
    cy.get("h1").contains("This page is under construction");
  });

  it("All Recipes", () => {
    cy.visit("https://recipehub-functional.web.app/recipelist");
    cy.get(".back-arrow").click();
    cy.url().should("include", "/homepage");

    cy.visit("https://recipehub-functional.web.app/recipelist");
    cy.get(".recipe-list").should("contain", "No recipes found.");
    cy.get(".recipe-list").should("not.contain", "Loading...");
  });

  it("My Recipes", () => {
    cy.visit("https://recipehub-functional.web.app/myList");
    cy.get(".recipe-list").should("contain", "No recipes found.");
    cy.get(".recipe-list").should("not.contain", "Loading...");
  });

  it("My Forked Recipes", () => {
    cy.visit("https://recipehub-functional.web.app/myForkedList");
    cy.get(".recipe-list").should("contain", "No recipes found.");
    cy.get(".recipe-list").should("not.contain", "Loading...");
  });
});

describe("Test 3: Create a new recipe", () => {
  //test3: User is able to create a recipe
  it("Creates a recipe", () => {
    cy.visit("https://recipehub-functional.web.app/newUpdate");
    cy.get("input[name='recipeName']").type("Test Recipe");
    cy.get("input[name='ingredientName']").type("Test Ingredient");
    cy.get("input[name='ingredientQuantity']").type("Test Quantity");
    cy.get("textarea[name='instruction']").type("Test Instruction 1");
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

describe("Test 4: Display Recipe Details", () => {
  //test4: User is able to view the recipe details
  it("Views recipe details", () => {
    cy.visit("https://recipehub-functional.web.app/recipeList");
    // cy.get(".recipe-list li").first().click();
    cy.visit(
      "https://recipehub-functional.web.app/recipe?recipe_name=Test%20Recipe&isForked=false"
    );
    cy.get("h1").contains("Test Recipe");
    cy.get(".ingredients-section").contains("Test Ingredient");
    cy.get(".ingredients-section").contains("Test Quantity");
    cy.get(".instructions-section").contains("Test Instruction 1");
    cy.get(".author-tag").contains("Test Author");
    cy.get(".back-arrow").click();
  });
});

describe("Test 5: Fork Recipe", () => {
  // Test 5: User is able to fork a recipe
  it("Redirects to form with prefilled recipe data", () => {
    cy.visit(
      "https://recipehub-functional.web.app/recipe?recipe_name=Test%20Recipe&isForked=false"
    );
    cy.get(".fork-tag").click();
    cy.visit(
      "https://recipehub-functional.web.app/newUpdate?recipe_details=%7B%22recipeName%22%3A%22Test%20Recipe%22%2C%22recipeAuthor%22%3A%22Test%20Author%22%2C%22recipeInstructions%22%3A%5B%22Test%20Instruction%201%22%5D%2C%22recipeIngredients%22%3A%5B%7B%22ingredientName%22%3A%22Test%20Ingredient%22%2C%22ingredientQuantity%22%3A%22Test%20Quantity%22%7D%5D%7D&isForked=true"
    );
    cy.get("input[name='recipeName']").should("have.value", "Test Recipe");
    cy.get("input[name='ingredientName']").should(
      "have.value",
      "Test Ingredient"
    );
    cy.get("input[name='ingredientQuantity']").should(
      "have.value",
      "Test Quantity"
    );
    cy.get("textarea[name='instruction']").should(
      "have.value",
      "Test Instruction 1"
    );
    cy.get("input[name='authorName']").should("have.value", "Test Author");
  });

  it("Update an instruction in the existing recipe", () => {
    cy.visit(
      "https://recipehub-functional.web.app/newUpdate?recipe_details=%7B%22recipeName%22%3A%22Test%20Recipe%22%2C%22recipeAuthor%22%3A%22Test%20Author%22%2C%22recipeInstructions%22%3A%5B%22Test%20Instruction%201%22%5D%2C%22recipeIngredients%22%3A%5B%7B%22ingredientName%22%3A%22Test%20Ingredient%22%2C%22ingredientQuantity%22%3A%22Test%20Quantity%22%7D%5D%7D&isForked=true"
    );
    cy.get("textarea[name='instruction']").clear();
    cy.get("textarea[name='instruction']").type("Test Instruction updated");

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

  it("Views the updated recipe details", () => {
    cy.visit("https://recipehub-functional.web.app/myForkedList");
    cy.get(".recipe-list").contains("Test Recipe");
    cy.visit(
      "https://recipehub-functional.web.app/recipe?recipe_name=Test%20Recipe&isForked=true"
    );

    cy.get(".instructions-section").contains("Test Instruction updated");
  });
});
