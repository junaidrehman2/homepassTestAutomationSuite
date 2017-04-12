var request = require('sync-request');

class UserDetails {
  get settings() { return $("//a//span[text() = 'settings']"); }
  get profile() { return $("a[href$='profile']"); }
  get name() { return $("//div[text()='Name']/following-sibling::div"); }
  get email() { return $("//div[text()='Email']/following-sibling::div"); }
  get mobile() { return $("//div[text()='Mobile']/following-sibling::div"); }

  getUser(email) {
    var res = request('POST', browser.options.testApiUrl+'csm/v1/accountUsers', {
      headers: {Authorization : 'Basic EvdaQ5PHdmemnssnT9LmQ66T7Q3s4Ey8'}, 
      json: { email : email }
    }); 
    var accountUser = JSON.parse(res.getBody().toString('utf8'));
    return accountUser.accountUsers[0];
  }
}

module.exports = new UserDetails();