/// <reference types="Cypress" />

import OurProducts from "../pages/Our-Products";

const ourProducts = new OurProducts();

describe ('Our products page tests', () => {

beforeEach(() => {
    ourProducts.openOurProducts();
});

it('Check the navbar title text', () => {
    ourProducts.checkNavbarTitleText();
})

it('Validate that the "Home" link leads to index.html', () => {
    ourProducts.homeLinkValidate();
})

it('Check the modal window opening', () => {
    ourProducts.checkModalPopupVisibility();
})

it('Check if the modal window has buttons named "Proceed" and "Close"', () => {
    ourProducts.checkModalPopupButtonsAvailability();
})

it.only('Check if modal window closes after clicking on "x"', () => {
    ourProducts.checkModalPopupCloseButton();
})

})