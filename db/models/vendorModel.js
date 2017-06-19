const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const vendor = new Schema({
    contactId: { type: Schema.Types.ObjectId, ref: 'Contact', required: true },
    listingId: { type: Schema.Types.ObjectId, ref: 'Property', required: true },
    status: { type: String, enum: ['active', 'deleted'], required: true, default: 'active' },
    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date, default: Date.now, required: true }
});


let model = null;
if (mongoose.models.Vendor) {
    model = mongoose.model('Vendor');
} else {
    model = mongoose.model('Vendor', vendor);
}
module.exports = model;
