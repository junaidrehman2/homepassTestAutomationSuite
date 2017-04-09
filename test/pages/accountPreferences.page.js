var request = require('sync-request');

class accountPreferences {

	get img() { return $("img[size]"); }
	get selectedAccount() { return $("//div[text()='Blu Property Automated test suite office public']"); }
	get settings() { return $("//a//span[text() = 'settings']"); }
	get accountPreferenceElement() { return $("//div[text()='Account Preferences']"); }
	get accountName() { return $("//div[text()='Display Name']/following-sibling::div"); }
	get address() { return $("//div[text()='Address']/following-sibling::div"); }
	get phone() { return $("//div[text()='Phone']/following-sibling::div"); }
	get homepassId() { return $("//div[text()='Homepass ID']/following-sibling::div"); }
	get logo() { return $("//div[text()='Logo']/following-sibling::div//img"); }
	get primaryColour() { return $("//div[text()='Primary Colour']/following-sibling::div"); }
	get accentColour() { return $("//div[text()='Accent Colour']/following-sibling::div"); }
	get autoSend() { return $("//div[text()='Auto Send']//parent::*//input"); }
	get smsSenderName() { return $("//div[text()='SMS Sender Name']/following-sibling::div"); }
	get autoJoin() { return $("//div[text()='Auto join']//parent::*//input"); }


	getAccount(account) {
		// var res = request('POST', 'https://data-staging.homepass.com/csm/v1/accounts', {
		// 	headers: {Authorization : 'Basic EvdaQ5PHdmemnssnT9LmQ66T7Q3s4Ey8'}, 
		// 	json: { accountId : account }
		// }); 

		var res = request('GET', browser.options.testApiUrl+'account/'+account);
		var account = JSON.parse(res.getBody().toString('utf8'));
		return account.account; 
	}
}

module.exports = new accountPreferences();