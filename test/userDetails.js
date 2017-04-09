  var userDetails  = require('./pages/userDetails.page.js');
  var user = {}; 

  describe('user details', function() {

    it('email should match', function() {
      userDetails.settings.waitForExist(5000);
      userDetails.settings.click();
      userDetails.profile.waitForExist(5000);
      userDetails.profile.click();
      userDetails.email.waitForExist(5000);
      var email  = userDetails.email.getText();
      user  = userDetails.getUser(email);  
      expect(email).to.equal(user.email);

    });

    it('name should match', function() {
      var name  =  userDetails.name.getText(); 
      expect(name).to.equal(user.name);
    });

    it('mobile should match', function() {
      var mobile = userDetails.mobile.getText()
      expect(mobile).to.equal(user.mobile);
    });
  });