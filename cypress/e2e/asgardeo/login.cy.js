describe('Login to Asgardeo Console', () => {
    
    it('Validate whether Tenant admin user able to logion to Asgardeo Console', () => {
        cy.get('#username').type('admin');
        cy.contains('Continu').click();
        cy.get('#password').type('admin');
        cy.contains('Sign in').click();
    });
});