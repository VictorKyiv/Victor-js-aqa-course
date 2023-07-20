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
  
    getCarouselRightControl() {
       return cy.get('.right.carousel-control');
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
       
    /* getHomeLink() {
       return cy.get('.nav.navbar-nav li:nth-child(1)');
    }
    */

    getHomeLink () {
      return cy.xpath('//ul/li[1]');
    }

    /* getProductsLink() {
       return cy.get('.nav.navbar-nav li:nth-child(2)');
    }
    */
    getProductsLink() {
      return cy.xpath('//ul/li[2]');
    } 

    /* getContactUsLink() {
       return cy.get('.nav.navbar-nav li:nth-child(3)');
    }
    */

    getContactUsLink() {
      return cy.xpath('//ul/li[3]');
    }

   /* getWhoAreWeTitle() {
       return cy.contains('Who Are We?');
    }
    */
    getWhoAreWeTitle() {
      cy.xpath('//p[. = "Who Are We?"]');
      }
    /*
    getTextBlockUnderWhoAreWe() {
       return cy.get('div.col-sm-8.col-lg-8.col-md-8 > div.thumbnail > div.caption > p:eq(0)');
    }
    */
    getTextBlockUnderWhoAreWe() {
      return cy.xpath('(//div[@class="caption"])[3]/p');
   }
    
    /*  
    getGreatServiceTitle() {
       return cy.contains('GREAT SERVICE!');
    }
    */
    getGreatServiceTitle() {
      return cy.xpath('//p[. = "GREAT SERVICE!"]');
      }

   getModalButton() {
       return cy.get('#button-find-out-more');
      }

   /* getStarsBelowGreatServiceTitle() {
       return cy.get('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > div.div-star:eq(0) > span.glyphicon.glyphicon-star');
    }
    */
    getStarsBelowGreatServiceTitle() {
      cy.xpath('(//div[@class="div-star"])[1]//span[@class="glyphicon glyphicon-star"]');
   }
   /*  
    getTextBlockUnderGreatServiceTitle() {
       return cy.get('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > p:eq(0)');
    }
    */

    getTextBlockUnderGreatServiceTitle() {
      return cy.xpath('(//div[@class="caption"])[2]/p');
   }
    /*    
    getTextTitleWhyChooseUs() {
       return cy.contains('Why Choose Us?');
    }
    */

    getTextTitleWhyChooseUs() {
      return cy.xpath('//p[. = "Why Choose Us?"]');
   }
    
   /*
      getTextBlockBelowWhyChooseUsTitle() {
       return cy.get('div.col-sm-8.col-lg-8.col-md-8 > div.thumbnail > div.caption > p:eq(1)');
    }
    */
    
    getTextBlockBelowWhyChooseUsTitle() {
      return cy.xpath('(//div[@class="caption"])[3]/p');
   }

   /*
    getExcellentCustomerServiceTitle() {
       return cy.contains('Excellent Customer Service!');
    }
    */
    getExcellentCustomerServiceTitle() {
      return cy.xpath('//p[. = "Excellent Customer Service!"]');
   }
   
   /*
    getStarsBelowExcellentCustomerServiceTitle() {
      return cy.get('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > div.div-star:eq(1) > span.glyphicon.glyphicon-star');
    }
    */
    getStarsBelowExcellentCustomerServiceTitle() {
      return cy.xpath('(//div[@class="div-star"])[2]//span[@class="glyphicon glyphicon-star"]');
    }  
    
    /*   
    getTextBlockBelowExcellentCustomerServiceTitle() {
       return cy.get('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > p:eq(1)');
    }  
    */
    
    getTextBlockBelowExcellentCustomerServiceTitle() {
      return cy.xpath('(//div[@class="caption"])[4]/p');
   }

    getCopyright() {
       return cy.get('.col-lg-12');
    }

    backgroundColorValidator(){
      return cy.get('body').should('have.css', 'background-color', 'rgb(29, 29, 29)');
    }

   getCarouselIndicator(number) {
         return cy.get(`.carousel-indicators li:nth-child(${number})`);
      }

    whoAreWeTitleValidator(){
      return cy.xpath('//p[. = "Who Are We?"]').should('have.text', 'Who Are We?');
    }

    checkModalPopupOpening(){
      cy.get('#button-find-out-more').click();
      cy.get('.modal-dialog.modal-md').should('be.visible');
    }

    checkStarsQuantityBelowGreatServiceTitle(){
      return cy
      .xpath('(//div[@class="div-star"])[1]//span[@class="glyphicon glyphicon-star"]')
      .should('have.length', 5);
    }

}
    
    export default HomePage;