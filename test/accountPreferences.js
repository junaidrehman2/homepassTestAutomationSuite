  var accountPreferences  = require('./pages/accountPreferences.page.js');
  var account = {}; 

  describe('account preferences', function() {

    it('account name should match', function() {
      accountPreferences.img.waitForExist(5000);	
      accountPreferences.img.click();
      accountPreferences.selectedAccount.waitForExist(5000);
      accountPreferences.selectedAccount.click()
      browser.pause(1000);	
      accountPreferences.settings.waitForExist(5000);
      accountPreferences.settings.click();
      accountPreferences.accountPreferenceElement.waitForExist(5000);
      accountPreferences.accountPreferenceElement.click();
      accountPreferences.accountName.waitForExist(5000);
      var accountName  = accountPreferences.accountName.getText();
      account  = accountPreferences.getAccount(accountPreferences.homepassId.getText());  
      expect(accountName).to.equal(account.name);

    });

    it('address should match', function() {
      var address  =  accountPreferences.address.getText(); 
      expect(address).to.contain(account.streetName);
      expect(address).to.contain(account.locality);
    });

    it('mobile should match', function() {
      var phone = accountPreferences.phone.getText()
      if(phone != '') {
      	expect(phone).to.equal(account.phone);
      }else{
      	expect(phone).to.equal('');
      }
    });

    it('logo should match', function() {
      var logo  =  accountPreferences.logo.getAttribute('src'); 
      expect(logo).to.equal(account.imageUrl);
    });

    it('office colors should match', function() {
      var primaryColour  =  accountPreferences.primaryColour.getText(); 
      var accentColour  =  accountPreferences.accentColour.getText(); 
      expect(primaryColour).to.equal(account.primaryColor);
      expect(accentColour).to.equal(account.accentColor);
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