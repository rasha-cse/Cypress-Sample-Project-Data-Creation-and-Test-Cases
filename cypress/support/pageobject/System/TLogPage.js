class TLogPage{
    getTypeList()  
    {
        return cy.get('#typeList3').click()
    }
    getSummaryField()  
    {
        return cy.get('#summary')
    }
    getDescriptionField()  
    {
        return cy.get('#description')
    }
    getTimeInField()  
    {
        return cy.get('#timeIn')
    }
    getTimeOutField() 
    {
        return cy.get('#timeOut')
    }
    getReportDateField()  
    {
        return cy.get('#reportDate')
    }
    clickSubmit()  
    {
        return cy.get('#viewPage > .alert-info > .row > .col-sm-8 > .btn').click()
    }
    fillup_form(summary, description, timeIn, timeOut, reportDate) {
        this.getTypeList()
        this.getSummaryField().type(summary)
        this.getDescriptionField().type(description)
        this.getTimeInField().type(timeIn)
        this.getTimeOutField().type(timeOut)
        this.getReportDateField().type(reportDate)
        this.clickSubmit()
      }
}export default TLogPage;