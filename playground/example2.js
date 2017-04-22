var request = require('sync-request');
var moment = require('moment-timezone');
// // var accountPreferences  = require('./pages/accountPreferences.page.js');
var properties  = require('../test/pages/properties.page.js');
var property = properties.getProperty('548e62854be1d336770d7a83');

//  // var email  = userDetails.email.getText();
//       // var details  = accountPreferences.getAccount('58d3113e5fad1b0e1c293bdd');
//       // console.log(details.name);  
var formatedOfis = []

//       var details  = properties.addCheckin(); 
var da = new Date().toISOString();
var b  =  property.ofis.filter(function(item, index, array){
        console.log(item.start+"          d------------"+da);

        return item.start > da;

    })
console.log(b.length)
      
      // console.log(

      	b.forEach(function (ofi) {
      		formatedOfis.push("//div[text()='"+ moment(ofi.start).tz('Australia/Sydney').format('dddd Do MMMM')+"']")
      	})



      	// );  

console.log(formatedOfis)



// console.log(moment('2018-06-04T23:00:00.000Z').tz('Australia/Sydney').format('dddd Do MMMM'))


// var b64string = "Listing:546e8dd815e0475aca0efe82";
// var buf = Buffer.from(b64string, 'utf8').toString('base64'); // Ta-da
// console.log(buf); 





