// var accountPreferences  = require('./pages/accountPreferences.page.js');
var properties  = require('./pages/properties.page.js');

 // var email  = userDetails.email.getText();
      // var details  = accountPreferences.getAccount('58d3113e5fad1b0e1c293bdd');
      // console.log(details.name);  


      var details  = properties.getProperty('548e62854be1d336770d7a83');
      console.log(details.mimeLinks.length);  