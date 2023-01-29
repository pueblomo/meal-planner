const login = (): void => {
  cy.get("[data-cy=\"input-email\"]").type("plannedMeal@email.de");
  cy.get("[data-cy=\"input-password\"]").type("einlangespassword");
  cy.get("[data-cy=\"button-submit\"]").click();
};

const preparationText =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \nsed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n\n aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \n\nerat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus\n\n\n est Lorem ipsum dolor sit amet.";


const createRecipe = (name: string): void => {
  cy.get("[data-cy=\"link-recipes-add\"]").click();

  cy.get("[data-cy=\"input-name\"]").type(name);
  cy.get("[data-cy=\"textarea-preparation\"]").type(preparationText);
  cy.get("[data-cy=\"input-picture\"]").selectFile("cypress/image/test.jpeg");

  cy.get("[data-cy=\"button-add\"]").click();
  cy.get("[data-cy=\"input-ingredient-0\"]").type("Watermelon");
  cy.get("[data-cy=\"input-amount-0\"]").type("2stck");
  cy.get("[data-cy=\"button-add\"]").click();
  cy.get("[data-cy=\"input-ingredient-1\"]").type("Rabbits");
  cy.get("[data-cy=\"input-amount-1\"]").type("200g");

  cy.get("[data-cy=\"button-submit\"]").click();
};

describe("planned meal page testing", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("http://localhost:3000");
  });


  it("should create user and add multiple recipes", () => {
    cy.get("[data-cy=\"button-change-form\"]").click();
    login();

    createRecipe("Recipe One");
    createRecipe("Recipe Two ");
    createRecipe("Recipe Three");
  });

  it("should load planned page", () => {
    login();

    cy.get("[data-cy=\"link-planner\"]").click();
    cy.url().should("include", "planner");
  });

  it("should add and remove recipes from planner", () => {
    login();

    cy.get("[data-cy=\"link-planner\"]").click();
    cy.get("[data-cy=\"accordion-Monday\"]").click();
    cy.get("[data-cy=\"button-Monday\"]").click();

    cy.contains("Recipe One").click();
    cy.contains("Recipe Two").click();
    cy.get("[data-cy=\"button-add\"]").click();

    cy.get("[data-cy=\"accordion-Monday\"]").click();
    cy.contains("Recipe One").should("exist");
    cy.contains("Recipe Two").should("exist");

    cy.get("[data-cy=\"button-Monday\"]").click();
    cy.contains("Recipe One").click();
    cy.get("[data-cy=\"button-add\"]").click();

    cy.get("[data-cy=\"accordion-Monday\"]").click();
    cy.contains("Recipe One").should("not.exist");
    cy.contains("Recipe Two").should("exist");

    cy.get("[data-cy=\"accordion-Tuesday\"]").click()
    cy.get("[data-cy=\"button-Tuesday\"]").click();

    cy.contains("Recipe Three").click();
    cy.get("[data-cy=\"button-add\"]").click();

    cy.get("[data-cy=\"accordion-Tuesday\"]").click()
    cy.get("[data-cy=\"accordion-Monday\"]").click();
    cy.contains("Recipe Two").should("exist");
    cy.contains("Recipe Three").should("exist");
  });
});

export default {};