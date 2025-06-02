/// <reference types="cypress" />
import LoginPage from '../../support/pageObject/LoginPage'
import CreateNewUserPage from '../../support/pageobject/System/CreateNewUserPage'
import CreateNewProviderPage from '../../support/pageobject/ProviderSetup/CreateNewProviderPage'
import SelectProvider from '../../support/commonPages/selectProvider'
import PersonalDetails from '../../support/pageobject/System/PersonalDetails'
import ChangePwd from '../../support/pageobject/System/ChangePwd'

let rowsLength0, rowsLength1, rowsLength2;
const loginPage = new LoginPage()
const createNewUserPage = new CreateNewUserPage()
const createNewProviderPage = new CreateNewProviderPage()
const selectProvider = new SelectProvider()
const personalDetails = new PersonalDetails()
const changePwd = new ChangePwd()

const providerCreationUrl = '/ma/admin2/provider' 
const SuperAdminCreationUrl = '/ma/admin2/providerList?forwardUrl=dataAdminList'

describe('Provider and Super Admin Creation Automation', () => {
  beforeEach(() => {           
    cy.task('readXlsx', { file: 'cypress/fixtures/ProviderSetup/ProviderSetup.xlsx', sheet: "ProviderCreation" }).then((rows) => {
      rowsLength0 = rows.length;
      cy.writeFile("cypress/fixtures/ProviderSetup/xlsxProviderCreation.json", {rows})
  })
  
  cy.task('readXlsx', { file: 'cypress/fixtures/ProviderSetup/ProviderSetup.xlsx', sheet: "SuperAdminCreation" }).then((rows1) => {
    rowsLength1 = rows1.length;
    cy.writeFile("cypress/fixtures/ProviderSetup/xlsxSuperAdminCreation.json", {rows1})
})
cy.session('loginTestingUser', () => { 
  cy.login('john', '********', 'CALGIRI-TEST')
  }, { 
    cacheAcrossSpecs: true
  })
  })

  after(() => {
    cy.logout()
  })

  it('Test Case 00 : Provider Creation', function() {
    cy.fixture('ProviderSetup/xlsxProviderCreation').then((data) => {
    for ( let i = 0; i < rowsLength0; i++) {
      cy.visit(providerCreationUrl)
      createNewProviderPage.fillup_form(data.rows[i].ProviderCode, data.rows[i].ProviderName, data.rows[i].street1, data.rows[i].street2, data.rows[i].city, data.rows[i].zip, data.rows[i].phone, data.rows[i].country, data.rows[i].ProviderState, data.rows[i].OperatingState, data.rows[i].TimeZone)
      createNewProviderPage.clickSave()
    }
  }) 
  })

  it('Test Case 01 : Super Admin Creation', function() {
    for ( let i = 0; i < rowsLength1; i++) {
    cy.fixture('ProviderSetup/xlsxSuperAdminCreation').then((data) => {
      cy.visit(SuperAdminCreationUrl)
      selectProvider.searchByProvider(data.rows1[i].providerCode)
      createNewUserPage.fillup_form(data.rows1[i].firstName, data.rows1[i].lastName, data.rows1[i].login, data.rows1[i].password, data.rows1[i].hireDate, data.rows1[i].title)
      createNewUserPage.clickSave()
      cy.contains(data.rows1[i].message).should('be.visible')
     })
    }
  })
})

describe('First Time Password Change', () => {
  beforeEach(() => {           
    cy.task('readXlsx', { file: 'cypress/fixtures/ProviderSetup/ProviderSetup.xlsx', sheet: "FirstPwdChange" }).then((rows) => {
      rowsLength2 = rows.length;
      cy.writeFile("cypress/fixtures/ProviderSetup/xlsxFirstPwdChange.json", {rows})
  })  
  })

  afterEach(() => {
    cy.logout()
  })

  it('Test Case 02 : First Time Password Change for all given users', function() {
    for ( let i = 0; i < rowsLength2; i++) {
      cy.fixture('ProviderSetup/xlsxFirstPwdChange').then((data) => {
        cy.visit('/')
        loginPage.login(data.rows[i].login, data.rows[i].currentPassword, data.rows[i].ProviderCode)
        changePwd.confirmPassword(data.rows[i].currentPassword, data.rows[i].confirmPassword)
        personalDetails.getSaveOrUpdateButton().click()
        cy.logout()
  })
}
});
})
