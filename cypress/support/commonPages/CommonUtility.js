import CommonPage from '../../support/pageObject/IndividualIntake'
import IndividualIntake from '../../support/pageObject/IndividualIntake'

const commonPage= new CommonPage()
const individualintake = new IndividualIntake()


//Calender

Cypress.Commands.add("calendar", (year, month, day) => 
{
    individualintake.getCalenderStart().click()
    cy.wait(1000)
    individualintake.getCalenderYearView().contains(year).click()
  
    individualintake.getYearMonthDate().contains(month).click()
    
    individualintake.getCalenderDateView().contains(day).click()
    
})