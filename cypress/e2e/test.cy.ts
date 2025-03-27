describe('Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('have.text', 'HOME');
  });
});
