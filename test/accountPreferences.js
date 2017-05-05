  var accountPreferences  = require('./pages/accountPreferences.page.js');
  var account = {}; 

  describe('account preferences', function() {

    it('account name should match', function() {
      accountPreferences.img.waitForExist();	
      accountPreferences.img.click();
      accountPreferences.selectedAccount.waitForExist();
      accountPreferences.selectedAccount.click()
      browser.pause(1000);	
      accountPreferences.settings.waitForExist();
      accountPreferences.settings.click();
      accountPreferences.accountPreferenceElement.waitForExist();
      accountPreferences.accountPreferenceElement.click();
      accountPreferences.accountName.waitForExist();
      var accountName  = accountPreferences.accountName.getText();
      account  = accountPreferences.getAccount(accountPreferences.homepassId.getText());  
      expect(accountName).to.equal(account.name);

    });

    it('sms sender name should match', function() {
      var smsSenderName  =  accountPreferences.smsSenderName.getText(); 
      expect(smsSenderName).to.equal(account.smsFrom);
    });

    it('auto send sms flag should match the backend', function() {
      var autoSend  =  accountPreferences.autoSend.isSelected(); 
      expect(autoSend).to.equal(account.enableWelcomeSms);
    });

    it('auto join flag should match the backend', function() {
      var autoJoin  =  accountPreferences.autoJoin.isSelected(); 
      expect(autoJoin).to.equal(account.allowAutoJoin);
    });
  });