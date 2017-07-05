var {mongoose} = require('../db/mongoose');
var moment = require('moment');
var momenttz = require('moment-timezone')

// const account  = require('../db/models/account')

// account.findById('59279666aaff57c421c642d8').then((account) => {
// console.log(account.name)
// mongoose.connection.close()
//   }, (e) => { console.log(e)})

// console.log(mongoose.toObjectId('57e0cd6275200bef3697766f'));

// 



// var cutoff = new Date();
// cutoff.setDate(cutoff.getDate()-2);

// var da = momenttz().tz('Australia/Sydney').format(); 
// var da2 = moment().subtract(5, 'days').toISOString(); 
// console.log(moment().subtract(2, 'days'))
// const checkin  = require('../db/models/checkinModel')


// console.log("dfdfdf" + moment().subtract(2, 'days').toISOString())

// checkin.find({ property: '5588c2e8b91d24fd0f43a8a0', _created: {$gt: da2}}).then((checkin) => {
// console.log(checkin)
// console.log(momenttz(checkin._created).tz('Australia/Sydney').format())
// console.log(momenttz().tz('Australia/Sydney').format())

// // console.log("=====  "+ moment(checkin._created)/.local())
// mongoose.connection.close()
//   }, (e) => { console.log(e)})


///========================================================NOTES====================================================================
// const note  = require('../db/models/noteModel')

// var newId = new mongoose.mongo.ObjectId('5588c2e8b91d24fd0f43a8a0');

// note.findOne({$query: {'target.property': newId}, $orderby:{_created:-1}}).then((n) => {
// console.log(n)
// mongoose.connection.close()
//   }, (e) => { console.log(e)})
///========================================================NOTES====================================================================


///========================================================annotations====================================================================
// const anno  = require('../db/models/annotationModel')

// var newId = new mongoose.mongo.ObjectId('591bfa0484d544920d3bf8bd');
// var newId2 = new mongoose.mongo.ObjectId('5594c865b87e3083ada4ae6c');

// anno.findOne({$query: {contact: newId, annotationLabel: newId2}, $orderby:{_created:-1}}).then((n) => {
// console.log(n)
// mongoose.connection.close()
//   }, (e) => { console.log(e)})
///========================================================anotations====================================================================


///========================================================vendor====================================================================
// const vendor  = require('../db/models/vendorModel')

// var newId = new mongoose.mongo.ObjectId('5588c2e8b91d24fd0f43a8a0');
// // var newId2 = new mongoose.mongo.ObjectId('5594c865b87e3083ada4ae6c');

// vendor.findOne({$query: {listingId: newId}, $orderby:{_modified:-1}}).then((n) => {
// console.log(n)
// mongoose.connection.close()
//   }, (e) => { console.log(e)})
///========================================================vendor====================================================================

///========================================================property====================================================================
// const property  = require('../db/models/listingModel')

// var newId = new mongoose.mongo.ObjectId('5588c2e8b91d24fd0f43a8a0');
// // var newId2 = new mongoose.mongo.ObjectId('5594c865b87e3083ada4ae6c');

// property.findById('5588c2e8b91d24fd0f43a8a0').then((n) => {
// console.log(n)
// mongoose.connection.close()
//   }, (e) => { console.log(e)})
///========================================================property====================================================================

///========================================================attendee====================================================================
// const att  = require('../db/models/attendeeModel')

// // var newId = new mongoose.mongo.ObjectId('5588c2e8b91d24fd0f43a8a0');
// // var newId2 = new mongoose.mongo.ObjectId('5594c865b87e3083ada4ae6c');

// att.findOne({$query: {email: 'junaid@homepass.com'}, $orderby:{_modified:-1}}).then((n) => {
// console.log(n)
// mongoose.connection.close()
//   }, (e) => { console.log(e)})
///========================================================attendee====================================================================



// /========================================================accountMembership====================================================================
// const accountMembership  = require('../db/dbController')
const db  = require('../db/dbController')
// // var newId = new mongoose.mongo.ObjectId('5588c2e8b91d24fd0f43a8a0');
// // // var newId2 = new mongoose.mongo.ObjectId('5594c865b87e3083ada4ae6c');
// db.getFollowing('57e0cd6275200bef3697766f', '5588c2e8b91d24fd0f43a8a0', (data) => {
// 	console.log(data.status);
// });

// var newId = new mongoose.mongo.ObjectId('591bfa0484d544920d3bf8bd');
// var newId2 = new mongoose.mongo.ObjectId('5594c865b87e3083ada4ae6c');

// db.getVendor("5588c2e8b91d24fd0f43a8a0", function (argument) {
// 	console.log(argument)
// 	db.getContactById(argument.contactId, function(d){
// 		console.log(d)
// 		mongoose.connection.close();
// 	})
// })
// db.getAccountMembership(browser.options.userIdForPromoteDemoteUser, (data) => {
// 			dataBacked = data
// 			waitFlag = true	
// 			console.log(dataBacked)
// 		});
// db.getContactNote('Jj',  (data) => {
// 	console.log(data);
// })

db.getFollowing('5757a1c317c48f27519ca6b6', '5588c2e8b91d24fd0f43a8a0', (data) => {
	console.log(data)
})
// const checkin  = require('../db/models/checkinModel')


// var newId2 = new mongoose.mongo.ObjectId('5588c2e8b91d24fd0f43a8a0');


// checkin.findOne({$query: { property : newId2 },  $orderby: { _modified:-1 } }).then((data) => {
// 	console.log(data)
// 	}, (e) => {
// 		console.log(e)
	// })
// console.log(checkin)


// setInterval(function(){
// 	db.getFollowing('57e0cd6275200bef3697766f', '5588c2e8b91d24fd0f43a8a0', (data) => {
// 	console.log(data.status);

// })
// }, 2000)


// const folowing  = require('../db/models/followerModel')

// folowing.findOne({userId : '57e0cd6275200bef3697766f', entityId: '5588c2e8b91d24fd0f43a8a0'}).then((folowing) => {
// console.log(folowing)
// // mongoose.connection.close()
//   }, (e) => { console.log(e)})


// , function(data){
// 	console.log(x)
// }); 

// console.log(accountMembership.getAccountMembership('578d8bb862ed0dcc37d3a669'))

	// db.getAccountMembership('578d8bb862ed0dcc37d3a669').then((n) => {
	// console.log(n)
		
	// }, (e) => { console.log(e)})

// console.log(x)
// mongoose.connection.close()
// console.log(accountMembership.getAttendee('junaid@homepass.com'))
// /========================================================accountMembership====================================================================

// var request = require('sync-request');
// var fs  = require('fs')



// var res = request('GET', "https://api.homepass.com/offices/57ce1fc128864b1e6cf3b5be/activities?page=2&sinceDate=2017-04-20T00:00:00Z", {
//     		headers: { Authorization : 'Basic NxSxT5eYA0jCUoad2dtnqUhxyghZuIQo3e5fWPNC'} 
//     	}); 

//     	var property = JSON.parse(res.getBody().toString('utf8'));

//     	fs.writeFileSync('data.json', JSON.stringify(property, undefined, 2))
    	// console.log(x.substring(x.length - 4))


// var moment = require('moment-timezone');
// var brochure  = require('../test/pages/brochure.page.js');
// var propertyPage  = require('../test/pages/properties.page.js');


// var ele = propertyPage.openNavigationDrawer; 
// var property = "548e62854be1d336770d7a83"; 

// getProperty(property); 

// function getProperty(property) {

// var re = request('POST', 'https://data-sandbox.homepass.com/csm/v1/findListings', {
//     		headers: {Authorization : 'Basic EvdaQ5PHdmemnssnT9LmQ66T7Q3s4Ey8'}, 
//     		json: { listingIds : [property] }
//     	}); 

// console.log(JSON.parse(re.getBody().toString('utf8')))}

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


mongoose.connection.close();


