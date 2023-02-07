class selectIndividual{
    getIndividualFilterField() 
    {
        return cy.get('#clientList_filter > .form-control') //clientList_filter
    }

    getFirstResult()
    {
        return cy.get('.sorting_1').click()
    }
    
    searchByIndividual(individualName) {
        this.getIndividualFilterField().type(individualName)
        this.getFirstResult()
      }
}export default selectIndividual;