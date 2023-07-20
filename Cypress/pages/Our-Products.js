class OurProducts {

    openOurProducts(){
        cy.visit('http://webdriveruniversity.com/Page-Object-Model/products.html');
    }

    getNavbarButton() {
        return cy.get('.navbar-toggle');
    }

    getNavBarTitle() {
        return cy.get('#nav-title');
    }

    checkNavbarTitleText() {
        return cy.get('#nav-title').should('have.text', 'WebDriver (New Approach To Learning)');
    }

    /* getHomeLink() {
        return cy.get('.nav.navbar-nav li:nth-child(1)');
    }
    */

    getHomeLink() {
        return cy.xpath('//a[text() = "Home"]');
    }
    
    homeLinkValidate() {
        return cy.xpath('//a[text() = "Home"]').should('have.attr', 'href', 'index.html');
    }

    /* 
    getProductsLink() {
        return cy.get('.nav.navbar-nav li:nth-child(2)');
    }
     */

    getProductsLink() {
        return cy.xpath('//a[text() = "Our Products"]');
    }

    /*
    getContactUsLink() {
        return cy.get('.nav.navbar-nav li:nth-child(3)');
    }
    */

    getContactUsLink() {
        return cy.xpath('//a[text() = "Contact Us"]');
    }

    /*
    getSpecialOffersTitle() {
        return cy.contains('Special Offers');
    }
    */

    getSpecialOffersTitle() {
        return cy.xpath('//p[.="Special Offers"]');
    }


    getSpecialOffersImage() {
        return cy.get('#amp-img');
    }

    getModalPopup(){
        return cy.get('.modal-dialog.modal-md');
    }

    checkModalPopupVisibility() {
        return cy.xpath('//p[.="Special Offers"]').click().then(() => {
          cy.get('.modal-dialog.modal-md').should('be.visible');
        });
    }

    checkModalPopupButtonsAvailability() {
        return cy.xpath('//p[.="Special Offers"]').click().then(() => {
    //cy.get('div.modal-footer > button.btn.btn-default:first-child').should('be.visible').should('have.text', 'Proceed');
    cy.xpath('(//button)[3]').should('be.visible').should('have.text', 'Proceed');
    //cy.get('div.modal-footer > button.btn.btn-default:last-child').should('be.visible').should('have.text', 'Close');
    cy.xpath('(//button)[4]').should('be.visible').should('have.text', 'Close');
    
        });
    }

    checkModalPopupCloseButton(){
        return cy.xpath('//p[.="Special Offers"]').click().then(() => {
        cy.get('.close').click();
        cy.get('.modal-dialog.modal-md').should('not.be.visible');
        });
    }

    /* getCamerasTitle() {
        return cy.contains('Cameras');
    }
    */

    getCamerasTitle() {
        return cy.xpath('//p[.="Cameras"]');
    }

    getCamerasImage() {
        return cy.get('#camera-img');
    }

    /* getNewLaptopsTitle() {
        return cy.contains('New Laptops');
    }
    */
    getNewLaptopsTitle() {
        return cy.xpath('//p[.="New Laptops"]');
    }

    getNewLaptopsImage() {
        return cy.get('#laptop1');
    }

    /* getUsedLaptopsTitle() {
        return cy.contains('Used Laptops');
    }
    */
    
    getUsedLaptopsTitle() {
        return cy.xpath('//p[.="Used Laptops"]');
    }

    getUsedLaptopsImage() {
        return cy.get('#laptop2');
    }

    /* getGameConsolesTitle() {
        return cy.contains('Game Consoles');
    }
    */

    getGameConsolesTitle() {
        return cy.xpath('//p[.="Game Consoles"]');
    }

    getGameConsolesImage() {
        return cy.get('#nintendo');
    }

    /* getComponentsTitle() {
        return cy.contains('Components');
    }
    */

    getComponentsTitle() {
        return cy.xpath('//p[.="Components"]');
    }

    getComponentsImage() {
        return cy.get('#graphic-card');
    }

    /* getDesktopSystemsTitle() {
        return cy.contains('Desktop Systems');
    }
    */

    getDesktopSystemsTitle() {
        return cy.xpath('//p[.="Desktop Systems"]'); 
    }

    getDesktopSystemsImage() {
        return cy.get('#computer');
    }

    /* getAudioTitle() {
        return cy.contains('Audio');
    }
    */
    getAudioTitle() {
        return cy.xpath('//p[.="Audio"]'); 
    }

    getDesktopSystemsImage() {
        return cy.get('#boombox');
    }

    getCopyright() {
        return cy.get('.col-lg-12');
    }

}

export default OurProducts;