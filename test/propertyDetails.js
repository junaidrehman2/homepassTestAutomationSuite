var propertyPage  = require('./pages/properties.page.js');
var horaceStreet = {};
var propertyId = '';

describe('property details', function() {
	this.timeout(30000);

	it('should go to property details section', function() {
		propertyPage.img.waitForExist();	
		propertyPage.img.click();
		browser.pause(1000);
		propertyPage.selectedAccount.waitForExist();
		propertyPage.selectedAccount.click()	
		propertyPage.propertySeclectorHorace.waitForExist();
		propertyPage.propertySeclectorHorace.click();
		propertyPage.detailsTab.waitForExist();
		propertyPage.detailsTab.click();
		propertyPage.propertyId.waitForExist();
		propertyId = propertyPage.propertyId.getText(); 
		horaceStreet = propertyPage.getProperty(propertyId); 
	});

	// it('should upload a Doc', function() {	
	// 	expect(horaceStreet.mimeLinks.length).to.equal(0);
	// 	propertyPage.addDocs.waitForExist();
	// 	propertyPage.addDocs.click();
	// 	browser.frame(propertyPage.filePickerIframe.value);
	// 	propertyPage.googleDriveFileStackLink.waitForExist();
	// 	propertyPage.googleDriveFileStackLink.scroll(0, 100);
	// 	propertyPage.webImgFileStackLink.waitForExist();
	// 	propertyPage.webImgFileStackLink.click();
	// 	propertyPage.webImgFileStackSearchTextBox.waitForExist();
	// 	propertyPage.webImgFileStackSearchTextBox.setValue('google');
	// 	propertyPage.webImgFileStackSearchButton.click();
	// 	propertyPage.firstItemWebImgFileStackSearch.waitForExist(7000);
	// 	propertyPage.firstItemWebImgFileStackSearch.click();
	// 	propertyPage.selectFile.waitForExist();
	// 	propertyPage.selectFile.click();
	// 	propertyPage.uploadButton.waitForExist();
	// 	propertyPage.uploadButton.click();
	// 	propertyPage.deleteFileWithGoogleText.waitForExist(10000);
	// 	expect(propertyPage.fileNameWithGoogleText.isExisting()).to.be.true;
	// 	horaceStreet = propertyPage.getProperty(propertyId);
	// 	expect(horaceStreet.mimeLinks.length).to.equal(1);
	// });
	
	// it('should delete file', function() {	
	// 	propertyPage.deleteFileWithGoogleText.click();
	// 	browser.pause(500);
	// 	expect(propertyPage.fileNameWithGoogleText.isExisting()).to.be.false;
	// 	horaceStreet = propertyPage.getProperty(propertyId);
	// 	expect(horaceStreet.mimeLinks.length).to.equal(0);
	// });

	// it('should add a linked record', function() {	
	// 	browser.pause(1000);
	// 	expect(horaceStreet.refs.length).to.equal(0);
	// 	propertyPage.addPropertyRef.click();
	// 	propertyPage.refIdInput.waitForExist();
	// 	propertyPage.refIdInput.setValue('R2-6767');
	// 	propertyPage.refIdSaveButton.click();
	// 	propertyPage.refIdText.waitForExist()
	// 	expect(propertyPage.refIdText.isExisting()).to.be.true;
	// 	horaceStreet = propertyPage.getProperty(propertyId);
	// 	expect(horaceStreet.refs.length).to.equal(1);
	// });

	// it('should edit a linked record', function() {	
	// 	browser.pause(1000);
	// 	propertyPage.settingsButtonRef.waitForExist();
	// 	propertyPage.settingsButtonRef.click();
	// 	propertyPage.editRefId.waitForExist();
	// 	propertyPage.editRefId.click();
	// 	propertyPage.refIdInput.waitForExist();
	// 	browser.pause(1000);
	// 	propertyPage.refIdInput.addValue('4');
	// 	propertyPage.refIdSaveButton.click();
	// 	propertyPage.refIdTextEdited.waitForExist();
	// 	expect(propertyPage.refIdText.isExisting()).to.be.false;
	// 	expect(propertyPage.refIdTextEdited.isExisting()).to.be.true;

	// });

	// it('should remove a linked record', function() {	
	// 	propertyPage.settingsButtonRefEdited.click();
	// 	propertyPage.removeLinkedRecord.waitForExist();
	// 	propertyPage.removeLinkedRecord.click();
	// 	browser.pause(500);
	// 	expect(propertyPage.refIdTextEdited.isExisting()).to.be.false;
	// });

	it('should display new checkins', function() {	
		expect(propertyPage.addCheckin()).to.equal(200); 
		propertyPage.contacts.click(); 
		browser.refresh(); 
		propertyPage.testCheckin.waitForExist(); 
		var checkinTime= propertyPage.testCheckinDate.getAttribute('datetime');
		console.log(checkinTime);  
		expect(propertyPage.compareDates(5, checkinTime)).to.be.true; 
	});

	it('should flag the contact', function() {	
		propertyPage.checkinMoreButton.click(); 
		browser.pause(500); 
		propertyPage.flag.waitForExist(); 
		propertyPage.flag.click()
		propertyPage.flaggedElement.waitForExist();
		propertyPage.activity.click(); 
		propertyPage.activityCheckin.waitForExist();
		expect(propertyPage.activityFlag.isExisting()).to.be.true
	 
	});

});