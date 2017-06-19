var request = require('sync-request');

class Settings {

	get sendBrochureSwitchOn() { return $("//android.widget.Switch[@text = 'ON']"); }
	get sendBrochureSwitchOff() { return $("//android.widget.Switch[@text = 'OFF']"); }
	get adminLabel() { return $("//*[@text = 'ADMIN']"); }
	get teamMemberHam() { return $("//*[@text = 'Junaid Rehman']"); }
	get moreButtonTeam() { return $("//*[@text = 'Ham Khan']/following-sibling::android.view.ViewGroup[android.widget.ImageView]"); }
	get testNWSAgencyAccount() { return $("//*[contains(@text, 'Regent')]"); }
	get team() { return $("//*[@text = 'Team']"); }
	get removeAdminPrivileges() { return $("//*[@text = 'Remove Admin Privileges']"); }
	get removeFromTeam() { return $("//*[@text = 'Remove from Team']"); }
	get grantAdminPrivileges() { return $("//*[@text = 'Grant Admin Privileges']"); }
	get hamAdmin() { return $("//*[@text = 'Ham Khan']/following-sibling::android.view.ViewGroup[android.widget.TextView]"); }
  get mobileBrochureToggleOff() { return $("//*[@text = 'OFF']"); }
  get mobileBrochureToggleOn() { return $("//*[@text = 'ON']"); }
  get backButtonAccountPage() { return $("//android.view.ViewGroup[*[@text = 'Account Settings']]/preceding-sibling::android.view.ViewGroup"); }
    get backButtonTeamPage() { return $("//android.view.ViewGroup[*[@text = 'Team']]/preceding-sibling::android.view.ViewGroup"); }
get inviteTeamMember() { return $("//*[@text = '+']"); }
  get inviteButton() { return $("//*[@text = 'Invite']"); }
  get homepasstestEmail() { return $("//*[@text = 'homepasstest@gmail.com']"); }
  // get () { return $("//*[@text = '']"); }
  // get () { return $("//*[@text = '']"); }


  get emailFieldInviteMember() { return $("//*[contains(@resource-id, 'input')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
    // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
    // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
    // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
}

module.exports = new Settings();

//android.widget.TextView[@text = 'Junaid Rehman']]/following-sibling::android.view.ViewGroup[not(@text = 'ADMIN')]