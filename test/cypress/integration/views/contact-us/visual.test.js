describe('"Contact us" Page', () => {
  // Run these tests as if a user is on 320px X 480px resolution screen.
  context('320px X 480px resolution', () => {
    beforeEach(() => {
      cy.viewport(320, 480);
      cy.visit('/contact-us');
    });

    it('takes screenshot at 320px X 480px resolution.', () => {
      cy.screenshot();
    });
  });

  // Run these tests as if a user is on 480px X 800px resolution screen.
  context('480px X 800px resolution', () => {
    beforeEach(() => {
      cy.viewport(480, 800);
      cy.visit('/contact-us');
    });

    it('takes screenshot at 480px X 800px resolution.', () => {
      cy.screenshot();
    });
  });

  // Run these tests as if a user is on 768px X 1024px resolution screen.
  context('768px X 1024px resolution', () => {
    beforeEach(() => {
      cy.viewport(768, 1024);
      cy.visit('/contact-us');
    });

    it('takes screenshot at 768px X 1024px resolution.', () => {
      cy.screenshot();
    });
  });

  // Run these tests as if a user is on 1280px X 1024px resolution screen.
  context('1280px X 1024px resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 1024);
      cy.visit('/contact-us');
    });

    it('takes screenshot at 1280px X 1024px resolution.', () => {
      cy.screenshot();
    });
  });

  // Run these tests as if a user is on 1920px X 1080px resolution screen.
  context('1920px X 1080px resolution', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit('/contact-us');
    });

    it('takes screenshot at 1920px X 1080px resolution.', () => {
      cy.screenshot();
    });
  });

  // Run these tests as if a user is on 2560px X 1440px resolution screen.
  context('2560px X 1440px resolution', () => {
    beforeEach(() => {
      cy.viewport(2560, 1440);
      cy.visit('/contact-us');
    });

    it('takes screenshot at 2560px X 1440px resolution.', () => {
      cy.screenshot();
    });
  });
});
