var propertyPage  = require('./pages/properties.page.js');
var account = {}; 

describe('property list', function() {

	this.timeout(30000);

	it('should star and unstart the property', function() {
		propertyPage.img.waitForExist(5000);	
		propertyPage.img.click();
		browser.pause(1000);
		propertyPage.selectedAccount.waitForExist(5000);
		propertyPage.selectedAccount.click()	
		propertyPage.propertySeclectorAREC.waitForExist(5000);
		propertyPage.propertySeclectorAREC.click(); 
		browser.pause(1000);
		propertyPage.UnstarIconPropDetails.waitForExist(5000);
		expect(propertyPage.staredIconPropDetails.isExisting()).to.be.false;
		propertyPage.UnstarIconPropDetails.click();
		expect(propertyPage.staredIconPropDetails.isExisting()).to.be.true;
		propertyPage.staredIconPropDetails.click();
		propertyPage.backArrow.click(); 
	});

	it('should archive a property', function() {		
		propertyPage.propertySeclectorKent.waitForExist(5000);
		propertyPage.propertySeclectorKent.click();
		expect(propertyPage.propertySeclectorElizbeth.isExisting()).to.be.true;
	});

	it('should show archive properties', function() {
		expect(propertyPage.propertySeclectorElizbeth.isExisting()).to.be.false;	
		propertyPage.filterIcon.waitForExist(5000);	
		propertyPage.filterIcon.click();
		browser.pause(500);
		propertyPage.showArchive.waitForExist(5000);
		propertyPage.showArchive.click()	
		propertyPage.propertySeclectorElizbeth.waitForExist(5000);
		expect(propertyPage.propertySeclectorElizbeth.isExisting()).to.be.true;
	});

	it('should show sale only properties', function() {	
		browser.pause(1000);
		propertyPage.filterIcon.waitForExist(5000);	
		propertyPage.filterIcon.click();
		browser.pause(500);
		propertyPage.saleOnly.waitForExist(5000);
		propertyPage.saleOnly.click()	
		propertyPage.propertySeclectorAREC.waitForExist(5000);
		expect(propertyPage.propertySeclectorAREC.isExisting()).to.be.true;
		expect(propertyPage.propertySeclectorHorace.isExisting()).to.be.false;
	});

	it('should show rent only properties', function() {	
		browser.pause(1000);
		propertyPage.filterIcon.waitForExist(5000);	
		propertyPage.filterIcon.click();
		browser.pause(500);
		propertyPage.rentOnly.waitForExist(5000);
		propertyPage.rentOnly.click()	
		propertyPage.propertySeclectorHorace.waitForExist(5000);
		expect(propertyPage.propertySeclectorHorace.isExisting()).to.be.true;
		expect(propertyPage.propertySeclectorAREC.isExisting()).to.be.false;
	});


	it('should search for properties', function() {	
		browser.pause(1000);
		propertyPage.searchIcon.waitForExist(5000);	
		propertyPage.searchIcon.click();
		propertyPage.searchInput.waitForExist(5000);
		propertyPage.searchInput.setValue(propertyPage.propertySeclectorHorace.getText());	
		browser.pause(2000);
		expect(propertyPage.propertySeclectorHorace.isExisting()).to.be.true;
		expect(propertyPage.propertySeclectorElizbeth.isExisting()).to.be.false;
	});
});