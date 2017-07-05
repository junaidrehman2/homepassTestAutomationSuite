var request = require('sync-request');
var uuidV4 = require('uuid/v4');
var moment = require('moment');
var uuid = uuidV4(); 


class Properties {
get ser() { return $(`~Search`); }
get Propertiess() { return $(`~Properties`); }
get Contactss() { return $(`~Contacts`); }
get Connect() { return $(`~Connect`); }
get cancelSearch() { return $(`~Cancel`); }
get close() { return $(`~Close`); }
get ok() { return $(`~Ok`); }
get createNewContact() { return $(`~Create new contact`); }
get invalidMobile() { return $(`~Following fields are not valid: Mobile`); }
get invalidEmail() { return $(`~Please enter valid email address.`); }
get enterAddressOnCheckinScreen() { return $(`~Enter address`); }
get testAddress() { return $(`~35 Throsby Crescent, Deer Park`); }
get goBackAndFix() { return $(`~Go Back and Fix`); }
get inspectionNoteWindow() { return $(`~Inspection Note`); }
get deleteNote() { return $(`~Delete`); }
get ele() { return $(`~Junaid`); }
get kioskCloseButton() { return $(`~iconCross`); }
get kioskFirstName() { return $("//XCUIElementTypeTextField[@value = 'First Name']"); }
get kioskLastName() { return $("//XCUIElementTypeTextField[@value = 'Last Name']"); }
get kioskMobile() { return $("//XCUIElementTypeTextField[@value = 'Your Mobile']"); }
get kioskLandline() { return $("//XCUIElementTypeTextField[@value = 'Landline']"); }
get kioskEmail() { return $("//XCUIElementTypeTextField[@value = 'Your Email']"); }
get kioskAddress() { return $("//XCUIElementTypeTextField[@value = 'Your Address']"); }
get kioskSuggestAddress() { return $(`~35 Throsby Crescent, Deer Park, Victoria, Australia`); }
get enjoyYourInspection() { return $(`~Enjoy your inspection!`); }
get events() { return $(`~Events`); }
get calanderEvent() { return $(`~Inspection`); }
get addAttendee() { return $(`~Add Attendee`); }
get testNWSAgencyAccount() { return $("//XCUIElementTypeOther[@name=' ACCOUNTS ']/following-sibling::XCUIElementTypeOther[contains(@name, 'Automated')]"); }
get team() { return $(`~      Team  2 Members `); }
get teamMemberHam() { return $(`~    HK     Ham Khan `); }
get send() { return $(`~Send`); }
get inviteTeamMember() { return $(`~   Invite Team Member`); }
get emailFieldInviteMember() { return $("//XCUIElementTypeStaticText[@name='Invite Team Member']/following-sibling::XCUIElementTypeOther//XCUIElementTypeTextField"); }
get inviteButton() { return $(`~Invite`); }
get homepasstestEmail() { return $(`~homepasstest@gmail.com`); }
get inviteMoreButton() { return $("//XCUIElementTypeOther[@name=' homepasstest@gmail.com Invited a few seconds ago ']//XCUIElementTypeOther/XCUIElementTypeOther[2]"); }
get cancelInvitation() { return $(`~Cancel Invitation`); }
get () { return $("//XCUIElementTypeOther[name='        Settings  Account Settings  Team']/XCUIElementTypeOther/XCUIElementTypeOther"); }
// get () { return $(`~`); }
// get () { return $(`~`); }
// get () { return $(`~`); }
// get () { return $(`~`); }
// get () { return $(`~`); }
// get () { return $(`~`); }
// get () { return $(`~`); }




	get openNavigationDrawer() { return $("//android.widget.ImageButton[@content-desc = 'Open navigation drawer']"); }
	get SettingsLink() { return $(`~Settings`); }
	get account() { return $("//XCUIElementTypeOther[@name = 'Notifications Region Australia Contacts']/following-sibling::XCUIElementTypeOther"); }
	get about() { return $("//*[@text = 'About']"); }
	get accountToChangeTo() { return $("//*[@text = 'Blu Property Automated test suite office public']"); }
	get backArrowInAccoutPage() { return $("//android.widget.ImageView[@index = '0']"); }
	get ARECproperty() { return $(`~2015 AREC Auditorium, Broadbeach`); }
	get kentProperty() { return $(`~2/33 Kent Grove, Caulfield North`); }
	get checkinButton() { return $(`~add contact outlined`); }
	get nextButtonOnCheckinScreen() { return $("//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeStaticText"); }
	get doneButtonOnCheckinScreen() { return $(`~Done`); }
	// /following-sibling::XCUIElementTypeTextField
	get nameFieldCheckinScreen() { return $("//*[contains(@name, 'Name')]/following-sibling::XCUIElementTypeTextField"); }
	get fullNameFieldCheckinScreen() { return $("//*[contains(@name, 'Full')]/following-sibling::XCUIElementTypeTextField"); }
	// get firstNameFieldCheckinScreen() { return $("//*[contains(@resource-id, 'firstName_editText')]"); }
	// get lastNameFieldCheckinScreen() { return $("//*[contains(@resource-id, 'lastName_editText')]"); }
	get mobileFieldCheckinScreen() { return $("//*[contains(@name , 'Mobile')]/following-sibling::XCUIElementTypeTextField"); }
	get landlineFieldCheckinScreen() { return $("//*[contains(@name , 'LandLine')]/following-sibling::XCUIElementTypeTextField"); }
	get emailFieldCheckinScreen() { return $("//*[contains(@name , 'Email')]/following-sibling::XCUIElementTypeTextField"); }
	get addressFieldCheckinScreen() { return $("//*[contains(@name , 'Address')]"); }
	get noteFieldCheckinScreen() { return $(`~Add Note`); }
	get testCheckin() { return $(`~IOS Test Checkin`); }
	get moreButtonPropertyActivity() { return $(`~three dots action`); }
	get addInspectionNote() { return $(`~Add Inspection Note`); }
	get addNoteText() { return $("//XCUIElementTypeTextView"); }
	get saveButtonAddNoteScreen() { return $("//*[contains(@name, 'Save')]"); }
	get testNote() { return `IOS test note ${uuid}`; }
	get testNoteElement() { return $(`~IOS test note ${uuid}`); }
	get contactActivity() { return $(`~Activity`); }
	get editNote() { return $(`~Edit note`); }
	get testNoteElementEdited() { return $(`~note edited`); }
	get deleteNoteLink() { return $(`~Delete Note`); }
	get openSendDocsView() { return $(`~Send Documents`); }
	get fileSent() { return $(`~logo_13464.GIF`); }
	get contactDetails() { return $(`~Details`); }
	get addContactNote() { return $(`~Add Note`); }
	get testContactNote() { return $(`~note`); }
	get flag() { return $(`~Flag`); }
	get unFlag() { return $(`~Unflag`); }
	get flagIcon() { return $("//*[contains(@resource-id, 'flag_icon')]"); }
	get deleteVisit() { return $("//*[@text = 'Delete visit']"); }
	get vendorNote() { return $("//*[@text = 'Inspection note added (vendor visible)']"); }
	get kioskLink() { return $(`~Kiosk Mode`); }
	get kioskCheckInButtons() { return $(`~CHECK IN`); }
	get InspectionText() { return $("//*[@text = 'Enjoy your inspection!']"); }
	get kioskTestCheckin() { return $(`~IOS Kiosk Test`); }
	get properties() { return $("//*[@text = 'Properties']"); }
	get testOffice() { return $("//*[@text = 'Blu Property Automated test suite office public']"); }
	get broadcastMessageLink() { return $("//*[@text = 'Broadcast Message']"); }
	get sendMobileBrochure() { return $(`~Send Mobile Brochure`); }
	get sendVendorSnapshot() { return $(`~Send Vendor Snapshot`); }
	get addVendorLink() { return $(`~Vendor Snapshot`); }
	get addVendor() { return $(`~Add Contact`); }
	get showVendorNotes() { return $("//XCUIElementTypeSwitch[@name = 'Show Vendor Visible Notes']"); }
	get showSendDocs() { return $("//XCUIElementTypeSwitch[@name = 'Show Docs Sent']"); }
	get snapshotElement() { return $(`~Caulfield North VIC 3161`); }
	get snapshotElement2() { return $(`~ACTIVITY`); }
	get notFollowingProperties() { return $(`~to star a property.`); }
	get testVendor() { return $(`~testVendorIOS kiosk`); }
	get removeVendor() { return $("//*[@text = 'Remove Vendor']"); }
	get nameFieldErrorMessage() { return $(`~Fields Required`); }
	get requiredFeiledError() { return $("//*[@text = 'Please enter a mobile, landline or email']"); }
	get phoneFieldErrorMessage() { return $("//*[@text = 'Invalid phone number']"); }
	get emailFieldErrorMessage() { return $("//*[@text = 'Invalid email address']"); }
	get signIn() { return $("//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther"); }
	get loginMobileFiled() { return $("//XCUIElementTypeTextField"); }
	get verificationCodeField() { return $("//*[@text = 'Verification Code']"); }
	get signOut() { return $("//[@text = 'Sign Out']"); }
	get testContactNoteText() { return "note" }
	get editedtNoteText() { return "note edited" }
	get editDetails() { return $(`~Edit Contact Details`); }
	get editCheckin() { return $(`~checkin edited`); }
	get editedMobile() { return $("//*[contains(@name, '458')]"); }
	get editedEmail() { return $(`~homepasstest@gmail.com`); }
	get settingsNotification() { return $("//*[@text = 'Notifications']"); }
	get settingsRegion() { return $("//*[@text = 'Region']"); }
	get settingsContacts() { return $("//*[@text = 'Contacts']"); }
	get inspectionReminderNotifcationOff() { return $("//*[@text = '//*[@text = 'Inspection Reminder']/following-sibling::*[@text = 'OFF']"); }
	get inspectionReminderNotifcationOn() { return $("//*[@text = '//*[@text = 'Inspection Reminder']/following-sibling::*[@text = 'On']']"); }
	get checkInNotificationOff() { return $("//*[@text = 'Check ins']/following-sibling::*[@text = 'OFF']"); }
	get checkInNotificationOn() { return $("//*[@text = 'Check ins']/following-sibling::*[@text = 'ON']"); }
	get regionSearch() { return $("//android.widget.EditText"); }
	get regionAustralia() { return $("//*[@text = 'Australia']"); }
	get regionNewZealand() { return $("//*[@text = 'New Zealand']"); }
	get regionPakistan() { return $("//*[@text = 'Pakistan']"); }
	get regionBackButton() { return $("//android.view.ViewGroup[android.widget.TextView[@text =  'Region']]/preceding-sibling::android.view.ViewGroup"); }
	get phoneContactsOFF() { return $("//*[@text = 'Phone Contacts']/../following-sibling::android.view.ViewGroup[android.widget.Switch[@text = 'OFF']]"); }
	get phoneContactsOn() { return $("//*[@text = 'Phone Contacts']/../following-sibling::android.view.ViewGroup[android.widget.Switch[@text = 'ON']]"); }
	get contactsBackButton() { return $("//android.view.ViewGroup[android.widget.TextView[@text =  'Contacts']]/preceding-sibling::android.view.ViewGroup"); }
	get checkInInvalidNo() { return $("//*[@text = 'Yes, check in']"); }
	get dontCheckinInvalidNo() { return $("//*[@text = 'No']"); }
	get InvalidMobile() { return $("//*[@text = 'Invalid mobile']"); }
	// get () { return $("//*[@text = '']"); }
	// get () { return $("//*[@text = '']"); }
	// get () { return $("//*[@text = '']"); }
	// get () { return $("//*[@text = '']"); }
	// get () { return $("//*[@text = '']"); }
	// get () { return $("//*[@text = '']"); }
	// get () { return $("//*[@text = '']"); }



	get propertySearchButton() { return $("//*[contains(@resource-id, 'action_search')]"); }
	get backArrowContactDetails() { return $(`~Back`); }
	get addNoteVisibilitySwitch() { return $("//XCUIElementTypeSwitch"); }
	get propertyDetailsMoreButton() { return $(`~nav three dots action`); }
	get starUnstar() { return $(`~follow property`); }
	get searchPropertyTextBox() { return $(`~Search`); }
	get searchCloseButton() { return $("//*[contains(@resource-id, 'search_close_btn')]"); }
	get loading() { return $("//*[contains(@resource-id, 'loading')]"); }
	get signOutDialog() { return $("//*[contains(@resource-id, 'button2')]"); }
	get saveEditedContact() { return $("//*[contains(@resource-id, 'action_save')]"); }
	get editContactDetailsNametextBox() { return $("//*[contains(@resource-id, 'contact_details_name')]"); }
	get editContactDetailsMobiletextBox() { return $("//*[contains(@resource-id, 'contact_details_mobile')]"); }
	get editContactDetailsEmailtextBox() { return $("//*[contains(@resource-id, 'contact_details_email')]"); }
	// get () { return $("//*[contains(@resource-id, '')]"); }

	// get () { return $("//*[contains(@resource-id, '')]"); }
	// get () { return $("//*[contains(@resource-id, '')]"); }
	// get () { return $("//*[contains(@resource-id, '')]"); }
	// get () { return $("//*[contains(@resource-id, '')]"); }
	// get () { return $("//*[contains(@resource-id, '')]"); }
	// get () { return $("//*[contains(@resource-id, '')]"); }
	get backButtonSearchBar() { return $("//*[@content-desc = 'Collapse']"); }
	// get () { return $(""); }
	// get () { return $(""); }
	// get () { return $(""); }
	// get () { return $(""); }
	// get () { return $(""); }
	// get () { return $(""); }
	// get () { return $(""); }
	// get () { return $(""); }


    getCode() {
    	var res = request('GET', "https://api.twilio.com/2010-04-01/Accounts/ACbabcc8fc9feb3cc2304ebe6b199bfae4/Messages.json?To=61406111989", {
    		headers: {authorization: 'Basic ' + Buffer('ACbabcc8fc9feb3cc2304ebe6b199bfae4:d015bbb6524457003ce07ff2eae300e3').toString('base64')} 
    	}); 

    	var code = JSON.parse(res.getBody().toString('utf8')).messages[0].body;
    	return code.substring(code.length - 4);
    }


    compareDates(minToSubtract, checkinDate){
    	return moment().subtract(minToSubtract, 'minutes') <  moment(checkinDate)? true : false;
    }
}

module.exports = new Properties();

