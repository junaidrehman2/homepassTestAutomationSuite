const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountMembership = new Schema({
    userId: { type: String, required: true },
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    role: { type: String, enum: ['user', 'admin', 'signboardManufacturer'], required: true, default: 'user' },
    status: { type: String, enum: ['active', 'deleted'], required: true, default: 'active' },
    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date, default: Date.now, required: true }
});

let model = null;
if (mongoose.models.AccountMembership) {
    model = mongoose.model('AccountMembership');
} else {
    model = mongoose.model('AccountMembership', accountMembership);
}
module.exports = model;
