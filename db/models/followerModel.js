const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const followerModel = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'AccountUser', required: true },
    entityId: { type: Schema.Types.ObjectId, required: true },
    entityType: { type: String, enum: ['listing'], required: true },
    status: { type: String, enum: ['active', 'deleted'], required: true, default: 'active' },
    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date, default: Date.now, required: true }
});


let model = null;
if (mongoose.models.Follower) {
    model = mongoose.model('Follower');
} else {
    model = mongoose.model('Follower', followerModel);
}
module.exports = model;
