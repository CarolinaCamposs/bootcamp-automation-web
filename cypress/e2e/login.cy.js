/// <reference types="cypress" />

//funcionalidade
describe('Login', () => {

    //roda todos os cenários de forma responsiva
    // beforeEach(() => {
    //     cy.viewport('');
    // });

    //cenarios
    it('Login com sucesso', () => {
    // DADO 
    // abrir a aplicação
    cy.visit('https://automationpratice.com.br/login');
    // preenche email e senha
    cy.get('#user').type('edu@qazando.com');
    cy.get('#password').type('123456');

    // QUANDO
    //clica em entrar
    cy.get('#btnLogin').click();

    // ENTÃO
    //valida mensagem
    cy.get('#swal2-title').should('be.visible');
    cy.get('#swal2-title').should('have.text', 'Login realizado');
    cy.get('.swal2-confirm').should('have.text', 'OK');

 });

    it('E-mail inválido', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('qualquercoisa');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

     it('Senha invalida', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('carol@bootcamp.com');
        cy.get('#password').type('abc');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'Senha inválida.');
    });

    it('E-mail vazio', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#password').type('abc');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

    it('Senha Vazia', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('carol@bootcamp.com');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'Senha inválida.');
    });

    it('E-mail e senha vazios', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });


});


