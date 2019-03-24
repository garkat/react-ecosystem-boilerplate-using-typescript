/* eslint-disable @typescript-eslint/no-var-requires */
const { FOOTER_LINKS } = require('../../../../../src/data/views-schema/footer');

const { baseUrl } = Cypress.config();

describe('Footer', () => {
  before(() => {
    cy.visitRandomlySelectedPage();
  });

  it(`has all navigation links defined in the footer schema.`, () => {
    cy.get('footer nav ul li').should('have.lengthOf', FOOTER_LINKS.length);
  });

  FOOTER_LINKS.forEach((footerLink) => {
    it(`has the correct ${footerLink.linkToLocation} link href.`, () => {
      cy.get(`[data-test=${footerLink.dataTest}]`).should(
        'have.attr',
        'href',
        footerLink.linkToLocation
      );
    });

    it(`has the correct "${footerLink.name}" link name.`, () => {
      cy.get(`[data-test=${footerLink.dataTest}]`).then((el) => {
        expect(el.text()).to.equal(footerLink.name);
      });
    });

    it(`opens ${footerLink.linkToLocation} link successfully.`, () => {
      cy.get(`[data-test=${footerLink.dataTest}]`).click();

      cy.url().should('eq', `${baseUrl}${footerLink.linkToLocation}`);
    });
  });
});
