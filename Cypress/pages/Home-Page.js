class HomePage {
    openHomePage(){
       cy.visit('https://webdriveruniversity.com/Page-Object-Model/index.html');
    }

    getNavbarButton() {
       return cy.get('.navbar-toggle');
    }

    getNavBarTitle(){
       return cy.get('#nav-title');
    }

    getCarouselLeftControl() {
       return cy.get('.left.carousel-control');
    }
  
    getLeftGlyphIcon(){
       return cy.get('.glyphicon.glyphicon-chevron-left');
    }
  
    getSlideImage1() {
       return cy.get('#slide-image-1');
    }
  
    getSlideImage2() {
       return cy.get('#slide-image-1:nth-child(1)');
    }
      
    getSlideImage3() {
       return cy.get('#slide-image-3');
    }
    
    getCarouselRightControl() {
       return cy.get('.right.carousel-control');
    }
    
    getCarouselIndicator(number) {
       return cy.get(`.carousel-indicators li:nth-child(${number})`);
    }
    
    getHomeLink() {
       return cy.get('.nav.navbar-nav li:nth-child(1)');
    }
    
    getProductsLink() {
       return cy.get('.nav.navbar-nav li:nth-child(2)');
    }
    
    getContactUsLink() {
       return cy.get('.nav.navbar-nav li:nth-child(3)');
    }
        
    getWhoAreWeTitle() {
       return cy.contains('Who Are We?');
    }
  
    getTextBlockUnderWhoAreWe() {
       return cy.get('div.col-sm-8.col-lg-8.col-md-8 > div.thumbnail > div.caption > p:eq(0)');
    }
    
    getModalButton() {
       return cy.get('#button-find-out-more');
    }
  
    getGreatServiceTitle() {
       return cy.contains('GREAT SERVICE!');
    }
  
    getStarsBelowGreatServiceTitle() {
       return cy.get('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > div.div-star:eq(0) > span.glyphicon.glyphicon-star');
    }
  
    getTextBlockUnderGreatServiceTitle() {
       return cy.get('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > p:eq(0)');
    }
        
    getTextTitleWhyChooseUs() {
       return cy.contains('Why Choose Us?');
    }
    
    getTextBlockBelowWhyChooseUsTitle() {
       return cy.get('div.col-sm-8.col-lg-8.col-md-8 > div.thumbnail > div.caption > p:eq(1)');
    }
    
    getExcellentCustomerServiceTitle() {
       return cy.contains('Excellent Customer Service!');
    }
    
    getStarsBelowExcellentCustomerServiceTitle() {
       return cy.get('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > div.div-star:eq(1) > span.glyphicon.glyphicon-star');
    }
    
    getTextBlockBelowExcellentCustomerServiceTitle() {
       return cy.get('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > p:eq(1)');
    }
  
    getCopyright() {
       return cy.get('.col-lg-12');
    }
}
    
    export default HomePage;
