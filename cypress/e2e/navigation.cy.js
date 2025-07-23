describe('Navigation test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should visit Card set on click on Card Set', () => {
    cy.get("[data-cy='cardSetPage']").click();
    cy.contains('Study Set Library');
  });

  it('Should visit Home page on clicking home from sidemenu', () => {
    cy.get("[data-cy='aboutPage']").click();
    cy.contains('About Study Night');
  });

  it('Should visit About page on clicking about from sidemenu click', () => {
    cy.get("[data-cy='homePage']").click();
    cy.contains('Study Night');
  });
});
