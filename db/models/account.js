const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountStates = { active: 'active', deleted: 'deleted' };


const account = new Schema({
    name: { type: String },
    status: { type: String, enum: [accountStates.active, accountStates.deleted], required: true, default: 'active' },
    imageUrl: { type: String },
    phone: { type: String },

    // settings
    allowAutoJoin: { type: Boolean, default: true },
    privateListings: { type: Boolean, default: false },
    privateListingsLastModifiedAt: { type: Date },
    smsFrom: { type: String },
    primaryColor: { type: String },
    accentColor: { type: String },
    enableWelcomeSms: { type: Boolean, default: true },
    allowHomeConnections: { type: Boolean, default: false },
    allowRentalApplications: { type: Boolean, default: false },
    allowDomainCheckinEnabled: { type: Boolean, default: false },

    // address
    streetNumber: { type: String },
    streetName: { type: String },
    locality: { type: String },
    state: { type: String },
    postcode: { type: String },
    countryName: { type: String },
    isoCountryCodeAlpha2: { type: String, default: 'AU' },

    // location
    latitude: { type: Number },
    longitude: { type: Number },

    // plan
    domainPlan: { type: String },

    // system fields
    testAccount: { type: Boolean },

    billing: {
        enabled: { type: Boolean, default: false },
        chargebeeCustomerId: { type: String },
        chargebeeSubscription: {
            id: { type: String },
            status: { type: String },
            plan_id: { type: String }
        }
    },
    liveViewEnabled: { type: Boolean, default: false },
    homeLoanReferralsEnabled: { type: Boolean, default: false },
    loanCallbackEmail: { type: String, default: 'support@homepass.com' },
    bookingsEnabled: { type: Boolean, default: false },
    contactsEnabled: { type: Boolean, default: false },
    bookingManagementEnabled: { type: Boolean, default: false },
    compareAndConnectId: { type: String },
    phoneAddressBookIntegration: { type: Boolean, default: false },
    twilio: {
        accountId: { type: String }
    },

    // timestamps
    _created: { type: Date, default: Date.now, required: true },
    _modified: { type: Date, default: Date.now, required: true }
});

let model = null;
if (mongoose.models.Account) {
    model = mongoose.model('Account');
} else {
    model = mongoose.model('Account', account);
}
module.exports  = model;