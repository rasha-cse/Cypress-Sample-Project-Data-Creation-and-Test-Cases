class CreateNewProviderPage{
    getProviderCodeField() 
    {
        return cy.get('#provider\\.code')
    }
    getProviderNameField()  
    {
        return cy.get('#provider\\.name')
    }
    getAddressStreet1Field()
    {
        return cy.get('#provider\\.address\\.street1')
    }
    getAddressStreet2Field()  
    {
        return cy.get('#provider\\.address\\.street2')
    }
    getCityField()  
    {
        return cy.get('#provider\\.address\\.city')
    }
    getZipField()  
    {
        return cy.get('#provider\\.address\\.zip')
    }
    setProviderState()  
    {
        return cy.get('#provider\\.address\\.state')//.select()
    }
    getCountryField()  
    {
        return cy.get('#provider\\.address\\.country')//.select()
    }
    setOperatingState()  
    {
        return cy.get('#provider\\.state')//.select()
    }
    getPhoneField()  
    {
        return cy.get('#provider\\.phone')
    }
    setTimeZone()  
    {
        return cy.get('#provider\\.tz')//.select()
    }
    setDemoNo()  
    {
        return cy.get('#provider\\.demo2')//.check()
    }
    
    setStatusActive()  {
        return cy.get('#provider\\.status2')//.check()
    }
    
    clickSave()
    {
        cy.get('input[name="saveButton"]').click()
        cy.get('.modal-footer > .btn-primary').click();
    }
    fillup_form(providerCode, providertName, street1, street2, city, zip, phone, country, providerState, operatingState, timeZone) {
        this.getProviderCodeField().type(providerCode)
        this.getProviderNameField().type(providertName)
        this.getAddressStreet1Field().type(street1)
        this.getAddressStreet2Field().type(street2)
        this.getCityField().type(city)
        this.getZipField().type(zip)
        this.getPhoneField().type(phone)
        this.getCountryField().select(country, {force: true})
        this.setDemoNo().check()
        this.setProviderState().select(providerState, {force: true})
        this.setOperatingState().select(operatingState, {force: true})
        this.setTimeZone().select(timeZone, {force: true})
        this.setStatusActive().check()
      }

}export default CreateNewProviderPage;