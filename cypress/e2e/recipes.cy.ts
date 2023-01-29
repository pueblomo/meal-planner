const login = (): void => {
  cy.get("[data-cy=\"input-email\"]").type("peter@email.de");
  cy.get("[data-cy=\"input-password\"]").type("einlangespassword");
  cy.get("[data-cy=\"button-submit\"]").click();
};
describe("recipe page testing", () => {
  const preparationText =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \nsed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n\n aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \n\nerat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus\n\n\n est Lorem ipsum dolor sit amet.";

  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("http://localhost:3000");
  });

  it("should change form to register form", () => {
    cy.url().should("include", "login");

    cy.get("[data-cy=\"button-change-form\"]").click();
    cy.contains("Please register").should(
      "have.text",
      "Please register your account"
    );
  });

  it("should register new user and login with user", () => {
    cy.get("[data-cy=\"button-change-form\"]").click();
    login();

    cy.url().should("include", "recipes");
  });

  const createRecipe = (): void => {
    cy.get("[data-cy=\"link-recipes-add\"]").click();

    cy.get("[data-cy=\"input-name\"]").type("Test Recipe");
    cy.get("[data-cy=\"textarea-preparation\"]").type(preparationText);
    cy.get("[data-cy=\"input-picture\"]").selectFile("cypress/image/test.jpeg");

    cy.get("[data-cy=\"button-add\"]").click();
    cy.get("[data-cy=\"input-ingredient-0\"]").type("Watermelon");
    cy.get("[data-cy=\"input-amount-0\"]").type("2stck");
    cy.get("[data-cy=\"button-add\"]").click();
    cy.get("[data-cy=\"input-ingredient-1\"]").type("Rabbits");
    cy.get("[data-cy=\"input-amount-1\"]").type("200g");

    cy.get("[data-cy=\"button-submit\"]").click();

    cy.url().should("include", "recipes");
  };

  it("should create new recipe and redirect to recipes", () => {
    login();
    createRecipe();
    cy.contains("Test Recipe").should("be.visible").click();

    cy.get("[data-cy=\"p-name\"]").should("have.text", "Test Recipe");
  });

  it("should edit created recipe", () => {
    login();

    cy.contains("Test Recipe").click();
    cy.get("[data-cy=\"link-edit-recipe\"]").click();
    cy.get("[data-cy=\"input-name\"]").clear().type("Edited Recipe");
    cy.get("[data-cy=\"button-submit\"]").click();

    cy.url().should("include", "recipes");
    cy.contains("Edited Recipe").should("be.visible");
  });

  it("tab should be active and link to recipes", () => {
    login();

    cy.get("[data-cy=\"link-recipes\"]").click();

    cy.url().should("include", "recipes");
  });

  it("should search recipe", () => {
    login();

    createRecipe();
    cy.contains("Test Recipe").should("be.visible");
    cy.contains("Edited Recipe").should("be.visible");

    cy.get("[data-cy=\"input-searchbar\"]").type("Edit");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(20);

    cy.contains("Test Recipe").should("not.exist");
    cy.contains("Edited Recipe").should("be.visible");
  });
});

export {};
