class PersonalDetails{
    getSaveOrUpdateButton()
    {
        return cy.get('input[name="_action_save_or_update"]')
    }
}export default PersonalDetails;