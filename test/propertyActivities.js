const propertyPage  = require('./pages/properties.page.js')
const bookings  = require('./pages/bookings.page.js')
const settings  = require('./pages/settings.page.js')
const uuidV4 = require('uuid/v4')
// const db  = require('../db/dbController')
var waitFlag = false 
var dataBacked = null
var noteId = null
var contactId = "593a2be639ffad107d2c998e"
var checkinId = null
var vendorId = null
var attendeeId = null


describe('property activities', function() {

	it('should login', function() {
		propertyPage.signIn.waitForExist()
		propertyPage.signIn.click()
		propertyPage.loginMobileFiled.waitForExist()
		propertyPage.loginMobileFiled.addValue("0406111989")
		propertyPage.nextButtonOnCheckinScreen.click()
		propertyPage.loginMobileFiled.waitForExist()
		propertyPage.loginMobileFiled.addValue(propertyPage.getCode())
		propertyPage.nextButtonOnCheckinScreen.click()
	});

	it('should change account', function() {	
		propertyPage.openNavigationDrawer.waitForExist()
		propertyPage.openNavigationDrawer.click()
		propertyPage.SettingsLink.waitForExist()
		propertyPage.SettingsLink.click()
		propertyPage.account.waitForExist()
		propertyPage.account.click()
		propertyPage.accountToChangeTo.waitForExist()
		propertyPage.accountToChangeTo.click()
		browser.pause(2000)
		propertyPage.backArrowInAccoutPage.click()     
		propertyPage.ARECproperty.waitForExist()
		expect(propertyPage.ARECproperty.isExisting()).to.be.true
	});

	
	it('should search property', function() {	
		propertyPage.propertySearchButton.waitForExist()
		propertyPage.propertySearchButton.click()
		propertyPage.searchPropertyTextBox.waitForExist()
		propertyPage.searchPropertyTextBox.addValue('kent')
		browser.pause(1000)
		expect(propertyPage.kentProperty.isExisting()).to.be.true
		expect(propertyPage.ARECproperty.isExisting()).to.be.false
		propertyPage.searchCloseButton.waitForExist()
		propertyPage.backButtonSearchBar.click()
		browser.pause(2000)
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
		db.getFollowing('57e0cd6275200bef3697766f', '5588c2e8b91d24fd0f43a8a0', (data) => {
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
		db.getFollowing('57e0cd6275200bef3697766f', '5588c2e8b91d24fd0f43a8a0', (data) => {
			dataBacked = data
			waitFlag = true
		});
		browser.waitUntil(function () { return waitFlag != false})
		expect(dataBacked.status).to.equal('deleted')
	});

	it('should go to vendor snapshot', function() {	
		propertyPage.propertyDetailsMoreButton.click()
		propertyPage.sendVendorSnapshot.waitForExist()
		propertyPage.sendVendorSnapshot.click()
		propertyPage.snapshotElement.waitForExist()
		expect(propertyPage.snapshotElement.isExisting()).to.be.true
		expect(propertyPage.snapshotElement2.isExisting()).to.be.true
		propertyPage.backArrowContactDetails.click()
	});

	it('should go to brochoure', function() {	
		propertyPage.propertyDetailsMoreButton.waitForExist()
		propertyPage.propertyDetailsMoreButton.click()
		propertyPage.sendMobileBrochure.waitForExist()
		propertyPage.sendMobileBrochure.click()
		propertyPage.snapshotElement.waitForExist()
		expect(propertyPage.snapshotElement.isExisting()).to.be.true
		expect(propertyPage.snapshotElement2.isExisting()).to.be.false
		propertyPage.backArrowContactDetails.click()

	});

	it('should validate checkin data', function() {	
		waitFlag = false
		propertyPage.checkinButton.waitForExist()
		propertyPage.checkinButton.click()
		propertyPage.nextButtonOnCheckinScreen.waitForExist()
		propertyPage.nextButtonOnCheckinScreen.click()
		propertyPage.doneButtonOnCheckinScreen.waitForExist()
		propertyPage.doneButtonOnCheckinScreen.click()
		propertyPage.nameFieldErrorMessage.waitForExist()
		expect(propertyPage.nameFieldErrorMessage.isExisting()).to.be.true
		propertyPage.nameFieldCheckinScreen.addValue('Android Test Checkin')
		propertyPage.doneButtonOnCheckinScreen.click()
		propertyPage.requiredFeiledError.waitForExist()
		expect(propertyPage.requiredFeiledError.isExisting()).to.be.true
		propertyPage.mobileFieldCheckinScreen.addValue('0406')
		propertyPage.doneButtonOnCheckinScreen.click()
		propertyPage.phoneFieldErrorMessage.waitForExist()
		expect(propertyPage.phoneFieldErrorMessage.isExisting()).to.be.true
		propertyPage.mobileFieldCheckinScreen.setValue('0406111989')
		propertyPage.emailFieldCheckinScreen.addValue('homepasstest')
		propertyPage.doneButtonOnCheckinScreen.click()
		propertyPage.emailFieldErrorMessage.waitForExist()
		expect(propertyPage.emailFieldErrorMessage.isExisting()).to.be.true
		propertyPage.emailFieldCheckinScreen.setValue('junaid@homepass.com')
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
		expect(dataBacked.fullName).to.equal('Android Test Checkin')
		expect(propertyPage.compareDates(2, dataBacked.checkinDate)).to.be.true
	});

	it('should add inspection note', function() {
		waitFlag = false	
		propertyPage.moreButtonPropertyActivity.waitForExist()
		propertyPage.moreButtonPropertyActivity.click()
		propertyPage.addInspectionNote.waitForExist()
		propertyPage.addInspectionNote.click()
		propertyPage.testCheckin.waitForExist()
		propertyPage.addNoteText.addValue(propertyPage.testNote)
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
		propertyPage.saveButtonAddNoteScreen.click(); 
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.testCheckin.waitForExist()
		propertyPage.testCheckin.click()
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
		propertyPage.deleteNote.waitForExist()
		propertyPage.deleteNote.click()
		propertyPage.contactActivity.waitForExist()
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
		propertyPage.sendTheDocs.waitForExist()
		propertyPage.sendTheDocs.click()
		propertyPage.contactActivity.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.testCheckin.waitForExist()
		propertyPage.testCheckin.click()
		propertyPage.fileSent.waitForExist()
		expect(propertyPage.fileSent.isExisting()).to.be.true
	});


	it('should add contact note', function() {
		waitFlag = false
		propertyPage.contactDetails.click()
		propertyPage.addContactNote.waitForExist()
		propertyPage.addContactNote.click()	
		propertyPage.addNoteText.addValue(propertyPage.testContactNoteText)
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
		propertyPage.addNoteText.addValue('note edited')
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
		propertyPage.flagIcon.waitForExist()
		expect(propertyPage.flagIcon.isExisting(), 'Flag not visible on screen').to.be.true
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
		propertyPage.backArrowContactDetails.click()
		propertyPage.kentProperty.click()
		expect(propertyPage.flagIcon.isVisible()).to.be.false
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
		propertyPage.detailsTab.waitForExist()
		propertyPage.detailsTab.click()
		propertyPage.editDetails.waitForExist()
		propertyPage.editDetails.click()
		propertyPage.saveEditedContact.waitForExist()
		propertyPage.editContactDetailsNametextBox.setValue('checkin edited')
		propertyPage.editContactDetailsMobiletextBox.setValue('0458485562')
		propertyPage.editContactDetailsEmailtextBox.setValue('homepasstest@gmail.com')
		propertyPage.saveEditedContact.click()
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.ARECproperty.waitForExist()
		propertyPage.ARECproperty.swipeDown(700, 300)
		browser.pause(3000)
		propertyPage.kentProperty.click()
		propertyPage.editCheckin.waitForExist()
		propertyPage.editCheckin.click()
		propertyPage.detailsTab.waitForExist()
		propertyPage.detailsTab.click()
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
		waitFlag = false
		propertyPage.backArrowContactDetails.click()
		propertyPage.moreButtonPropertyActivity.waitForExist()
		propertyPage.moreButtonPropertyActivity.click()
		propertyPage.deleteVisit.waitForExist()
		propertyPage.deleteVisit.click()
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
		propertyPage.doneButtonOnCheckinScreen.waitForExist()
		propertyPage.firstNameFieldCheckinScreen.addValue('Android checkin')
		propertyPage.lastNameFieldCheckinScreen.addValue('kiosk')
		propertyPage.mobileFieldCheckinScreen.addValue('0458485562')
		propertyPage.landlineFieldCheckinScreen.addValue('04534343')
		propertyPage.emailFieldCheckinScreen.addValue('junaid@homepass.com')
		propertyPage.addressFieldCheckinScreen.addValue('35 Throsby Cres, Deer Park VIC 3023, Australia')
		propertyPage.doneButtonOnCheckinScreen.click()
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.kentProperty.waitForExist()
		propertyPage.kentProperty.click()
		propertyPage.kioskTestCheckin.waitForExist()
		expect(propertyPage.kioskTestCheckin.isExisting()).to.be.true; 
		propertyPage.moreButtonPropertyActivity.waitForExist()
		propertyPage.moreButtonPropertyActivity.click()
		propertyPage.deleteVisit.waitForExist()
		propertyPage.deleteVisit.click()
	});

	it('add a vendor', function() {
		waitFlag = false
		propertyPage.detailsTab.waitForExist()
		propertyPage.detailsTab.click()
		propertyPage.addVendorLink.waitForExist()
		propertyPage.addVendorLink.click()
		propertyPage.addVendor.waitForExist()
		propertyPage.addVendor.click()
		bookings.addAttendee.waitForExist()
		bookings.addAttendee.click()
		propertyPage.nextButtonOnCheckinScreen.waitForExist()
		propertyPage.nextButtonOnCheckinScreen.click()
		propertyPage.doneButtonOnCheckinScreen.waitForExist()
		propertyPage.nameFieldCheckinScreen.addValue('testVendor')
		propertyPage.mobileFieldCheckinScreen.addValue('0406111989')
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
		expect(dataBacked.fullName).to.equal('testVendor')
	});

	it('remove vendor', function() {
		waitFlag = false	
		bookings.attendeeMoreButton.click()
		propertyPage.removeVendor.waitForExist()
		propertyPage.removeVendor.click()
		propertyPage.backArrowContactDetails.click()
		propertyPage.addVendor.waitForExist()
		propertyPage.addVendor.click()
		bookings.addAttendee.waitForExist()        
		expect(propertyPage.testVendor.isExisting()).to.be.false
		propertyPage.backArrowContactDetails.click()
		db.getVendorById(vendorId, (data) => {
			dataBacked = data
			waitFlag = true	
		});
		browser.waitUntil(function () { return waitFlag != false})
		expect(dataBacked.status).to.equal('deleted')
	});

	it('show docs sent and notes on VendorSnapshot', function() {
		waitFlag = false	
		propertyPage.addVendor.waitForExist()
		propertyPage.hideSendDocs.click()
		propertyPage.hideVendorNotes.click()
		browser.pause(1000)
		expect(propertyPage.hideSendDocs.isExisting()).to.be.false
		expect(propertyPage.hideVendorNotes.isExisting()).to.be.false
		db.getPropertyById(browser.options.propertyOpt, (data) => {
			dataBacked = data
			waitFlag = true	
		});
		browser.waitUntil(function () { return waitFlag != false})
		expect(dataBacked.liveView.showDocsSentActivities).to.be.true
		expect(dataBacked.liveView.showNoteActivities).to.be.true
		propertyPage.showSendDocs.click()
		propertyPage.showVendorNotes.click()
		browser.pause(1000)
		propertyPage.backArrowContactDetails.click()
	});

	it('should add a new attendee', function() {
		waitFlag = false	
		bookings.events.waitForExist()
		bookings.events.click()
		bookings.calanderEvent.waitForExist()
		bookings.calanderEvent.click()
		bookings.calanderEvent.waitForExist()
		bookings.addAttendee.waitForExist()
		bookings.addAttendee.click()
		propertyPage.nextButtonOnCheckinScreen.waitForExist()
		propertyPage.nextButtonOnCheckinScreen.click()
		propertyPage.doneButtonOnCheckinScreen.waitForExist()
		propertyPage.nameFieldCheckinScreen.addValue('Android Test Checkin')
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
		waitFlag = false
		bookings.attendeeMoreButton.waitForExist()
		bookings.attendeeMoreButton.click()
		bookings.removeAttendee.waitForExist()
		bookings.removeAttendee.click()
		propertyPage.backArrowContactDetails.click()   
		bookings.calanderEvent.waitForExist()
		bookings.calanderEvent.click()
		bookings.calanderEvent.waitForExist()
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

	it('promote team member to admin', function() {
		waitFlag = false
		propertyPage.openNavigationDrawer.waitForExist()
		propertyPage.openNavigationDrawer.click()
		propertyPage.SettingsLink.waitForExist()
		propertyPage.SettingsLink.click()
		propertyPage.account.waitForExist()
		propertyPage.account.swipeUp(700, 300)
		settings.testNWSAgencyAccount.waitForExist()
		settings.testNWSAgencyAccount.click()
		settings.team.waitForExist()
		settings.team.click()
		settings.teamMemberHam.waitForExist()
		settings.moreButtonTeam.click()
		settings.grantAdminPrivileges.waitForExist()
		settings.grantAdminPrivileges.click()
		settings.hamAdmin.waitForExist()
		expect(settings.hamAdmin.isExisting()).to.be.true
		browser.pause(1000)
		db.getAccountMembership(browser.options.userIdForPromoteDemoteUserOpt, (data) => {
			dataBacked = data
			waitFlag = true	
		});
		browser.waitUntil(function () { return waitFlag != false})
		expect(dataBacked.role).to.equal('admin')
		
	});


	it('demote team member to admin', function() {
		waitFlag = false
		settings.moreButtonTeam.click()
		settings.removeAdminPrivileges.waitForExist()
		settings.removeAdminPrivileges.click()
		settings.hamAdmin.waitForExist()
		expect(settings.hamAdmin.isExisting()).to.be.false
		browser.pause(1000)
		db.getAccountMembership(browser.options.userIdForPromoteDemoteUserOpt, (data) => {
			dataBacked = data
			waitFlag = true	
		});
		browser.waitUntil(function () { return waitFlag != false})
		expect(dataBacked.role).to.equal('user')
	});

	it('should Invite team member', function() {
		settings.inviteTeamMember.click()
		settings.emailFieldInviteMember.waitForExist()
		settings.emailFieldInviteMember.click()
		settings.emailFieldInviteMember.setValue("homepasstest@gmail.com")
		settings.inviteButton.click()
		browser.pause(4000)
		expect(settings.homepasstestEmail.isExisting()).to.be.true
	});

	it('should send mobile brocuhre on checkin', function() {
		settings.backButtonTeamPage.click()
		settings.mobileBrochureToggleOff.waitForExist()
		settings.mobileBrochureToggleOff.click()
		settings.backButtonAccountPage.click()
		propertyPage.backArrowInAccoutPage.waitForExist()     
		propertyPage.backArrowInAccoutPage.click()     
		propertyPage.ARECproperty.waitForExist()
		propertyPage.ARECproperty.click() 
		propertyPage.checkinButton.waitForExist()
		propertyPage.checkinButton.click()
		propertyPage.nextButtonOnCheckinScreen.waitForExist()
		propertyPage.nextButtonOnCheckinScreen.click()
		propertyPage.landlineFieldCheckinScreen.swipeUp(700, 300)
		browser.pause(2000)
		expect(settings.mobileBrochureToggleOn.isExisting()).to.be.true
	});

	it('should not send mobile brocuhre on checkin', function() {
		propertyPage.backArrowContactDetails.click()
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.openNavigationDrawer.waitForExist()
		propertyPage.openNavigationDrawer.click()
		propertyPage.SettingsLink.waitForExist()
		propertyPage.SettingsLink.click()
		propertyPage.account.waitForExist()
		propertyPage.account.swipeUp(700, 300)
		settings.testNWSAgencyAccount.waitForExist()
		settings.testNWSAgencyAccount.click()
		settings.mobileBrochureToggleOn.waitForExist()
		settings.mobileBrochureToggleOn.click()
		browser.pause(1000)
		settings.backButtonAccountPage.click()
		propertyPage.backArrowInAccoutPage.waitForExist()     
		propertyPage.backArrowInAccoutPage.click()     
		propertyPage.ARECproperty.waitForExist()
		propertyPage.ARECproperty.click() 
		propertyPage.checkinButton.waitForExist()
		propertyPage.checkinButton.click()
		propertyPage.nextButtonOnCheckinScreen.waitForExist()
		propertyPage.nextButtonOnCheckinScreen.click()
		propertyPage.landlineFieldCheckinScreen.swipeUp(700, 300)
		browser.pause(2000)
		expect(settings.mobileBrochureToggleOn.isExisting()).to.be.false
	});



	it('should change region', function() {	
	propertyPage.backArrowContactDetails.click()
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.backArrowContactDetails.waitForExist()
		propertyPage.backArrowContactDetails.click()
		propertyPage.openNavigationDrawer.waitForExist()
		propertyPage.openNavigationDrawer.click()
		propertyPage.SettingsLink.waitForExist()
		propertyPage.SettingsLink.click()
		propertyPage.settingsRegion.waitForExist()
		propertyPage.settingsRegion.click()
		propertyPage.regionNewZealand.waitForExist()
		propertyPage.regionNewZealand.click()
		propertyPage.regionBackButton.click()
		propertyPage.backArrowInAccoutPage.waitForExist()     
		propertyPage.backArrowInAccoutPage.click()    
		propertyPage.ARECproperty.waitForExist()
		propertyPage.ARECproperty.click()
		propertyPage.checkinButton.waitForExist()
		propertyPage.checkinButton.click()
		propertyPage.nextButtonOnCheckinScreen.waitForExist()
		propertyPage.nextButtonOnCheckinScreen.click()
        propertyPage.nameFieldCheckinScreen.waitForExist()
		propertyPage.nameFieldCheckinScreen.addValue('Aus Mobile')
		propertyPage.mobileFieldCheckinScreen.setValue('0406111989')
		propertyPage.doneButtonOnCheckinScreen.click()
		propertyPage.InvalidMobile.waitForExist()
		expect(propertyPage.InvalidMobile.isExisting()).to.be.true
		propertyPage.dontCheckinInvalidNo.click()
		propertyPage.mobileFieldCheckinScreen.setValue('021123456')
		propertyPage.doneButtonOnCheckinScreen.click()
		propertyPage.checkinButton.waitForExist()
		expect(propertyPage.checkinButton.isExisting()).to.be.true
	});

it('should search region', function() {	
		propertyPage.backArrowContactDetails.click()
		propertyPage.openNavigationDrawer.waitForExist()
		propertyPage.openNavigationDrawer.click()
		propertyPage.SettingsLink.waitForExist()
		propertyPage.SettingsLink.click()
		propertyPage.settingsRegion.waitForExist()
		propertyPage.settingsRegion.click()
		propertyPage.regionSearch.waitForExist()
		propertyPage.regionSearch.setValue('Pakistan')
		browser.pause(2000)
		expect(propertyPage.regionAustralia.isExisting()).to.be.false
		expect(propertyPage.regionPakistan.isExisting()).to.be.true
		propertyPage.regionSearch.clearElement()
		browser.pause(1000)
		propertyPage.regionAustralia.click()
		propertyPage.regionAustralia.click()
		propertyPage.regionBackButton.click()
	});



	it('should logout', function() {	
		db.closeMongoConnection()
		propertyPage.account.waitForExist()
		propertyPage.account.swipeUp(700, 300)
		propertyPage.about.waitForExist()
		propertyPage.about.click()
		propertyPage.signOut.waitForExist()
		propertyPage.signOut.click()
		propertyPage.signOutDialog.waitForExist()
		propertyPage.signOutDialog.click()
		propertyPage.signIn.waitForExist()
		expect(propertyPage.signIn.isExisting()).to.be.true
	});

});