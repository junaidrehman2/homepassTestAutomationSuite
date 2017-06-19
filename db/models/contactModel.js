const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const contact = new Schema({
    firstName: { type: String  },
    lastName: { type: String  },
    fullName: { type: String  },
    mobile: { type: String  },
    landline: { type: String  },
    email: { type: String  },
    address: { type: String  },
    suburb: { type: String  },
    countryCode: { type: String  },
    notes: { type: String  },
    deleted: { type: Boolean },
    lastSeen: { type: Date },

    ref: { type: String  },
    refSource: { type: String },

    refs: [{                   // Map of refs, for external systems with different agent refs for different offices
        ref: { type: String },
        refSource: { type: String },
        sourceStatus: { type: String },
        agentOffice: { type: Schema.Types.ObjectId, ref: 'AgentOffice' }
    }],

    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    agentOffice: { type: Schema.Types.ObjectId, ref: 'AgentOffice' }, // A contact belongs to an office
    agent: { type: Schema.Types.ObjectId, ref: 'Agent' },   // This is who created the contact
    addressBook: { type: Schema.Types.ObjectId, ref: 'AddressBook' },

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

    agentsWrite: [{ type: Schema.Types.ObjectId, ref: 'Agent' }],
    dirtyFields: [{ type: String }],

    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date }
});

let model = null;
if (mongoose.models.Contact) {
    model = mongoose.model('Contact');
} else {
    model = mongoose.model('Contact', contact);
}
module.exports = model;
