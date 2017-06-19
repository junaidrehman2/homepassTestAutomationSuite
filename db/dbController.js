var {mongoose} = require('./mongoose')
const accountMemberships  = require('./models/accountMembershipModel')
const folowing  = require('./models/followerModel')
const checkins  = require('./models/checkinModel')
const notes  = require('./models/noteModel')
var moment = require('moment')
const annotations  = require('./models/annotationModel')
const vendors  = require('./models/vendorModel')
const contacts  = require('./models/contactModel')
const properties  = require('./models/listingModel')
const attendees  = require('./models/attendeeModel')


function getAccountMembership (userId, callback){
	accountMemberships.findOne({userId: userId}).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
} 

function getFollowing (userId, propertyId, callback){
	folowing.findOne({userId : userId, entityId : propertyId }).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getCheckin (propertyId, callback){
	checkins.findOne({$query: { property : mongoObjectId(propertyId) },  $orderby: {  _modified:-1 } }).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getNoteCreated (propertyId, note, callback){
	notes.findOne({ 'target.property' : mongoObjectId(propertyId), text: note }).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getContactNote (note, callback){
	notes.findOne({ text: note, _modified: {$gte: moment().subtract(5, 'minutes')} }).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getNoteEdited (id, callback){
	notes.findById(id).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getCheckInById (id, callback){
	checkins.findById(id).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getContactById (id, callback){
	contacts.findById(id).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getVendorById (id, callback){
	vendors.findById(id).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getPropertyById (id, callback){
	properties.findById(id).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getAttendeeById (id, callback){
	attendees.findById(id).then((data) => {
		callback(data)
	}, (e) => {
		callback(e)
	})
}

function getInterested(contactId, annotationId, callback) {
	annotations.findOne({$query: {contact: mongoObjectId(contactId), annotationLabel: mongoObjectId(annotationId)}, $orderby:{_created:-1}}).then((data) => {
		callback(data)
	}, (e) => { 
		callback(e)
	})
}

function getVendor(listingId, callback) {
	vendors.findOne({listingId: mongoObjectId(listingId), _modified: {$gte: moment().subtract(2, 'minutes')}, status: 'active'}).then((data) => {
		callback(data)
	}, (e) => { 
		callback(e)
	})
}

function getAttendee(email, callback) {
	attendees.findOne({email: email, _modified: {$gte: moment().subtract(2, 'minutes')}}).then((data) => {
		callback(data)
	}, (e) => { 
		callback(e)
	})
}

function mongoObjectId(id){
	return mongoose.mongo.ObjectId(id)
}

function closeMongoConnection(){
	mongoose.connection.close();
}

module.exports = {
	getAccountMembership,
	getFollowing,
	getCheckin,
	getNoteCreated,
	getNoteEdited,
	getContactNote,
	getInterested,
	getCheckInById,
	getVendor,
	getContactById,
	getVendorById,
	getAttendee, 
	getPropertyById,
	getAttendeeById, 
	closeMongoConnection
}