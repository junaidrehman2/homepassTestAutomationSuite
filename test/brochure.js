 var brochure  = require('./pages/brochure.page.js');
 var propertyPage  = require('./pages/properties.page.js');
 var property = {}; 
 var propertyToTest = "548e62854be1d336770d7a83"; 

 describe('brochure', function() {

 	before(function() {
 		brochure.processOfis(propertyToTest); 
 		browser.url(browser.options.brochure)
 	});

 	it('should verify brochure info with backend', function() {
 		brochure.propertyStreetAddress.waitForExist(); 
 		expect(brochure.propertyStreetAddress.isExisting()).to.be.true;
 		expect(brochure.bedBathsCars.isExisting()).to.be.true;  
 		if(brochure.ofis.length > 0){
 			brochure.ofis.forEach(function (ofi) {
 				expect(browser.element(ofi).isExisting()).to.be.true;
 			})
 		}
 	});

    // it('', function() {

    // });

});