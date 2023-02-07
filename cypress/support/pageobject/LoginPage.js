class LoginPage{
    getUserNameField()  //User name field
    {
        return cy.get('input[name="loginName"]')
    }
    getPasswordField()
    {
        return cy.get('input[name="password"]')
    }
    getProviderField()
    {
        return cy.get('input[name="providerCode"]')
    }
    getSubmitButton()
    {
        return cy.get('input[name="submitButton"]')
    }
    getAgree(){
        cy.get('body').then(($body) => {
            if($body.find('input[name="_action_agree"]').length > 0){
                cy.get('input[name="_action_agree"]').click()
                cy.get('.modal-footer > .btn-primary').click()
                cy.getAgree()
            }
        })
    }

    login(username, password, providerCode) {
        this.getUserNameField().type(username, { delay: 0})
        this.getPasswordField().type(password)
        this.getProviderField().clear(providerCode)
        this.getProviderField().type(providerCode)
        this.getSubmitButton().click()
        //this.getAgree()
        this.getAgree()
        //cy.get('input[name="_action_agree"]').click()
      }
}export default LoginPage;