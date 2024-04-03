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
