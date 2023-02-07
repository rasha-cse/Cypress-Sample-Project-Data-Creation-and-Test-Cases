class ChangePwd{
    getCurrentPasswordField()  
    {
        return cy.get('#currentPassword')
    }
    getNewPasswordField()  
    {
        return cy.get('#password1')
    }
    getConfirmPasswordField()  
    {
        return cy.get('#password2')
    }
    getChangePwdButton()
    {
        return cy.get('input[name="_action_update"]')
    }
    confirmPassword(currentPassword, newPassword){
        this.getCurrentPasswordField().type(currentPassword)
        this.getNewPasswordField().type(newPassword)
        this.getConfirmPasswordField().type(newPassword)
        this.getChangePwdButton().click()
        //cy.get('.alert-info > .row > .col-sm-4 > .btn').click();
    }
}export default ChangePwd;