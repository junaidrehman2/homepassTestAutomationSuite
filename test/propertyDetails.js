var propertyPage  = require('./pages/properties.page.js');
var horaceStreet = {};
var propertyId = '';

describe('property details', function() {
	this.timeout(30000);

	it('should go to property details section', function() {
		propertyPage.img.waitForExist(5000);	
		propertyPage.img.click();
		browser.pause(1000);
		propertyPage.selectedAccount.waitForExist(5000);
		propertyPage.selectedAccount.click()	
		propertyPage.propertySeclectorHorace.waitForExist(5000);
		propertyPage.propertySeclectorHorace.click();
		propertyPage.detailsTab.waitForExist(5000);
		propertyPage.detailsTab.click();
		propertyPage.propertyId.waitForExist(5000);
		propertyId = propertyPage.propertyId.getText(); 
		horaceStreet = propertyPage.getProperty(propertyId); 
	});

	it('should upload a Doc', function() {	
		expect(horaceStreet.mimeLinks.length).to.equal(0);
		propertyPage.addDocs.waitForExist(5000);
		propertyPage.addDocs.click();
		browser.frame(propertyPage.filePickerIframe.value);
		propertyPage.googleDriveFileStackLink.waitForExist(5000);
		propertyPage.googleDriveFileStackLink.scroll(0, 100);
		propertyPage.webImgFileStackLink.waitForExist(5000);
		propertyPage.webImgFileStackLink.click();
		propertyPage.webImgFileStackSearchTextBox.waitForExist(5000);
		propertyPage.webImgFileStackSearchTextBox.setValue('google');
		propertyPage.webImgFileStackSearchButton.click();
		propertyPage.firstItemWebImgFileStackSearch.waitForExist(7000);
		propertyPage.firstItemWebImgFileStackSearch.click();
		propertyPage.selectFile.waitForExist(5000);
		propertyPage.selectFile.click();
		propertyPage.uploadButton.waitForExist(5000);
		propertyPage.uploadButton.click();
		propertyPage.deleteFileWithGoogleText.waitForExist(10000);
		expect(propertyPage.fileNameWithGoogleText.isExisting()).to.be.true;
		horaceStreet = propertyPage.getProperty(propertyId);
		expect(horaceStreet.mimeLinks.length).to.equal(1);
	});
	
	it('should delete file', function() {	
		propertyPage.deleteFileWithGoogleText.click();
		browser.pause(500);
		expect(propertyPage.fileNameWithGoogleText.isExisting()).to.be.false;
		horaceStreet = propertyPage.getProperty(propertyId);
		expect(horaceStreet.mimeLinks.length).to.equal(0);
	});

	it('should add a linked record', function() {	
		browser.pause(1000);
		expect(horaceStreet.refs.length).to.equal(0);
		propertyPage.addPropertyRef.click();
		propertyPage.refIdInput.waitForExist(5000);
		propertyPage.refIdInput.setValue('R2-6767');
		propertyPage.refIdSaveButton.click();
		propertyPage.refIdText.waitForExist(5000)
		expect(propertyPage.refIdText.isExisting()).to.be.true;
		horaceStreet = propertyPage.getProperty(propertyId);
		expect(horaceStreet.refs.length).to.equal(1);
	});

	it('should edit a linked record', function() {	
		browser.pause(1000);
		propertyPage.settingsButtonRef.waitForExist(5000);
		propertyPage.settingsButtonRef.click();
		propertyPage.editRefId.waitForExist(5000);
		propertyPage.editRefId.click();
		propertyPage.refIdInput.waitForExist(5000);
		browser.pause(1000);
		propertyPage.refIdInput.addValue('4');
		propertyPage.refIdSaveButton.click();
		propertyPage.refIdTextEdited.waitForExist(5000);
		expect(propertyPage.refIdText.isExisting()).to.be.false;
		expect(propertyPage.refIdTextEdited.isExisting()).to.be.true;

	});


	it('should remove a linked record', function() {	
		propertyPage.settingsButtonRefEdited.click();
		propertyPage.removeLinkedRecord.waitForExist(5000);
		propertyPage.removeLinkedRecord.click();
		browser.pause(500);
		expect(propertyPage.refIdTextEdited.isExisting()).to.be.false;
	});
});