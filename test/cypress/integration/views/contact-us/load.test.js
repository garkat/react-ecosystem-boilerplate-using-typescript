describe('"Contact us" Page', () => {
  before(() => {
    cy.visit('/contact-us');
  });

  it('successfully loads.', () => {});

  it('is rendered as text/html', () => {
    cy.document()
      .its('contentType')
      .should('eq', 'text/html');
  });
});
