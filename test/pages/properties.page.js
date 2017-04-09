var request = require('sync-request');


class Properties {
	get img() { return $("img[size]"); }
	get detailsTab() {return $("//div[text()='Details']");}
	get selectedAccount() { return $("//div[text()='Blu Property Automated test suite office public']"); }
	get settings() { return $("//a//span[text() = 'settings']"); }
	get propertySeclectorAREC() { return $("//button/following-sibling::div[text()='2015 AREC Auditorium']"); }
	get searchIcon() { return $("//span[text()='search']"); }
	get searchInput() { return $("//div[text()='Address']/following-sibling::input"); }
	get closeIcon() { return $("//span[text()='close']"); }
	get UnstarIconPropDetails() { return $("//span[text()='star_border']"); }
	get staredIconPropDetails() { return $("//span[text()='star']"); }
	get filterIcon() { return $("//span[text()='filter_list']"); }
	get backArrow() { return $("//span[text()='arrow_back']"); }
	get showAll() { return $("//div[text()='Sale Only']"); }
	get showArchive() { return $("//div[text()='Show Archived']"); }
	get saleOnly() { return $("//div[text()='Sale Only']"); }
	get rentOnly() { return $("//div[text()='Rent Only']"); }
	get hpIdForAREC() { return $("//div[text()='Homepass ID']/following-sibling::div"); }
	get propertySeclectorHorace() { return $("//button/following-sibling::div[text()='7 Horace Street']"); }
	get propertySeclectorKent() { return $("//button/following-sibling::div[text()='2/33 Kent Grove']"); }
	get propertySeclectorElizbeth() { return $("//button/following-sibling::div[text()='16 Elizabeth Street']"); }
	get proprtyToStart() { return $("//div[text()='2015 AREC Auditorium']/preceding-sibling::button/div/span"); }
	get addDocs() {return $("//div[text()='ADD DOCUMENTS']");}
	get deleteFileWithGoogleText() {return $("//div[text()='google.jpg']/preceding-sibling::button");}
	get fileNameWithGoogleText() {return $("//div[text()='google.jpg']");}
	get webImgFileStackLink() {return $("a[href$='Imagesearch']");}
	get googleDriveFileStackLink() {return $("a[href$='GoogleDrive']");}
	get webImgFileStackSearchTextBox() {return $("input[placeholder='Search for']");}
	get webImgFileStackSearchButton() {return $("input[value='Search']");}
	get firstItemWebImgFileStackSearch() {return $("//div[@class='grid__item'][1]");}
	get selectFile() {return $("//a[text()='Select one file']");}
	get uploadButton() {return $("//button[text()='Upload']");}
	get filePickerIframe() {return $("iframe[name='filepicker_dialog']");}
	get addPropertyRef() {return $("//div[text()='ADD LINKED RECORD']");}
	get refIdInput() {return $("//label[text()='Integration Reference ID']/following-sibling::input");}
	get refIdSaveButton() {return $("//span[text()='Save']");}
	get refIdText() {return $("//div[text()='R2-6767']");}
	get refIdTextEdited() {return $("//div[text()='R2-67674']");}
	get editRefId() {return $("//div[text()='Edit linked record']");}
	get settingsButtonRef() {return $("//div[text()='R2-6767']/..//button");}
	get settingsButtonRefEdited() {return $("//div[text()='R2-67674']/..//button");}
	get removeLinkedRecord() {return $("//div[text()='Remove linked record']");}
	get propertyId() {return $("//div[text()='Homepass ID']/following-sibling::div");}
	get vendorSnapshotLink() {return $("//div[text()='Vendor Snapshot']");}
	get kentPropertyId() {return '5588c2e8b91d24fd0f43a8a0';}
	// get () {return $("");}
	// get () {return $("");}
	// get () {return $("");}
	// get () {return $("");}
	// get () {return $("");}
	// get () {return $("");}
	// get () {return $("");}
	// get () {return $("");}
	// get () {return $("");}


	getProperty(property) {
		var res = request('POST', 'https://data-staging.homepass.com/csm/v1/findListings', {
			headers: {Authorization : 'Basic EvdaQ5PHdmemnssnT9LmQ66T7Q3s4Ey8'}, 
			json: { listingIds : [property] }
		}); 

		var property = JSON.parse(res.getBody().toString('utf8'));
		return property.listings[0];
	}


}

module.exports = new Properties();
