var propertyPage  = require('./pages/properties.page.js');
var account = {}; 

describe('property list', function() {

	this.timeout(30000);

	it('should star and unstart the property', function() {
		propertyPage.img.waitForExist();	
		propertyPage.img.click();
		browser.pause(1000);
		propertyPage.selectedAccount.waitForExist();
		propertyPage.selectedAccount.click()	
		propertyPage.propertySeclectorAREC.waitForExist();
		propertyPage.propertySeclectorAREC.click(); 
		browser.pause(1000);
		propertyPage.UnstarIconPropDetails.waitForExist();
		expect(propertyPage.staredIconPropDetails.isExisting()).to.be.false;
		propertyPage.UnstarIconPropDetails.click();
		expect(propertyPage.staredIconPropDetails.isExisting()).to.be.true;
		propertyPage.staredIconPropDetails.click();
		propertyPage.backArrow.click(); 
	});

	it('should archive a property', function() {		
		propertyPage.propertySeclectorKent.waitForExist();
		propertyPage.propertySeclectorKent.click();
		propertyPage.propertyDetailsSettingsButton.waitForExist();
		propertyPage.propertyDetailsSettingsButton.click();
		browser.pause(500); 
		propertyPage.archivePropertyLink.click(); 
		browser.pause(500);
		propertyPage.propertyArchived.waitForExist();
		propertyPage.detailsTab.click();
		propertyPage.propertyId.waitForExist();  
		expect(propertyPage.propertyArchived.isExisting()).to.be.true;
		expect(propertyPage.getProperty(propertyPage.propertyId.getText()).archivedAt).to.not.be.undefined;
	});

		it('should unarchive a property', function() {		
		propertyPage.propertyDetailsSettingsButton.click();
		browser.pause(500); 
		propertyPage.unarchivePropertyLink.click(); 
		browser.pause(200); 
		expect(propertyPage.propertyArchived.isExisting()).to.be.false;
		expect(propertyPage.getProperty(propertyPage.propertyId.getText()).archivedAt).to.be.undefined;
		propertyPage.backArrow.click(); 
	});

	it('should show archive properties', function() {
		expect(propertyPage.propertySeclectorElizbeth.isExisting()).to.be.false;	
		propertyPage.filterIcon.waitForExist();	
		propertyPage.filterIcon.click();
		browser.pause(500);
		propertyPage.showArchive.waitForExist();
		propertyPage.showArchive.click()	
		propertyPage.propertySeclectorElizbeth.waitForExist();
		expect(propertyPage.propertySeclectorElizbeth.isExisting()).to.be.true;
	});

	it('should show sale only properties', function() {	
		browser.pause(1000);
		propertyPage.filterIcon.waitForExist();	
		propertyPage.filterIcon.click();
		browser.pause(500);
		propertyPage.saleOnly.waitForExist();
		propertyPage.saleOnly.click()	
		propertyPage.propertySeclectorAREC.waitForExist();
		expect(propertyPage.propertySeclectorAREC.isExisting()).to.be.true;
		expect(propertyPage.propertySeclectorHorace.isExisting()).to.be.false;
	});

	it('should show rent only properties', function() {	
		browser.pause(1000);
		propertyPage.filterIcon.waitForExist();	
		propertyPage.filterIcon.click();
		browser.pause(500);
		propertyPage.rentOnly.waitForExist();
		propertyPage.rentOnly.click()	
		propertyPage.propertySeclectorHorace.waitForExist();
		expect(propertyPage.propertySeclectorHorace.isExisting()).to.be.true;
		expect(propertyPage.propertySeclectorAREC.isExisting()).to.be.false;
	});


	it('should search for properties', function() {	
		browser.pause(1000);
		propertyPage.searchIcon.waitForExist();	
		propertyPage.searchIcon.click();
		propertyPage.searchInput.waitForExist();
		propertyPage.searchInput.setValue(propertyPage.propertySeclectorHorace.getText());	
		browser.pause(2000);
		expect(propertyPage.propertySeclectorHorace.isExisting()).to.be.true;
		expect(propertyPage.propertySeclectorElizbeth.isExisting()).to.be.false;
	});
});