describe('"Contact us" Page', () => {
  before(() => {
    cy.visit('/contact-us');
  });

  it('has the correct page info text.', () => {
    cy.get('[data-test="main"]').contains('Contact us page');
  });
});
