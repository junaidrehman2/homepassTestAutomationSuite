const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = {
    contact: { type: Schema.Types.ObjectId, ref: 'Contact' },
    property: { type: Schema.Types.ObjectId, ref: 'Property' },
    annotationLabel: { type: Schema.Types.ObjectId },
    deleted: { type: Boolean },
    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date, default: Date.now, required: true }
};

const annotation = new Schema(schema);

let model = null;
if (mongoose.models.Annotation) {
    model = mongoose.model('Annotation');
} else {
    model = mongoose.model('Annotation', annotation);
}

module.exports = model;
