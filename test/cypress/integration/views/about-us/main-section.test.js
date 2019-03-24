describe('"About us" Page', () => {
  before(() => {
    cy.visit('/about-us');
  });

  it('has the correct page info text.', () => {
    cy.get('[data-test="main"]').contains('About us page');
  });
});
