class selectProgram{
    getProgramFilterField()
    {
        return cy.get('#programList_filter > .form-control')
    }

    getFirstResult()
    {
        return cy.get('.sorting_1').click()
    }
    
    searchByProgram(programName) {
        this.getProgramFilterField().type(programName)
        this.getFirstResult()
      }
}export default selectProgram;