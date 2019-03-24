describe('"About us" Page', () => {
  before(() => {
    cy.visit('/about-us');
  });

  it('successfully loads.', () => {});

  it('is rendered as text/html.', () => {
    cy.document()
      .its('contentType')
      .should('eq', 'text/html');
  });
});
