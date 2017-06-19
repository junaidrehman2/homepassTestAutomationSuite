const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const schema = {
    ref: { type: String },     // 3rd party reference
    refSource: { type: String },     // 3rd party source e.g. mydesktop
    refs: [{                   // Map of refs, for external systems with different agent refs for different offices
        ref: { type: String },
        refSource: { type: String },
        manual: { type: Boolean },
        sourceStatus: { type: String },
        agentOffice: { type: Schema.Types.ObjectId, ref: 'AgentOffice' },
        checkinEnabled: { type: Boolean }
    }],
    status: { type: String },     // current, sold, leased, withdrawn
    title: { type: String },
    desc: { type: String },
    images: {
        main: { type: String },
        thumb: { type: String },
        extras: [{ type: String }],
        floorplans: [{ type: String }]
    },
    propType: {
        type: String,
        enum: [
            'HSE',
            'UNI',
            'TWN',
            'VIL',
            'APT',
            'FLT',
            'STD',
            'WRH',
            'SDT',
            'ALP',
            'ACR',
            'BOU',
            'TER',
            'RET',
            'SRV',
            'OTH',
            'LAN',
            'RUR'
        ]
    },
    subPropType: {
        type: String,
        enum: [
            'RES',
            'COM',
            'CRP',
            'DRY',
            'FRM',
            'HOR',
            'LIF',
            'LIV',
            'VIT',
            'MIX',
            'OTH'
        ]
    },
    // Applicable to LAN and RUR only. Residential, Commerical, Cropping, Dairy, Farmlet, Horticulture, Lifestyle, Livestock, Viticulture, MixedFarming, Other
    beds: { type: String },
    baths: { type: String },
    cars: { type: String },
    landSize: { type: String },
    landUnit: { type: String },
    extLink: { type: String },     // E.g. Link to site
    vidLink: { type: String },     // E.g. Link to youtube
    ofis: [
        {
            start: { type: Date },
            end: { type: Date }
        }
    ],
    adhocOfi: {
        enabled: { type: Boolean },
        started: { type: Date },
        ended: { type: Date }
    },
    extras: [
        {
            title: { type: String },
            fields: [
                {
                    key: { type: String },
                    value: { type: String }
                }
            ]
        }
    ],
    unitNo: { type: String },
    streetNo: { type: String },
    streetName: { type: String },
    streetType: { type: String },
    streetFull: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postcode: { type: String },
    showAddress: { type: Boolean },
    location: { type: [Number] },
    streetView: { type: Boolean },
    agentOffice: { type: Schema.Types.ObjectId, ref: 'AgentOffice' },
    agents: [{ type: Schema.Types.ObjectId, ref: 'Agent' }],
    listingAgents: [
        {
            fullName: { type: String },
            displayName: { type: String },
            firstName: { type: String },
            lastName: { type: String },
            email: { type: String },
            phoneMob: { type: String },
            normPhoneMob: { type: String },
            phoneWork: { type: String },
            normPhoneWork: { type: String },
            ref: { type: String },
            photoUrl: { type: String },
            agentId: { type: Schema.Types.ObjectId, ref: 'Agent' }
        }
    ],
    agencyCode: { type: String },
    agentCheckin: {
        welcome: { type: String }
    },

    sale: {
        auction: { type: Date },
        price: { type: Number },
        priceToShow: { type: String },
        showPrice: { type: Boolean },
        underOffer: { type: Boolean },
        soldDetails: {
            price: { type: Number },
            showPrice: { type: Boolean },
            soldDate: { type: Date }
        }
    },
    rental: {
        available: { type: Date },
        leased: { type: Boolean },
        leasedDate: { type: Date },
        bond: { type: String },
        rent: { type: Number },
        rentToShow: { type: String },
        rentPeriod: { type: String, enum: ['week', 'month', 'weekly', 'monthly'] },
        showRent: { type: Boolean }
    },
   
    timezone: { type: String },

    checkinFollowup: {
        delayInSeconds: { type: Number },
        followUpLinkOverride: { type: String }
    },

    hplistingType: { type: String, default: 'none', enum: ['none', 'basic', 'pro'] },
    listingType: { type: String, default: '', enum: ['', 'unknown', 'forSale', 'forRent'] },
    hidden: { type: Boolean },
    demo: { type: Boolean },

    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date, default: Date.now, required: true },

    archivedAt: { type: Date },

    enabledFeatures: { type: Array },
    liveView: { showDocsSentActivities: Boolean, showNoteActivities: Boolean },
};

const property = new Schema(schema);


let model = null;
if (mongoose.models.Property) {
    model = mongoose.model('Property');
} else {
    model = mongoose.model('Property', property);
}

module.exports = model;
