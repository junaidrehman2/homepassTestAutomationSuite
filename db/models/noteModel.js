const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = {
    text: { type: String },
    ref: { type: String },
    refSource: { type: String },
    visibility: {
        // TODO add a list. e.g. for type agent, specify a list of agents that can see this note
        level: { type: String } // all/office/agent/none
    },
    author: {
        agent: { type: Schema.Types.ObjectId, ref: 'Agent' }
    },
    target: {
        contact: { type: Schema.Types.ObjectId, ref: 'Contact' },
        property: { type: Schema.Types.ObjectId, ref: 'Property' }
    },
    isVendorComment: { type: Boolean},
    deleted: { type: Boolean },

    // Assigned if the note has been edited
    editedTimestamp: { type: Date },

    source: { type: String },

    sources: [{
        officeRef: { type: String },
        contactRef: { type: String },
        source: { type: String },
        sourceId: { type: String },
        sourceStatus: { type: String },
        agentOffice: { type: Schema.Types.ObjectId, ref: 'AgentOffice' }
    }],

    dirtyFields: [{ type: String }],

    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date, default: Date.now, required: true }
};

const note = new Schema(schema);

// Visibility Types
note.statics.ALL = 'all';
note.statics.OFFICE = 'office';
note.statics.AGENT = 'agent';
note.statics.NONE = 'none';

note.statics.SOURCE_STATUS_ACTIVE = 'active';
note.statics.SOURCE_STATUS_DISABLED = 'disabled';

note.set('versionKey', false);

let model = null;
if (mongoose.models.Note) {
    model = mongoose.model('Note');
} else {
    model = mongoose.model('Note', note);
}

module.exports = model;
