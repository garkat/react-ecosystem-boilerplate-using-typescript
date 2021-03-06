describe('"About us" Page', () => {
  before(() => {
    cy.visit('/about-us');
  });

  it('has the correct description.', () => {
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      'React ecosystem boilerplate'
    );
  });

  it('has the correct title.', () => {
    cy.title().should('equal', 'React ecosystem boilerplate');
  });
});
