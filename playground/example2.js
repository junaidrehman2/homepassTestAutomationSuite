// // var accountPreferences  = require('./pages/accountPreferences.page.js');
// var properties  = require('../test/pages/properties.page.js');

//  // var email  = userDetails.email.getText();
//       // var details  = accountPreferences.getAccount('58d3113e5fad1b0e1c293bdd');
//       // console.log(details.name);  


//       var details  = properties.addCheckin(); 
//       console.log(details);  


var b64string = "Listing:546e8dd815e0475aca0efe82";
var buf = Buffer.from(b64string, 'utf8').toString('base64'); // Ta-da
console.log(buf); 