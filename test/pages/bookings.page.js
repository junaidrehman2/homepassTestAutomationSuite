var request = require('sync-request');

class Bookings {
  get calanderEvent() { return $("//*[@text = 'Inspection']"); }
  get events() { return $("//*[@text = 'Events']"); }
  get removeAttendee() { return $("//*[@text = 'Remove Attendee']"); }
  // get () { return $("//*[@text = '']"); }
  // get () { return $("//*[@text = '']"); }
  // get () { return $("//*[@text = '']"); }
  // get () { return $("//*[@text = '']"); }
  // get () { return $("//*[@text = '']"); }
  // get () { return $("//*[@text = '']"); }

  get addAttendee() { return $("//*[contains(@resource-id, 'action_fab')]"); }
  get swipe() { return $("//*[contains(@resource-id, 'header_textView')]"); }
  get attendeeMoreButton() { return $("//*[contains(@resource-id, 'more_imageView')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
    // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
    // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
    // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }
  // get () { return $("//*[contains(@resource-id, '')]"); }

//   getUser(email) {
//     var res = request('POST', browser.options.testApiUrl+'csm/v1/accountUsers', {
//       headers: {Authorization : 'Basic EvdaQ5PHdmemnssnT9LmQ66T7Q3s4Ey8'}, 
//       json: { email : email }
//     }); 
//     var accountUser = JSON.parse(res.getBody().toString('utf8'));
//     return accountUser.accountUsers[0];
//   }
}

module.exports = new Bookings();