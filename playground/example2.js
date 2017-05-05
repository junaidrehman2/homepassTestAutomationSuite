var request = require('then-request');
// var moment = require('moment-timezone');
// var brochure  = require('../test/pages/brochure.page.js');



var property = "548e62854be1d336770d7a83"; 

getProperty(property); 

function getProperty(property) {

var re = request('POST', 'https://data-sandbox.homepass.com/csm/v1/findListings', {
    		headers: {Authorization : 'Basic EvdaQ5PHdmemnssnT9LmQ66T7Q3s4Ey8'}, 
    		json: { listingIds : [property] }
    	}); 

console.log(JSON.parse(re.getBody().toString('utf8')))}

    	// var property = JSON.parse(res.getBody().toString('utf8'));
    	// return property.listings[0];



// expect  = require('chai').expect;
// try{
//  expect(false, "this is a test").to.be.true;
// }catch(e){
// console.log(e)
// }
// console.log(p);
// // var accountPreferences  = require('./pages/accountPreferences.page.js');
// var property = properties.getProperty('548e62854be1d336770d7a83');

//  // var email  = userDetails.email.getText();
//       // var details  = accountPreferences.getAccount('58d3113e5fad1b0e1c293bdd');
//       // console.log(details.name);  
// var formatedOfis = []

// //       var details  = properties.addCheckin(); 
// var da = new Date().toISOString();
// var b  =  property.ofis.filter(function(item, index, array){
//         console.log(item.start+"          d------------"+da);

//         return item.start > da;

//     })
// console.log(b.length)
      
//       // console.log(

//       	b.forEach(function (ofi) {
//       		formatedOfis.push("//div[text()='"+ moment(ofi.start).tz('Australia/Sydney').format('dddd Do MMMM')+"']")
//       	})



//       	// );  

// console.log(formatedOfis)



// console.log(moment('2018-06-04T23:00:00.000Z').tz('Australia/Sydney').format('dddd Do MMMM'))


// var b64string = "Listing:546e8dd815e0475aca0efe82";
// var buf = Buffer.from(b64string, 'utf8').toString('base64'); // Ta-da
// console.log(buf); 





