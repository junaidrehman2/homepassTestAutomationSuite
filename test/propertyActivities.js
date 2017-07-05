const propertyPage  = require('./pages/properties.page.js')
const bookings  = require('./pages/bookings.page.js')
const settings  = require('./pages/settings.page.js')
const uuidV4 = require('uuid/v4')
const db  = require('../db/dbController')
var waitFlag = false 
var dataBacked = null
var noteId = null
var contactId = "594c7286b159a033729bc019"
var checkinId = null
var vendorId = null
var attendeeId = null


describe('property activities', function() {
// 	it('should login', function() {
// 		// var ele = $("//*[contains(@name, 'PM')]")
// 		// var ele = $("//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeTable[3]/XCUIElementTypeCell/XCUIElementTypeStaticText[3]")
// // var ele = $(`~Junaid`)
// 		propertyPage.kentProperty.waitForExist()
// 		propertyPage.kentProperty.click()
// 		propertyPage.moreButtonPropertyActivity.waitForExist()
// 		// propertyPage.ele.waitForExist()
// 		browser.element(`~Junaid`).waitForExist()
// 		// propertyPage.ele.click()
// browser.pause(2000)
// 		// browser.touchScroll(ele,-200,0);
// 		// browser.swipeLeft(`~Junaid`, 100, 300);
// browser.touchAction(`~Junaid`, [
//  'press', 
//  { action: 'wait', ms: 50 }, 
//  { action: 'moveTo', x: -100, y: 0  }, 
//  'release'
// ]);

// // browser.execute('mobile: swipe', {direction: 'down', element: `~Junaid`});
// 		// browser.pause(3000)

// 		// browser.touchAction(`~Junaid`, [
//   //       'press',
//   //       { action: 'moveTo', x: 200, y: 0},
//   //       'release'
//   //   ])




// 	})

	// it('should login', function() {
	// 	propertyPage.signIn.waitForExist()
	// 	propertyPage.signIn.click()
	// 	propertyPage.loginMobileFiled.waitForExist()
	// 	propertyPage.loginMobileFiled.setValue("0406111989")
	// 	browser.pause(3000)
	// 	propertyPage.nextButtonOnCheckinScreen.click()
	// 	propertyPage.loginMobileFiled.waitForExist()
	// 	propertyPage.loginMobileFiled.addValue(propertyPage.getCode())
	// 	propertyPage.nextButtonOnCheckinScreen.click()
	// 		browser.pause(2000)
	// });



// 	it('should change account', function() {	
// 		propertyPage.openNavigationDrawer.waitForExist()
// 		propertyPage.openNavigationDrawer.click()
// 		propertyPage.SettingsLink.waitForExist()
// 		propertyPage.SettingsLink.click()
// 		propertyPage.account.waitForExist()
// 		propertyPage.account.click()
// 		propertyPage.accountToChangeTo.waitForExist()
// 		propertyPage.accountToChangeTo.click()
// 		browser.pause(2000)
// 		propertyPage.backArrowInAccoutPage.click()     
// 		propertyPage.ARECproperty.waitForExist()
// 		expect(propertyPage.ARECproperty.isExisting()).to.be.true
// 	});

////````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

it('should search property', function() {
	// try{
	// 	browser.element(`~Cancel`).waitForExist()
	// 	waitFlag = true
	// }catch(e){
	// 	console.log("Cancel is not there")
	// }
	// if(waitFlag){
	// 	browser.element(`~Cancel`).click()	
	// }
	propertyPage.searchPropertyTextBox.waitForExist()
	propertyPage.searchPropertyTextBox.setValue('kent')
	browser.pause(1000)
	expect(propertyPage.kentProperty.isExisting()).to.be.true
	expect(propertyPage.ARECproperty.isExisting()).to.be.false
	propertyPage.cancelSearch.click()
	propertyPage.kentProperty.click()
});


it('should star property', function() {	
	waitFlag = false
	propertyPage.starUnstar.waitForExist()
	propertyPage.starUnstar.click()
	propertyPage.backArrowContactDetails.click()
	propertyPage.kentProperty.waitForExist()
	expect(propertyPage.notFollowingProperties.isExisting()).to.be.false
	propertyPage.kentProperty.click()
	db.getFollowing(browser.options.loggedInUserOpt, browser.options.propertyOpt, (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.status).to.equal('active')
});

it('should unstar property', function() {	
	waitFlag = false
	propertyPage.starUnstar.waitForExist()
	propertyPage.starUnstar.click()
	propertyPage.backArrowContactDetails.click()
	propertyPage.kentProperty.waitForExist()
	expect(propertyPage.notFollowingProperties.isExisting()).to.be.true
	propertyPage.kentProperty.click()
	db.getFollowing(browser.options.loggedInUserOpt, browser.options.propertyOpt, (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.status).to.equal('deleted')
});

it('should go to vendor snapshot', function() {	
	propertyPage.propertyDetailsMoreButton.waitForExist()
	propertyPage.propertyDetailsMoreButton.click()
	propertyPage.sendVendorSnapshot.waitForExist()
	propertyPage.sendVendorSnapshot.click()
	propertyPage.snapshotElement.waitForExist()
	expect(propertyPage.snapshotElement.isExisting()).to.be.true
	expect(propertyPage.snapshotElement2.isExisting()).to.be.true
	propertyPage.close.click()
});

it('should go to brochoure', function() {	
	propertyPage.propertyDetailsMoreButton.waitForExist()
	propertyPage.propertyDetailsMoreButton.click()
	propertyPage.sendMobileBrochure.waitForExist()
	propertyPage.sendMobileBrochure.click()
	propertyPage.snapshotElement.waitForExist()
	expect(propertyPage.snapshotElement.isExisting()).to.be.true
	expect(propertyPage.snapshotElement2.isExisting()).to.be.false
	propertyPage.close.click()

});

it('should validate checkin data', function() {	
	propertyPage.kentProperty.waitForExist()
	propertyPage.kentProperty.click()
	waitFlag = false
	propertyPage.checkinButton.waitForExist()
	propertyPage.checkinButton.click()
	propertyPage.createNewContact.waitForExist()
	propertyPage.createNewContact.click()
	propertyPage.doneButtonOnCheckinScreen.waitForExist()
	propertyPage.doneButtonOnCheckinScreen.click()
	propertyPage.nameFieldErrorMessage.waitForExist()
	expect(propertyPage.nameFieldErrorMessage.isExisting()).to.be.true
	propertyPage.ok.click()
	propertyPage.nameFieldCheckinScreen.waitForExist()
	propertyPage.nameFieldCheckinScreen.setValue('IOS Test Checkin')
	propertyPage.doneButtonOnCheckinScreen.click()
	propertyPage.nameFieldErrorMessage.waitForExist()
	expect(propertyPage.nameFieldErrorMessage.isExisting()).to.be.true
	propertyPage.ok.click()
	propertyPage.mobileFieldCheckinScreen.waitForExist()
	propertyPage.mobileFieldCheckinScreen.addValue('040611198')
	propertyPage.doneButtonOnCheckinScreen.click()
	propertyPage.invalidMobile.waitForExist()
	expect(propertyPage.invalidMobile.isExisting()).to.be.true
	propertyPage.goBackAndFix.click()
	propertyPage.mobileFieldCheckinScreen.waitForExist()
	propertyPage.mobileFieldCheckinScreen.setValue('0406111989')
	propertyPage.emailFieldCheckinScreen.setValue('homepasstest')
	propertyPage.doneButtonOnCheckinScreen.click()
	propertyPage.invalidEmail.waitForExist()
	expect(propertyPage.invalidEmail.isExisting()).to.be.true
	propertyPage.ok.click()
	propertyPage.emailFieldCheckinScreen.waitForExist()
	propertyPage.emailFieldCheckinScreen.setValue('junaid@homepass.com')
	propertyPage.addressFieldCheckinScreen.click()
	propertyPage.enterAddressOnCheckinScreen.waitForExist()
	propertyPage.enterAddressOnCheckinScreen.setValue("35 Throsby Crescent, Deer")
	browser.pause(1000)
	propertyPage.testAddress.click()
	propertyPage.doneButtonOnCheckinScreen.waitForExist()
	propertyPage.doneButtonOnCheckinScreen.click()
	propertyPage.testCheckin.waitForExist()
	expect(propertyPage.testCheckin.isExisting()).to.be.true; 
	db.getCheckin(browser.options.propertyOpt, (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	contactId = dataBacked.contact
	checkinId = dataBacked._id
	expect(dataBacked.fullName).to.equal('IOS Test Checkin')
	expect(propertyPage.compareDates(2, dataBacked.checkinDate)).to.be.true
});

it('should add inspection note', function() {
	waitFlag = false	
	propertyPage.moreButtonPropertyActivity.waitForExist()
	propertyPage.moreButtonPropertyActivity.click()
	propertyPage.addInspectionNote.waitForExist()
	propertyPage.addInspectionNote.click()
	propertyPage.inspectionNoteWindow.waitForExist()
	propertyPage.addNoteText.click()
	propertyPage.addNoteText.setValue(propertyPage.testNote)
	propertyPage.saveButtonAddNoteScreen.waitForExist();
	propertyPage.saveButtonAddNoteScreen.click(); 
	propertyPage.testCheckin.waitForExist()
	propertyPage.testCheckin.click()
	propertyPage.testNoteElement.waitForExist()
	expect(propertyPage.testNoteElement.isExisting()).to.be.true
	db.getNoteCreated(browser.options.propertyOpt, propertyPage.testNote,  (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.text).to.equal(propertyPage.testNote)
	noteId = dataBacked._id
});

it('should edit inspection note', function() {
	waitFlag = false	
	browser.pause(1000)
	propertyPage.testNoteElement.click()	
	propertyPage.editNote.waitForExist()
	propertyPage.editNote.click()
	propertyPage.saveButtonAddNoteScreen.waitForExist()
	propertyPage.addNoteVisibilitySwitch.click()
	propertyPage.addNoteText.setValue(propertyPage.editedtNoteText)
	propertyPage.saveButtonAddNoteScreen.waitForExist()
	propertyPage.saveButtonAddNoteScreen.click(); 
	propertyPage.testNoteElementEdited.waitForExist()
	expect(propertyPage.testNoteElementEdited.isExisting()).to.be.true
	db.getNoteEdited(noteId,  (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.text).to.equal(propertyPage.editedtNoteText)
});

it('should delete inspection note', function() {
	waitFlag = false	
	propertyPage.testNoteElementEdited.click()	
	propertyPage.deleteNoteLink.waitForExist()
	propertyPage.deleteNoteLink.click()
	propertyPage.deleteNote.waitForExist()
	propertyPage.deleteNote.click()
	browser.pause(2000)
	expect(propertyPage.testNoteElementEdited.isExisting()).to.be.false
	db.getNoteEdited(noteId,  (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.deleted).to.be.true
});

it('should send docs', function() {
	propertyPage.moreButtonPropertyActivity.waitForExist()
	propertyPage.moreButtonPropertyActivity.click()
	propertyPage.openSendDocsView.waitForExist()
	propertyPage.openSendDocsView.click()	
	propertyPage.send.waitForExist()
	propertyPage.send.click()
	propertyPage.contactActivity.waitForExist()
	propertyPage.backArrowContactDetails.click()
	propertyPage.testCheckin.waitForExist()
	propertyPage.testCheckin.click()
	propertyPage.fileSent.waitForExist()
	expect(propertyPage.fileSent.isExisting()).to.be.true
});


it('should add contact note', function() {
	waitFlag = false
	propertyPage.contactDetails.waitForExist()
	propertyPage.contactDetails.click()
	propertyPage.addContactNote.waitForExist()
	propertyPage.addContactNote.click()	
	propertyPage.addNoteText.waitForExist()
	propertyPage.addNoteText.setValue(propertyPage.testContactNoteText)
	propertyPage.saveButtonAddNoteScreen.click(); 
	propertyPage.testContactNote.waitForExist()
	expect(propertyPage.testContactNote.isExisting()).to.be.true
	db.getContactNote(propertyPage.testContactNoteText,  (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	noteId = dataBacked._id
	expect(dataBacked.text).to.equal(propertyPage.testContactNoteText)
});

it('should edit contact note', function() {
	waitFlag = false
	propertyPage.testContactNote.click()
	propertyPage.editNote.waitForExist()
	propertyPage.editNote.click()	
	propertyPage.addNoteText.waitForExist()
	propertyPage.addNoteText.setValue('note edited')
	propertyPage.saveButtonAddNoteScreen.click(); 
	propertyPage.testNoteElementEdited.waitForExist()
	expect(propertyPage.testNoteElementEdited.isExisting()).to.be.true
	db.getNoteEdited(noteId,  (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.text).to.equal(propertyPage.editedtNoteText)
});

it('should delete contact note', function() {
	waitFlag = false
	propertyPage.testNoteElementEdited.click()
	propertyPage.deleteNoteLink.waitForExist()
	propertyPage.deleteNoteLink.click()
	propertyPage.deleteNote.waitForExist()
	propertyPage.deleteNote.click()
	browser.pause(1000)
	db.getNoteEdited(noteId,  (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.deleted).to.be.true
	expect(propertyPage.testNoteElementEdited.isExisting()).to.be.false
});

it('should flag the contact', function() {
	waitFlag = false
	propertyPage.backArrowContactDetails.click()
	propertyPage.moreButtonPropertyActivity.waitForExist()
	propertyPage.moreButtonPropertyActivity.click()
	propertyPage.flag.waitForExist()
	propertyPage.flag.click()
	browser.pause(2000)
	db.getInterested(contactId, browser.options.annotationIdOpt, (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.deleted, `value is ${dataBacked.deleted}`).to.be.false
});

it('should unflag the contact', function() {
	waitFlag = false
	propertyPage.moreButtonPropertyActivity.waitForExist()
	propertyPage.moreButtonPropertyActivity.click()
	propertyPage.unFlag.waitForExist()
	propertyPage.unFlag.click()
	browser.pause(2000)
	db.getInterested(contactId, browser.options.annotationIdOpt, (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.deleted).to.be.true
});


it('should edit a contact', function() {	
	waitFlag = false
	propertyPage.testCheckin.click()
	propertyPage.contactDetails.waitForExist()
	propertyPage.contactDetails.click()
	propertyPage.editDetails.waitForExist()
	propertyPage.editDetails.click()
	propertyPage.saveButtonAddNoteScreen.waitForExist()
	propertyPage.fullNameFieldCheckinScreen.setValue('checkin edited')
	propertyPage.mobileFieldCheckinScreen.setValue('0458485562')
	propertyPage.emailFieldCheckinScreen.setValue('homepasstest@gmail.com')
	propertyPage.saveButtonAddNoteScreen.click()
	propertyPage.backArrowContactDetails.waitForExist()
	propertyPage.backArrowContactDetails.click()
	propertyPage.backArrowContactDetails.waitForExist() 
	propertyPage.backArrowContactDetails.click()
	propertyPage.kentProperty.waitForExist()
	propertyPage.kentProperty.click()
	propertyPage.editCheckin.waitForExist()
	propertyPage.editCheckin.click()
	propertyPage.contactDetails.waitForExist()
	propertyPage.contactDetails.click()
	propertyPage.editDetails.waitForExist()
	expect(propertyPage.editCheckin.isExisting(), 'contact name not matched').to.be.true; 
	expect(propertyPage.editedMobile.isExisting(), 'contact mobile not matched').to.be.true; 
	expect(propertyPage.editedEmail.isExisting(), 'contact email not matched').to.be.true; 
	db.getContactById(contactId, (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.fullName).to.equal('checkin edited')
});


it('should delete the checkin', function() {
	propertyPage.backArrowContactDetails.click()
	waitFlag = false
	propertyPage.editCheckin.waitForExist()
	const ele2 = $("//XCUIElementTypeStaticText[@name='checkin edited']/..")
	browser.execute('mobile: swipe', {direction: 'left', element:  ele2.value})
	propertyPage.deleteNote.waitForExist()
	propertyPage.deleteNote.click()
	propertyPage.backArrowContactDetails.click()
	propertyPage.kentProperty.click()
	expect(propertyPage.editCheckin.isExisting()).to.be.false
	db.getCheckInById(checkinId, (data) => {
		dataBacked = data
		waitFlag = true
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.deleted).to.be.true
});

it('should add a kiosk checkin', function() {	
	propertyPage.propertyDetailsMoreButton.waitForExist()
	propertyPage.propertyDetailsMoreButton.click()
	propertyPage.kioskLink.waitForExist()
	propertyPage.kioskLink.click()
	propertyPage.kioskCheckInButtons.waitForExist()
	propertyPage.kioskCheckInButtons.click()
	propertyPage.kioskCloseButton.waitForExist()
	propertyPage.kioskFirstName.setValue("IOS Kiosk")
	propertyPage.kioskLastName.setValue("Test")
	propertyPage.kioskMobile.setValue("0458485562")
	propertyPage.kioskLandline.setValue("04343434")
	propertyPage.kioskEmail.setValue("homepasstest@gmail.com")
	propertyPage.kioskAddress.setValue("35 Throsby Crescent Deer")
	propertyPage.kioskSuggestAddress.waitForExist()
	propertyPage.kioskSuggestAddress.click()
	propertyPage.kioskCheckInButtons.click()
	propertyPage.enjoyYourInspection.waitForExist()
	propertyPage.enjoyYourInspection.click()
	propertyPage.kioskCloseButton.waitForExist()
	propertyPage.kioskCloseButton.click()
	propertyPage.backArrowContactDetails.waitForExist()
	propertyPage.backArrowContactDetails.click()
	propertyPage.kentProperty.waitForExist()
	propertyPage.kentProperty.click()
	propertyPage.kioskTestCheckin.waitForExist()
	expect(propertyPage.kioskTestCheckin.isExisting()).to.be.true; 
	// const ele = $("//XCUIElementTypeStaticText[@name='IOS Kiosk Test']/..")
	// browser.execute('mobile: swipe', {direction: 'left', element:  ele.value})
	// propertyPage.deleteNote.waitForExist()
	// propertyPage.deleteNote.click()
});

it('add a vendor', function() {
	propertyPage.kentProperty.waitForExist()
	propertyPage.kentProperty.click()
	waitFlag = false
	propertyPage.contactDetails.waitForExist()
	propertyPage.contactDetails.click()
	propertyPage.addVendorLink.waitForExist()
	propertyPage.addVendorLink.click()
	propertyPage.addVendor.waitForExist()
	propertyPage.addVendor.click()
	propertyPage.createNewContact.waitForExist()
	propertyPage.createNewContact.click()
	propertyPage.doneButtonOnCheckinScreen.waitForExist()
	propertyPage.nameFieldCheckinScreen.addValue('testVendorIOS')
	propertyPage.mobileFieldCheckinScreen.addValue('0458485562')
	propertyPage.doneButtonOnCheckinScreen.click()
	propertyPage.testVendor.waitForExist()
	expect(propertyPage.testVendor.isExisting()).to.be.true
	db.getVendor(browser.options.propertyOpt, (data) => {
		dataBacked = data
		vendorId = dataBacked._id
		if(dataBacked.contactId != undefined){
			db.getContactById(dataBacked.contactId, (contact) => {
				dataBacked = contact
				waitFlag = true
			})
		}	
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.fullName).to.equal('testVendorIOS')
});

it('remove vendor', function() {
	const ele3 = $("//XCUIElementTypeStaticText[@name='testVendorIOS kiosk']/..")
	waitFlag = false	
	browser.execute('mobile: swipe', {direction: 'left', element:  ele3.value})
	propertyPage.deleteNote.waitForExist()
	propertyPage.deleteNote.click()
	propertyPage.backArrowContactDetails.waitForExist()
	expect(propertyPage.testVendor.isExisting()).to.be.false
	db.getVendorById(vendorId, (data) => {
		dataBacked = data
		waitFlag = true	
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.status).to.equal('deleted')
});


it('show docs sent and notes on VendorSnapshot', function() {
	waitFlag = false	
	propertyPage.showVendorNotes.click()
	browser.pause(500)
	propertyPage.showSendDocs.click()
	browser.pause(500)
	db.getPropertyById(browser.options.propertyOpt, (data) => {
		dataBacked = data
		waitFlag = true	
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.liveView.showDocsSentActivities).to.be.true
	expect(dataBacked.liveView.showNoteActivities).to.be.true
	propertyPage.showSendDocs.click()
	browser.pause(500)
	propertyPage.showVendorNotes.click()
	browser.pause(500)
	propertyPage.backArrowContactDetails.click()
});

it('should add a new attendee', function() {
	waitFlag = false	
	propertyPage.events.waitForExist()
	propertyPage.events.click()
	propertyPage.calanderEvent.waitForExist()
	propertyPage.calanderEvent.click()
	propertyPage.calanderEvent.waitForExist()
	propertyPage.addAttendee.waitForExist()
	propertyPage.addAttendee.click()
	propertyPage.createNewContact.waitForExist()
	propertyPage.createNewContact.click()
	propertyPage.doneButtonOnCheckinScreen.waitForExist()
	propertyPage.nameFieldCheckinScreen.addValue('IOS Test Checkin')
	propertyPage.mobileFieldCheckinScreen.addValue('0406111989')
	propertyPage.emailFieldCheckinScreen.addValue('junaid@homepass.com')
	propertyPage.doneButtonOnCheckinScreen.click()
	propertyPage.testCheckin.waitForExist()
	expect(propertyPage.testCheckin.isExisting()).to.be.true; 
	db.getAttendee('junaid@homepass.com', (data) => {
		dataBacked = data
		attendeeId = dataBacked._id
		waitFlag = true	
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.status).to.equal('accepted')
});


it('should remove attendee', function() {
	const ele4 = $("//XCUIElementTypeStaticText[@name='IOS Test Checkin']/..")
	waitFlag = false	
	browser.execute('mobile: swipe', {direction: 'left', element:  ele4.value})
	propertyPage.deleteNote.waitForExist()
	propertyPage.deleteNote.click()
	propertyPage.backArrowContactDetails.waitForExist()
	propertyPage.backArrowContactDetails.click()   
	propertyPage.calanderEvent.waitForExist()
	propertyPage.calanderEvent.click()
	propertyPage.calanderEvent.waitForExist()
	expect(propertyPage.testCheckin.isExisting()).to.be.false; 
	propertyPage.backArrowContactDetails.click()
	propertyPage.backArrowContactDetails.waitForExist() 
	propertyPage.backArrowContactDetails.click() 
	db.getAttendeeById(attendeeId, (data) => {
		dataBacked = data
		console.log(dataBacked)
		waitFlag = true	
	});
	browser.waitUntil(function () { return waitFlag != false})
	expect(dataBacked.status).to.equal('deleted')
});


	// it('promote team member to admin', function() {
	// 	waitFlag = false
	// 	propertyPage.SettingsLink.waitForExist()
	// 	propertyPage.SettingsLink.click()
	// 	propertyPage.testNWSAgencyAccount.waitForExist()
	// 	propertyPage.testNWSAgencyAccount.click()
	// 	propertyPage.team.waitForExist()
	// 	propertyPage.team.click()
	// 	propertyPage.teamMemberHam.waitForExist()
	// 	console.log(propertyPage.teamMemberHam.getElementSize('width'))
		// console.log(browser.leftClick(`~    HK     Ham Khan `, 345, 22))
		// console.log(browser.leftClick(`~   h    homepasstest@gmail.com Invited 10 days ago  `, 345, 15))
		// settings.moreButtonTeam.click()
		// settings.grantAdminPrivileges.waitForExist()
		// settings.grantAdminPrivileges.click()
		// settings.hamAdmin.waitForExist()
		// expect(settings.hamAdmin.isExisting()).to.be.true
		// browser.pause(1000)
		// db.getAccountMembership(browser.options.userIdForPromoteDemoteUserOpt, (data) => {
		// 	dataBacked = data
		// 	waitFlag = true	
		// });
		// browser.waitUntil(function () { return waitFlag != false})
		// expect(dataBacked.role).to.equal('admin')

	// });


// 	it('demote team member to admin', function() {
// 		waitFlag = false
// 		settings.moreButtonTeam.click()
// 		settings.removeAdminPrivileges.waitForExist()
// 		settings.removeAdminPrivileges.click()
// 		settings.hamAdmin.waitForExist()
// 		expect(settings.hamAdmin.isExisting()).to.be.false
// 		browser.pause(1000)
// 		db.getAccountMembership(browser.options.userIdForPromoteDemoteUserOpt, (data) => {
// 			dataBacked = data
// 			waitFlag = true	
// 		});
// 		browser.waitUntil(function () { return waitFlag != false})
// 		expect(dataBacked.role).to.equal('user')
// 	});

	// it('should Invite team member', function() {
	// 	propertyPage.SettingsLink.waitForExist()
	// 	propertyPage.SettingsLink.click()
	// 	propertyPage.testNWSAgencyAccount.waitForExist()
	// 	propertyPage.testNWSAgencyAccount.click()
	// 	propertyPage.team.waitForExist()
	// 	propertyPage.team.click()
	// 	propertyPage.inviteTeamMember.waitForExist()
	// 	propertyPage.inviteTeamMember.click()
	// 	propertyPage.emailFieldInviteMember.waitForExist()
	// 	propertyPage.emailFieldInviteMember.setValue("homepasstest@gmail.com")
	// 	propertyPage.inviteButton.click()
	// 	browser.pause(1000)
	// 	expect(propertyPage.homepasstestEmail.isExisting()).to.be.true
		// propertyPage.inviteMoreButton.click()
		// propertyPage.cancelInvitation.waitForExist()
		// propertyPage.cancelInvitation.click()
		// browser.pause(1000)
		// expect(propertyPage.homepasstestEmail.isExisting()).to.be.false


	// });

	// it('should send mobile brocuhre on checkin', function() {
	// 	settings.backButtonTeamPage.click()
	// 	settings.mobileBrochureToggleOff.waitForExist()
	// 	settings.mobileBrochureToggleOff.click()
	// 	settings.backButtonAccountPage.click()
	// 	propertyPage.backArrowInAccoutPage.waitForExist()     
	// 	propertyPage.backArrowInAccoutPage.click()     
	// 	propertyPage.ARECproperty.waitForExist()
	// 	propertyPage.ARECproperty.click() 
	// 	propertyPage.checkinButton.waitForExist()
	// 	propertyPage.checkinButton.click()
	// 	propertyPage.nextButtonOnCheckinScreen.waitForExist()
	// 	propertyPage.nextButtonOnCheckinScreen.click()
	// 	propertyPage.landlineFieldCheckinScreen.swipeUp(700, 300)
	// 	browser.pause(2000)
	// 	expect(settings.mobileBrochureToggleOn.isExisting()).to.be.true
	// });

// 	it('should not send mobile brocuhre on checkin', function() {
// 		propertyPage.backArrowContactDetails.click()
// 		propertyPage.backArrowContactDetails.waitForExist()
// 		propertyPage.backArrowContactDetails.click()
// 		propertyPage.backArrowContactDetails.waitForExist()
// 		propertyPage.backArrowContactDetails.click()
// 		propertyPage.openNavigationDrawer.waitForExist()
// 		propertyPage.openNavigationDrawer.click()
// 		propertyPage.SettingsLink.waitForExist()
// 		propertyPage.SettingsLink.click()
// 		propertyPage.account.waitForExist()
// 		propertyPage.account.swipeUp(700, 300)
// 		settings.testNWSAgencyAccount.waitForExist()
// 		settings.testNWSAgencyAccount.click()
// 		settings.mobileBrochureToggleOn.waitForExist()
// 		settings.mobileBrochureToggleOn.click()
// 		browser.pause(1000)
// 		settings.backButtonAccountPage.click()
// 		propertyPage.backArrowInAccoutPage.waitForExist()     
// 		propertyPage.backArrowInAccoutPage.click()     
// 		propertyPage.ARECproperty.waitForExist()
// 		propertyPage.ARECproperty.click() 
// 		propertyPage.checkinButton.waitForExist()
// 		propertyPage.checkinButton.click()
// 		propertyPage.nextButtonOnCheckinScreen.waitForExist()
// 		propertyPage.nextButtonOnCheckinScreen.click()
// 		propertyPage.landlineFieldCheckinScreen.swipeUp(700, 300)
// 		browser.pause(2000)
// 		expect(settings.mobileBrochureToggleOn.isExisting()).to.be.false
// 	});



// 	it('should change region', function() {	
// 	propertyPage.backArrowContactDetails.click()
// 		propertyPage.backArrowContactDetails.waitForExist()
// 		propertyPage.backArrowContactDetails.click()
// 		propertyPage.backArrowContactDetails.waitForExist()
// 		propertyPage.backArrowContactDetails.click()
// 		propertyPage.openNavigationDrawer.waitForExist()
// 		propertyPage.openNavigationDrawer.click()
// 		propertyPage.SettingsLink.waitForExist()
// 		propertyPage.SettingsLink.click()
// 		propertyPage.settingsRegion.waitForExist()
// 		propertyPage.settingsRegion.click()
// 		propertyPage.regionNewZealand.waitForExist()
// 		propertyPage.regionNewZealand.click()
// 		propertyPage.regionBackButton.click()
// 		propertyPage.backArrowInAccoutPage.waitForExist()     
// 		propertyPage.backArrowInAccoutPage.click()    
// 		propertyPage.ARECproperty.waitForExist()
// 		propertyPage.ARECproperty.click()
// 		propertyPage.checkinButton.waitForExist()
// 		propertyPage.checkinButton.click()
// 		propertyPage.nextButtonOnCheckinScreen.waitForExist()
// 		propertyPage.nextButtonOnCheckinScreen.click()
//         propertyPage.nameFieldCheckinScreen.waitForExist()
// 		propertyPage.nameFieldCheckinScreen.addValue('Aus Mobile')
// 		propertyPage.mobileFieldCheckinScreen.setValue('0406111989')
// 		propertyPage.doneButtonOnCheckinScreen.click()
// 		propertyPage.InvalidMobile.waitForExist()
// 		expect(propertyPage.InvalidMobile.isExisting()).to.be.true
// 		propertyPage.dontCheckinInvalidNo.click()
// 		propertyPage.mobileFieldCheckinScreen.setValue('021123456')
// 		propertyPage.doneButtonOnCheckinScreen.click()
// 		propertyPage.checkinButton.waitForExist()
// 		expect(propertyPage.checkinButton.isExisting()).to.be.true
// 	});

// it('should search region', function() {	
// 		propertyPage.backArrowContactDetails.click()
// 		propertyPage.openNavigationDrawer.waitForExist()
// 		propertyPage.openNavigationDrawer.click()
// 		propertyPage.SettingsLink.waitForExist()
// 		propertyPage.SettingsLink.click()
// 		propertyPage.settingsRegion.waitForExist()
// 		propertyPage.settingsRegion.click()
// 		propertyPage.regionSearch.waitForExist()
// 		propertyPage.regionSearch.setValue('Pakistan')
// 		browser.pause(2000)
// 		expect(propertyPage.regionAustralia.isExisting()).to.be.false
// 		expect(propertyPage.regionPakistan.isExisting()).to.be.true
// 		propertyPage.regionSearch.clearElement()
// 		browser.pause(1000)
// 		propertyPage.regionAustralia.click()
// 		propertyPage.regionAustralia.click()
// 		propertyPage.regionBackButton.click()
// 	});



it('should logout', function() {	
	db.closeMongoConnection()
// 		propertyPage.account.waitForExist()
// 		propertyPage.account.swipeUp(700, 300)
// 		propertyPage.about.waitForExist()
// 		propertyPage.about.click()
// 		propertyPage.signOut.waitForExist()
// 		propertyPage.signOut.click()
// 		propertyPage.signOutDialog.waitForExist()
// 		propertyPage.signOutDialog.click()
// 		propertyPage.signIn.waitForExist()
// 		expect(propertyPage.signIn.isExisting()).to.be.true
});

});