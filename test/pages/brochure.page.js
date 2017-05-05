var moment = require('moment-timezone');
var request = require('sync-request');
var propertyPage  = require('./properties.page.js');
var property = propertyPage.getProperty('548e62854be1d336770d7a83'); 
var currentDate = new Date().toISOString();
var formatedOfis = []; 

var CurrentOfis  =  property.ofis.filter(function(item, index, array){
  return item.start > currentDate;
}); 

CurrentOfis.forEach(function (ofi) {
 formatedOfis.push('//div[text()="'+ moment(ofi.start).tz("Australia/Sydney").format("dddd Do MMMM")+'"]')
})

class Brochure { 

  get viewBrochure() { return $("//div[text()='View brochure']"); }
  get propertyStreetAddress() { return $("//div[text()='"+property.streetNo+" "+property.streetFull+"']"); }
  get bedBathsCars() { return $("//div[text()='"+property.beds+" bed, "+property.baths+" bath, "+property.cars+" car"+"']"); }
  get ofis() { return formatedOfis; }
  get bookInspButton() { return $("//span[text()='BOOK INSPECTION']"); }
  get attendeeName(){ return $("input[name='attendeeName']"); }
  get attendeeEmail(){ return $("input[name='attendeeEmail']"); }
  get attendeeMobile(){ return $("input[name='attendeeMobile']"); }
  get submittBook() { return $("//span[text()='BOOK']"); }
  get bookingConfirmed() { return $("//div[text()='Booking Confirmed']"); }
  get activityTab() { return $("//div[text()='Activity']"); }
  get testCheckin() {return $("//div[text()='Chu test'][1]");}
  get testCheckinDate() {return $("//div[text()='Chu test'][1]/following-sibling::div//time");}

  getListingAgents(){
    var listingAgentElements = []
    property.listingAgents.forEach(function(agent) {
      listingAgentElements.push([`a[href*="${agent.email}"]`, `a[href*="${agent.normPhoneMob}"]`]);
    });

    return listingAgentElements;
  }

  processOfis(property) {
    var res = request('POST', browser.options.testApiUrl+'/listingImportPostProcessor', {
      headers: {Authorization : 'Basic EvdaQ5PHdmemnssnT9LmQ66T7Q3s4Ey8'}, 
      json: { listingIds : [property] }
    }); 
  }
}

module.exports = new Brochure();