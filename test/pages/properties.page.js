var request = require('sync-request');
var uuidV4 = require('uuid/v4');
var moment = require('moment');


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
	get propertyDetailsSettingsButton() {return $("//button[contains(.,'star')]/following-sibling::div");}
	get archivePropertyLink() {return $("//div[text()='Archive property']");}
	get unarchivePropertyLink() {return $("//div[text()='Unarchive property']");}
	get propertyArchived() {return $("//div[text()='archived']");}
	get testCheckin() {return $("//div[text()='Chu test checkin']");}
	get testCheckinDate() {return $("//div[text()='Chu test checkin']/following-sibling::div//time");}
	get contacts() {return $("//div[text()='Contacts']");}
	get activity() {return $("//div[text()='Activity']");}
	get checkinMoreButton() {return $("//div[text()='Chu test checkin']/preceding-sibling::div[1]");}
	get flag() {return $("//div[text()='Flag']");}
	get unFlag() {return $("//div[text()='Unflag']");}
	get activityDate() {return $("//div[contains(.,'Chu test checkin')]/following-sibling::div//time");}
	get activityCheckin() {return $("//div[contains(.,'Chu test checkin')]");}
	get activityFlag() {return $("//div[contains(.,'Chu test checkin')]/span");}
	get flaggedElement() {return $("//div[text()='Chu test checkin']/following-sibling::div[contains(.,'FLAGGED')]");}
	get addVendor() {return $("//div[text()='ADD CONTACT']");}
	get vendorNameInput() {return $("//h3[text()='Add vendors']/following-sibling::div//input");}
	get createNewVendorLink() {return $("//div[text()='Create new contact']");}
	get vendorEmailInput() {return $("//div[text()='Email']/following-sibling::input");}
	get vendorMobileInput() {return $("//label[text()='Mobile']/following-sibling::input");}
	get saveVendor() {return $("//span[text() = 'Save']");}
	get vendorName() {return $("//div[text()='test Vendor']");}
	get vendorMoreButton() {return $("//div[text()='test Vendor']/preceding-sibling::div[1]");}
	get removeVendor() {return $("//div[text()='Remove Vendor']");}
	get viewVendorSnapshotLink() {return $("//div[text()='View vendor snapshot']");}
	get addVendorHeaderText() {return $("//h3[text()='New Contact']")}

    getProperty(property) {
    	var res = request('POST', browser.options.testApiUrl+'csm/v1/findListings', {
    		headers: {Authorization : 'Basic EvdaQ5PHdmemnssnT9LmQ66T7Q3s4Ey8'}, 
    		json: { listingIds : [property] }
    	}); 

    	var property = JSON.parse(res.getBody().toString('utf8'));
    	return property.listings[0];
    }

    addCheckin(fullname = 'Chu test checkin'){
    	var res = request('POST', browser.options.testApiUrl+'graphql', {
    		headers: {Authorization : 'Bearer '+browser.options.token}, 
    		json: {  
    			"query":"mutation ($checkinInput:AddCheckinInput!) { addCheckin(input: $checkinInput) { listing { listingId contactCount flaggedCount } checkin {id checkinId ref checkinDate listingContact {id visits lastVisit noteCount hasSentDocs flagged contact{id contactId fullName firstName lastName imageUrl mobile landline email address customer{id customerId}} checkins { edges { node { id checkinId ref checkinDate listingContact {id visits lastVisit noteCount hasSentDocs flagged contact{id contactId fullName firstName lastName imageUrl mobile landline email address customer{id customerId}}} } } }}} } }",
    			"variables":{  
    				"checkinInput":{  
    					"address":"Level 22, 530 Collins St, Melbourne VIC 3000, Australia",
    					"applicationId":"dlWUg9j4lt8QLA3EdQYOXJxBoiJCW7KYVDy0z9Rk",
    					"checkinDate": new Date(),
    					"clientMutationId":"ADD-CHECKIN-4f157ce6-416c-40b4-ae76-acec95c1a197",
    					"contactNote":"This is a Contact note",
    					"contactNoteShared":true,
    					"email":"cmyeoh@gmail.com",
    					"fullName":fullname,
    					"instrument":"Homepass",
    					"landline":"+6163259845",
    					"listingId":"548e62854be1d336770d7a83",
    					"mobile":"+61430435060",
    					"notify":false,
    					"ref":uuidV4()
    				}
    			}
    		}
    	}); 

    	return res.statusCode; 
    }

    addNote(){
    	var contact = ''; 

    	if(process.env.SERVER === 'sandbox'){
    		contact = '58ef0b719cfbeb0d14af0ee1'; 
    	} else if(process.env.SERVER === 'prod'){
    		contact = "5905a2791e71aff20ce940d4"; 
    	}else if(process.env.SERVER === 'staging'){
    		contact = "58edd8266a1fe54e45874a92";
    	}

    	var res = request('POST', browser.options.testApiUrl+'graphql', {
    		headers: {Authorization : 'Bearer '+browser.options.token}, 
    		json: {  
    			"query":`mutation { \n  addNote(input:{\n       attachedToId:\"548e62854be1d336770d7a83\"\n    attachedToType:LISTING\n    clientMutationId:\"ADD-NOTE-3d9160b1-f763-4446-b0ec-d688fe2dc003\"\n    contactId:\"${contact}\"\n    isVendorComment:true\n    ref:\"${uuidV4()}\" \n    shared:false\n    text:\"note${uuidV4()}\"\n  }) { \n    note { text }\n    } \n  } `
    		}	
    	}); 

    	return JSON.parse(res.getBody().toString('utf8')).data.addNote.note.text; 
    }

    compareDates(minToSubtract, checkinDate){
    	return moment().subtract(minToSubtract, 'minutes') <  moment(checkinDate)? true : false;
    }
}

module.exports = new Properties();

