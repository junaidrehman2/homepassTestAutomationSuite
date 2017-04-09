class Login {
  get email() { return $("#Email"); }
  get next() { return $("#next"); }
  get pass() { return $("#Passwd"); }
  get signIn() { return $("#signIn"); }
  get loginGoogle() { return $("div[title='Login with Google']"); }
  get users() {return $("//span[text() = 'Users']")}
  get userSearch() { return $(".js-user-input"); }
  get clickUser() { return $("//a [text() = 'Junaid Rehman']"); }
  get sigInAs() { return $(".sign-in-as-user"); }
  get selectStaging() { return $("//a[contains(.,'Homepass Staging')]"); }
  get impersontateSelector() { return $("#impersonate-callback-url-selector"); }
  get envToSelect() { return 'https://sandbox-domain-webapp.homepass.com'; }
  get clientAppButton() { return $("#impersonate-client-button"); }



  googleLogin(email, pass) {
    browser.url('/');
    browser.pause(1000);
    this.loginGoogle.click();
    browser.pause(1000);
    this.email.setValue(email);
    this.next.click();
    browser.pause(1000);
    this.pass.setValue(pass);
    this.signIn.click();
    browser.pause(1000);
    this.users.click();
    browser.pause(1000);
    this.userSearch.click();
    this.userSearch.setValue('Rehman')
    browser.keys("Enter");
    browser.pause(1000);
    this.clickUser.click();
    browser.pause(1000);
    this.sigInAs.click();
    browser.pause(1000);
    this.selectStaging.click();
    this.impersontateSelector.selectByValue(this.envToSelect);
    browser.pause(1000);
    this.clientAppButton.click();
  }
}

module.exports = new Login();
