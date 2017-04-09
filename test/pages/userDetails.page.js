var request = require('sync-request');

class UserDetails {
  get settings() { return $("//a//span[text() = 'settings']"); }
  get profile() { return $("a[href$='profile']"); }
  get name() { return $("//div[text()='Name']/following-sibling::div"); }
  get email() { return $("//div[text()='Email']/following-sibling::div"); }
  get mobile() { return $("//div[text()='Mobile']/following-sibling::div"); }

  getUser(email) {
  	var res = request('GET', 'http://localhost:3009/accountuser/'+email);
    var accountuser = JSON.parse(res.getBody().toString('utf8'));
    return accountuser.accountUser[0]; 
  }
}

module.exports = new UserDetails();