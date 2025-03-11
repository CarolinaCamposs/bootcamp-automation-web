/// <reference types="cypress" />


describe('Register', () => {
    const url = 'https://automationpratice.com.br/register'

    beforeEach(() => {

        cy.visit(url);

    });

    it('Cadastro com sucesso', () => {
    
        cy.get('#user').type('Carolina');
        cy.get('#email').type('carol@qazando.com');
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click();
        cy.get('#swal2-title').should('be.visible');
        cy.get('#swal2-title').should('have.text', 'Cadastro realizado!');

    });

    it('Nome vazio', () => {
        cy.get('#email').type('carol@qazando.com');
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido');
    });

    it('E-mail vazio', () => {
        cy.get('#user').type('Carol');
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente');
    });

     it('Senha vazia', () => {
        cy.get('#user').type('Carol');
        cy.get('#email').type('carol@qazando.com');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Nome, E-mail e senha vazios', () => {
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido');
    });

});