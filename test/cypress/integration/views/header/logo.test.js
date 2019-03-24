/* eslint-disable @typescript-eslint/no-var-requires */
const { LOGO } = require('../../../../../src/data/views-schema/header');

const { baseUrl } = Cypress.config();

describe('Header', () => {
  before(() => {
    cy.visitRandomlySelectedPage();
  });

  it(`logo has correct ${LOGO.linkToLocation} link href.`, () => {
    cy.get('[data-test="logo"]').should('have.attr', 'href', LOGO.linkToLocation);
  });

  it(`logo has the correct ${LOGO.name} link name.`, () => {
    cy.get('[data-test="logo"]').contains(LOGO.name);
  });

  it(`opens ${LOGO.linkToLocation} link successfully.`, () => {
    cy.get('[data-test="logo"]').click();

    cy.url().should('eq', `${baseUrl}${LOGO.linkToLocation}`);
  });
});
