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
 	});

 	it('should verify bedBathsCars info', function() {
 		expect(brochure.bedBathsCars.isExisting()).to.be.true;  
 	});

 	it('should verify ofi dates', function() {
 		if(brochure.ofis.length > 0){
 			brochure.ofis.forEach(function (ofi) {
 				expect(browser.element(ofi).isExisting()).to.be.true;
 			})
 		}
 	});

 	it('should verify agent details on the brochure', function() {
 		const listingAgentElements = brochure.getListingAgents(); 
 		if(listingAgentElements.length > 0){
 			listingAgentElements.forEach(function (agent) {
 				if(browser.element(agent[0]).isExisting() || browser.element(agent[1]).isExisting()){
 					expect(true).to.be.true;
 				} else {
 					expect(true).to.be.false;
 				}
 			})
 		}
 	});

 	it('should book inspection', function() {
 		brochure.bookInspButton.click();
 		brochure.attendeeName.waitForExist(); 
 		brochure.attendeeName.setValue("junaid");
 		brochure.attendeeEmail.setValue("junaid@homepass.com"); 
 		brochure.attendeeMobile. setValue("0406111989"); 
 		browser.pause(200); 
 		brochure.submittBook.click();
 		brochure.bookingConfirmed.waitForExist(); 
 		expect(brochure.bookingConfirmed.isExisting()).to.be.true
 	});

 	it('should nevagate to vendor snapshot', function() {
 		// browser.url(browser.options.baseUrl+browser.options.specificListingLink); 
 		// propertyPage.propertyDetailsSettingsButton.waitForExist();
		// propertyPage.propertyDetailsSettingsButton.click();
		// browser.pause(500); 
		// propertyPage.viewVendorSnapshotLink.click();  
		// browser.refresh();
 		browser.url(`${browser.options.brochure}/activity?adhoc-token=${browser.options.token}`); 
 		brochure.activityTab.waitForExist();
 		expect(brochure.activityTab.isExisting()).to.be.true; 
 	});

 	it('should show live notes', function() {
 		var note = propertyPage.addNote(); 
 		var noteElement = `//div[text()="${note}"]`; 
 		expect(note).to.contain('note'); 
 		browser.element(noteElement).waitForExist();
 		expect(browser.element(noteElement).isExisting()).to.be.true; 

 	});

 	 	it('should show live checkins', function() {
 		expect(propertyPage.addCheckin()).to.equal(200); 
 		brochure.testCheckin.waitForExist(); 
 		var checkinTime = brochure.testCheckinDate.getAttribute('datetime');
 		expect(propertyPage.compareDates(5, checkinTime), "checkin date is not before current date").to.be.true; 		
 	});

 });