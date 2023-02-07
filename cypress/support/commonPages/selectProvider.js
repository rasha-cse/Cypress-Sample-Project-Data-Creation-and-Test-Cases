class selectProvider{
    getProviderFilterField() 
    {
        return cy.get('#providerTable_filter > .form-control') //clientList_filter
    }

    getFirstResult(providerName)
    {
        cy.get('#providerTable td:nth-child(2)').each(($e1) => {
            if ($e1.text() === (providerName)) {
              cy.wrap($e1).click()
              cy.get('.panel-body > a').click();
            }       
          })
    }
    
    searchByProvider(providerName) {
        this.getProviderFilterField().type(providerName)
        this.getFirstResult(providerName)
      }
}export default selectProvider;