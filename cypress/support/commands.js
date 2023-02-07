// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('getAgree', () => {
    cy.get('body').then(($body) => {
        if($body.find('input[name="_action_agree"]').length > 0){
            cy.get('input[name="_action_agree"]').click()
            if($body.find('.modal-footer > .btn-primary').length > 0){
            cy.get('.modal-footer > .btn-primary').click()
            }
            cy.getAgree()
        }
    })
})

 Cypress.Commands.add('login', (username, password, providerCode) => {
    cy.visit('/auth/login')  
    cy.get('input[name="loginName"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('input[name="providerCode"]').clear(providerCode)
    cy.get('input[name="providerCode"]').type(providerCode)
    cy.get('input[name="submitButton"]').click() 
    cy.getAgree()
})

Cypress.Commands.add('logout', () => {
    cy.visit('/auth/logout')
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
    });


Cypress.Commands.overwrite('type', (originalFn, subject, text, options = {}) => {
    options.delay = 0
      
    return originalFn(subject, text, options)
})