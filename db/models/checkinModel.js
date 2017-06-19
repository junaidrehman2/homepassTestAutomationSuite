const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CheckinSchema = new Schema({
    contact: { type: Schema.Types.ObjectId, ref: 'Contact' },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    property: { type: Schema.Types.ObjectId, ref: 'Property' },
    rental: { type: Schema.Types.ObjectId, ref: 'Rental' },
    agent: { type: Schema.Types.ObjectId, ref: 'Agent' },    // The agent who checked the contact/customer in. If blank, the customer checked themselves in.
    accountUserId: { type: String },
    agencyCode: { type: String },
    checkinDate: { type: Date, default: Date.now },
    pushedToSource: { type: Date },
    deleted: { type: Boolean },
    placeholder: { type: Boolean },
    requestId: { type: String },

    // This is a special case for Checkin. Usually ref/refSource is used to represent 3rd party refs.
    sources: [{
        source: { type: String },
        sourceId: { type: String },
        sourceStatus: { type: String },
        agentOffice: { type: Schema.Types.ObjectId, ref: 'AgentOffice' }
    }],

    // This is being used to store a local client eg. 360 id to aid caching etc.
    // Shouldn't be using for this purpose, but bit of work to change both backend and frontend to use something else
    ref: { type: String },
    refSource: { type: String },

    // Redundant data to ensure we don't lose contact leads
    firstName: { type: String  },
    lastName: { type: String },
    fullName: { type: String  },
    mobile: { type: String  },
    landline: { type: String  },
    email: { type: String  },
    address: { type: String  },
    suburb: { type: String  },
    instrument: { type: String  },
    countryCode: { type: String  },

    // Store the raw phone number data
    rawFullName: { type: String  },
    rawLastName: { type: String  },
    rawFirstName: { type: String  },
    rawMobile: { type: String  },
    rawLandline: { type: String  },

    contactNote: { type: String  },
    contactNoteShared: { type: Boolean  },

    inspectionNote: { type: String  },
    inspectionNoteShared: { type: Boolean  },

    // The location where the checkin was registered
    // NOTE: convention is long,lat (mongodb indexing)
    location: { type: [Number] },

    // Store the google address components
    // See - https://developers.google.com/maps/documentation/geocoding/intro#geocoding
    //
    // NOTE: name convention is adheres to google's blob so we don't have to
    // make any transformations at the client level.
    addressComponents: [
        {
            long_name: { type: String  },
            short_name: { type: String  },
            types: [{ type: String }]
        }
    ],
    addressLocation: {
        lat: { type: Number },
        lng: { type: Number }
    },

    // The reference to the pass that created the checkin. Typically via
    // a consumer client.
    passRef: { type: String  },

    _created: { type: Date, default: Date.now },
    _modified: { type: Date },
    notifySMS: { type: Boolean }
});


let model = null;
if (mongoose.models.Checkin) {
    model = mongoose.model('Checkin');
} else {
    model = mongoose.model('Checkin', CheckinSchema);
}

module.exports = model;
