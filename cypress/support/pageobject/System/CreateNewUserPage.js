class CreateNewUserPage{
    getFirstNameField() 
    {
        return cy.get('input[name="firstName"]')
    }
    getLastNameField()  
    {
        return cy.get('input[name="lastName"]')
    }
    selectUserInitial()
    {
        cy.get('#user-initial-search > .glyphicon').click()
        cy.get('.modal-body > iframe').should('be.visible').within($iframe => {   //should('be.visible')
        const $body = $iframe.contents().find('body')
        cy.wrap($body).find('#pageContent > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
    })
    }
    giveExistingInitials()
    {
        cy.get('#userInitial').type('GTU')
    }
    getLoginField()  
    {
        return cy.get('input[name="loginName"]')
    }
    getPasswordField()  
    {
        return cy.get('#password1')
    }
    getConfirmPasswordField()  
    {
        return cy.get('#password2')
    }
    setTitle(title)  
    {
        cy.get('select[id="userTitle"]').then(($title) => 
        {
           if ($title.text().includes(title)) {
                cy.get('select[id="userTitle"]').select(title);
           } 
           else {
            cy.get('.row > #user-title > .input-group > #new-title-add > .glyphicon').click()
            cy.get('.modal-content').should('be.visible')      
            cy.get('.modal-body > iframe').wait(1000).within($iframe => { //should('be.visible')
             const $body = $iframe.contents().find('body')
             cy.wrap($body).find('input[id="title"]').type(title)
             cy.wrap($body).find('input[name="_action_save"]').click()
                })
           }
        })
    }
    getEmployeeIdField()  
    {
        return cy.get('#employeeId')
    }
    getHireDateField()  
    {
        return cy.get('#hireDate')
    }
    clickSave()
    {
        cy.get('input[name="save"]').click()
    }
    fillup_form(firstName, lastName, login, password, hireDate, title) {
        this.getFirstNameField().type(firstName)
        this.getLastNameField().type(lastName)
        this.getLoginField().type(login)
        this.selectUserInitial()
        //this.giveExistingInitials()
        this.getPasswordField().type(password)
        this.getConfirmPasswordField().type(password)
        this.setTitle(title)
        //this.getEmployeeIdField().type(employeeId)
        this.getHireDateField().type(hireDate)
        //this.clickSave()
      }

}export default CreateNewUserPage;