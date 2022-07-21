/// <reference types="Cypress" />

describe('My Second Test Suite',function()
{

    it('My FirstTest case',function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
        cy.wrap($el).find('button').click()
    }
})
//logo text correctly displayed
cy.get('.brand').should('have.text','GREENKART')
cy.get('.brand').then(function(logoelement)
{ 
cy.log(logoelement.text())

    })
//const logo=cy.get('.brand')
//cy.get('.brand').text()
    })
})
cy.get('.cart-icon > img').click()
