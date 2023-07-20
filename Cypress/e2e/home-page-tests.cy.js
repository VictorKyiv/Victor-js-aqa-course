/// <reference types="Cypress" />

import HomePage from "../pages/Home-Page";

describe('Home Page tests', () => {

    const homePage = new HomePage();

    beforeEach(() => {
        homePage.openHomePage();
    });
    
    it('Validate the page background color', () => {
        homePage.backgroundColorValidator();
    })

    it('Validate that the correspondent image is shown after clicking on the carousel indicators', () => {
        homePage.getCarouselIndicator(1).click();
        homePage.getSlideImage1().should('be.visible');
        homePage.getCarouselIndicator(2).click();
        homePage.getSlideImage2().should('be.visible');
        homePage.getCarouselIndicator(3).click();
        homePage.getSlideImage3().should('be.visible');
    }) 

    it('Validate the presence of "Who Are We?" text', () => {
        homePage.whoAreWeTitleValidator();
    })

    it('Check if the modal window is opening after clicking "Find out More!" button', () => {
        homePage.checkModalPopupOpening();
    })

    it('Check if there are 5 stars below the "GREAT SERVICE!" title', () => {
        homePage.checkStarsQuantityBelowGreatServiceTitle();
    })

})