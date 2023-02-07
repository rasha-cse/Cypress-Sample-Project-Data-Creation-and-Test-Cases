/// <reference types="cypress" />
import LoginPage from '../../support/pageObject/LoginPage'
import CreateNewUserPage from '../../support/pageObject/System/CreateNewUserPage'
import SelectProgram from '../../support/commonPages/selectProgram'
import SelectIndividual from '../../support/commonPages/selectIndividual'
import TLogPage from '../../support/pageobject/TLogPage'
import PersonalDetails from '../../support/pageobject/System/PersonalDetails'

const loginPage = new LoginPage()
const tLogPage = new TLogPage()
const createNewUserPage = new CreateNewUserPage()
const selectProgram = new SelectProgram()
const selectIndividual = new SelectIndividual()
const personalDetails = new PersonalDetails()
const userCreationUrl = '/ma/admin2/userForm' 

describe.only('Verox User Creation Automation', () => {
  beforeEach(() => {           
    cy.task('readXlsx', { file: 'cypress/fixtures/System/UserCreation.xlsx', sheet: "Sheet1" }).then((rows) => {
      cy.writeFile("cypress/fixtures/System/xlsxUserCreation.json", {rows})
  })  
     cy.session('loginTestingUser', () => { 
     cy.login('rasha', '*******#', 'SQA-TH')
     }, { 
       cacheAcrossSpecs: true
     })
     cy.visit(userCreationUrl)
  })

  it('Test Case 00 : User Creation', function() {
    cy.fixture('xlsxUserCreation').then((data) => {
    createNewUserPage.fillup_form(data.rows[0].firstName, data.rows[0].lastName, data.rows[0].login, data.rows[0].password, data.rows[0].hireDate, data.rows[0].title)
    createNewUserPage.clickSave()
    personalDetails.getSaveOrUpdateButton().click()
    cy.contains(data.rows[0].message)
  }) 
  })

  it('Test Case 01 : Login Name Exists', function() {
    cy.fixture('xlsxUserCreation').then((data) => {
    createNewUserPage.fillup_form(data.rows[1].firstName, data.rows[1].lastName, data.rows[1].login, data.rows[1].password, data.rows[1].hireDate, data.rows[1].title)
    createNewUserPage.clickSave()
    cy.contains(data.rows[1].message).should('be.visible')
  })
})

  it('Test Case 02 : Login Name Required', function() {
    cy.fixture('xlsxUserCreation').then((data) => {
    createNewUserPage.fillup_form(data.rows[2].firstName, data.rows[2].lastName, data.rows[2].login, data.rows[2].password, data.rows[2].hireDate, data.rows[2].title)
    createNewUserPage.clickSave()
    cy.contains(data.rows[2].message)
  })
  })
  it('Test Case 03 : User Initials Exists', function() {
    cy.fixture('xlsxUserCreation').then((data) => {
    createNewUserPage.fillup_form(data.rows[3].firstName, data.rows[3].lastName, data.rows[3].login, data.rows[3].password, data.rows[3].hireDate, data.rows[3].title)
    cy.get('#userInitial').clear()
    createNewUserPage.giveExistingInitials()
    createNewUserPage.clickSave()
    cy.contains(data.rows[3].message)
  })
})
  it('Test Case 04 : User Initials Required', function() {
    cy.fixture('xlsxUserCreation').then((data) => {
    createNewUserPage.fillup_form(data.rows[4].firstName, data.rows[4].lastName, data.rows[4].login, data.rows[4].password, data.rows[4].hireDate, data.rows[4].title)
    cy.get('#userInitial').clear()
    createNewUserPage.clickSave()
    cy.contains(data.rows[4].message)
  })
})
  it('Test Case 05 : Hire Date Invalid', function() {
    cy.fixture('xlsxUserCreation').then((data) => {
    createNewUserPage.fillup_form(data.rows[5].firstName, data.rows[5].lastName, data.rows[5].login, data.rows[5].password, data.rows[5].hireDate, data.rows[5].title)
    createNewUserPage.clickSave()
    createNewUserPage.clickSave()
    cy.contains(data.rows[5].message)
  })
})

  /* ==== Test Created with Cypress Studio ==== */
  it('recorder', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#firstName').clear('n');
    cy.get('#firstName').type('n');
    cy.get('#lastName').clear('a');
    cy.get('#lastName').type('a');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#loginName').clear('rasha-test1');
    cy.get('#loginName').type('rasha-test1');
    cy.get('#password1').clear('gf');
    cy.get('#password1').type('gfyghrtfyrt');
    cy.get('#password2').clear('gft');
    cy.get('#password2').type('gftyrtyrtyrt');
    cy.get('#disablePasswordCheck1').check();
    cy.get('.col-sm-4 > .btn-group > .btn > .filter-option').click();
    cy.get('.col-sm-4 > .btn-group > .open > .dropdown-menu > [data-original-index="10"] > a > .text').click();
    cy.get('.input-group > .btn-group > .btn > .filter-option').click();
    cy.get('.input-group > .btn-group > .open > .dropdown-menu > [data-original-index="9"] > a').click();
    cy.get(':nth-child(5) > .panel-body > :nth-child(3)').click();
    cy.get('.col-sm-8 > .btn').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Taief Showing Recorder', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#firstName').clear('yhr');
    cy.get('#firstName').type('yhrdt');
    cy.get('#lastName').clear('rt');
    cy.get('#lastName').type('rtyrtyr');
    cy.get('#loginName').clear('rt');
    cy.get('#loginName').type('rtyrtyr');
    cy.get('.input-group > .btn-group > .btn > .filter-option').click();
    cy.get('.input-group > .btn-group > .open > .dropdown-menu > [data-original-index="7"] > a').click();
    cy.get('#employeeId').clear('rt');
    cy.get('#employeeId').type('rtyrtsy');
    /* ==== End Cypress Studio ==== */
  });
})

describe('TLog Automation ND', () => {
  beforeEach(() => {             //load all data befofe all Test Case 
    cy.fixture('TLog').then(function(nd){
        this.nd = nd
  })
     cy.visit('/')     
     loginPage.login('saad', 'therap321#', 'SQA-TH')
  })
 
  it('Test Case -01 : Tlog', function() {
    cy.visit('/ma/tlog/programList')
    selectProgram.searchByProgram(this.nd.programName)
    selectIndividual.searchByIndividual(this.nd.individualName)
    tLogPage.fillup_form(this.nd.testComment, this.nd.testComment, this.nd.timeIn, this.nd.timeOut, this.nd.reportDate)
  })

  it('Test Case -02 : User Creation', function() {
    cy.visit('/ma/tlog/search')    
  })

})
