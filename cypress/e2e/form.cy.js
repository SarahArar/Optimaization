describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // As I can not find the form file I have imagined have this
  //   <input id="inputField" type="text" />
  // <button id="submit">Submit</button>
  // <div id="errorMessage" style="display: none; color: red;">Input is required</div>

  it('Should accept input and not show error (happy path)', () => {
    const value = 'Test input value';

    cy.get('#inputField').type(value).should('have.value', value);

    cy.get('#submit').click();

    cy.get('#errorMessage').should('not.exist');
  });

  it('should show error when input is empty (unhappy path)', () => {
    cy.get('#inputField').clear();

    cy.get('#submit').click();

    cy.get('#errorMessage').should('exist').and('contain', 'Input is required');
  });
});
