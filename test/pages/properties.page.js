var request = require('sync-request');
var uuidV4 = require('uuid/v4');
var moment = require('moment');
var uuid = uuidV4(); 


class Properties {
	get openNavigationDrawer() { return $("//android.widget.ImageButton[@content-desc = 'Open navigation drawer']"); }
	get SettingsLink() { return $("//*[@text = 'Settings']"); }
	get account() { return $("//*[@text = 'Account']"); }
	get about() { return $("//*[@text = 'About']"); }
	get accountToChangeTo() { return $("//*[@text = 'Blu Property Automated test suite office public']"); }
	get backArrowInAccoutPage() { return $("//android.widget.ImageView[@index = '0']"); }
	get ARECproperty() { return $("//*[@text = '2015 AREC Auditorium']"); }
	get kentProperty() { return $("//*[@text = '2/33 Kent Grove']"); }
	get checkinButton() { return $("//*[contains(@resource-id, 'add_visitor_fab')]"); }
	get nextButtonOnCheckinScreen() { return $("//*[@text = 'Next' or @text = 'NEXT']"); }
	get doneButtonOnCheckinScreen() { return $("//*[@text = 'Done' or @text = 'DONE']"); }
	get nameFieldCheckinScreen() { return $("//*[contains(@resource-id, 'name_editText')]"); }
	get firstNameFieldCheckinScreen() { return $("//*[contains(@resource-id, 'firstName_editText')]"); }
	get lastNameFieldCheckinScreen() { return $("//*[contains(@resource-id, 'lastName_editText')]"); }
	get mobileFieldCheckinScreen() { return $("//*[contains(@resource-id, 'mobile_editText')]"); }
	get landlineFieldCheckinScreen() { return $("//*[contains(@resource-id, 'landline_editText')]"); }
	get emailFieldCheckinScreen() { return $("//*[contains(@resource-id, 'email_editText')]"); }
	get addressFieldCheckinScreen() { return $("//*[contains(@resource-id, 'address_editText')]"); }
	get noteFieldCheckinScreen() { return $("//*[contains(@resource-id, 'notes_editText')]"); }
	get testCheckin() { return $("//*[@text = 'Android Test Checkin']"); }
	get moreButtonPropertyActivity() { return $("//*[contains(@resource-id, 'action_more_layout')]"); }
	get addInspectionNote() { return $("//*[@text = 'Add inspection note']"); }
	get addNoteText() { return $("//*[contains(@resource-id, 'add_note_text')]"); }
	get saveButtonAddNoteScreen() { return $("//*[@text = 'Save' or @text = 'SAVE']"); }
	get testNote() { return `android test note ${uuid}`; }
	get testNoteElement() { return $(`//*[@text = 'android test note ${uuid}']`); }
	get contactActivity() { return $("//*[@text = 'Activity']"); }
	get editNote() { return $("//*[@text = 'Edit']"); }
	get testNoteElementEdited() { return $("//*[@text = 'note edited']"); }
	get deleteNote() { return $("//*[@text = 'Delete']"); }
	get openSendDocsView() { return $("//*[@text = 'Send document']"); }
	get sendTheDocs() { return $("//*[contains(@resource-id, 'action_send')]"); }
	get fileSent() { return $("//*[@text = 'logo_13464.GIF']"); }
	get contactDetails() { return $("//*[@text = 'Details']"); }
	get addContactNote() { return $("//*[@text = 'Add Contact Note']"); }
	get testContactNote() { return $("//*[@text = 'test contact note']"); }
	get flag() { return $("//*[@text = 'Flag']"); }
	get unFlag() { return $("//*[@text = 'Unflag']"); }
	get flagIcon() { return $("//*[contains(@resource-id, 'flag_icon')]"); }
	get deleteVisit() { return $("//*[@text = 'Delete visit']"); }
	get vendorNote() { return $("//*[@text = 'Inspection note added (vendor visible)']"); }
	get kioskLink() { return $("//*[@text = 'Kiosk mode']"); }
	get kioskCheckInButtons() { return $("//*[contains(@resource-id, 'checkin_button')]"); }
	get InspectionText() { return $("//*[@text = 'Enjoy your inspection!']"); }
	get kioskTestCheckin() { return $("//*[@text = 'Android checkin kiosk']"); }
	get properties() { return $("//*[@text = 'Properties']"); }
	get testOffice() { return $("//*[@text = 'Blu Property Automated test suite office public']"); }
	get broadcastMessageLink() { return $("//*[@text = 'Broadcast Message']"); }
	get sendMobileBrochure() { return $("//*[@text = 'Send mobile brochure']"); }
	get sendVendorSnapshot() { return $("//*[@text = 'Send vendor snapshot']"); }
	get addVendorLink() { return $("//*[@text = 'Vendor snapshot']"); }
	get addVendor() { return $("//*[@text = 'Auto send']"); }
	get showVendorNotes() { return $("//*[@text = 'Show Vendor Visible Notes ON']"); }
	get hideVendorNotes() { return $("//*[@text = 'Show Vendor Visible Notes OFF']"); }
	get showSendDocs() { return $("//*[@text = 'Show Docs Send ON']"); }
	get hideSendDocs() { return $("//*[@text = 'Show Docs Send OFF']"); }
	get snapshotElement() { return $("//*[contains(@content-desc , '3161')]"); }
	get snapshotElement2() { return $("//*[contains(@content-desc , 'ACTIVITY')]"); }
	get notFollowingProperties() { return $("//*[@text = 'to star a property']"); }
	get detailsTab() { return $("//*[@text = 'DETAILS' or @text = 'Details']"); }
	get testVendor() { return $("//*[@text = 'testVendor']"); }
	get removeVendor() { return $("//*[@text = 'Remove Vendor']"); }
	get nameFieldErrorMessage() { return $("//*[contains(@text , 'be blank')]"); }
	get requiredFeiledError() { return $("//*[@text = 'Please enter a mobile, landline or email']"); }
	get phoneFieldErrorMessage() { return $("//*[@text = 'Invalid phone number']"); }
	get emailFieldErrorMessage() { return $("//*[@text = 'Invalid email address']"); }
	get signIn() { return $("//*[@text = 'Sign in with Mobile']"); }
	get loginMobileFiled() { return $("//android.widget.EditText"); }
	get verificationCodeField() { return $("//*[@text = 'Verification Code']"); }
	get signOut() { return $("//[@text = 'Sign Out']"); }
	get testContactNoteText() { return "test contact note" }
	get editedtNoteText() { return "note edited" }
	get editDetails() { return $("//*[@text = 'Edit details']"); }
	get editCheckin() { return $("//*[@text = 'checkin edited']"); }
	get editedMobile() { return $("//*[@text = '+61 458 485 562']"); }
	get editedEmail() { return $("//*[@text = 'homepasstest@gmail.com']"); }
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
	get backArrowContactDetails() { return $("//*[contains(@content-desc, 'up')]"); }
	get addNoteVisibilitySwitch() { return $("//*[contains(@resource-id, 'add_note_visibility_switch')]"); }
	get propertyDetailsMoreButton() { return $("//*[contains(@resource-id, 'dropdown_menu')]"); }
	get starUnstar() { return $("//*[contains(@resource-id, 'action_star_unstar')]"); }
	get searchPropertyTextBox() { return $("//*[contains(@resource-id, 'search_src_text')]"); }
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

