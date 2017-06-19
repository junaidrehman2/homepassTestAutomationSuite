const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const attendee = new Schema({
    name: { type: String },
    email: { type: String },
    refs: [{id: String, source: String}],
    status: { type: String, enum: ['accepted', 'deleted'], required: true, default: 'accepted' },
    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date, default: Date.now, required: true }
});


let model = null;
if (mongoose.models.Attendee) {
    model = mongoose.model('Attendee');
} else {
    model = mongoose.model('Attendee', attendee);
}
module.exports = model;
