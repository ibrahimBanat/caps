'use strict';
/**
 * this module if for managing the state of every package
 * states: ready for pickup, in transit, delivered.
 */

//require time module to console timestamp
const Time = require('../handlers/timeStamp');
let time = new Time();
// require system parts
const events = require('../events/events');
require('../users/vendor');
require('../users/drivers');
let event = 'pick-up';
// logs every event to the console
events.on(`${event}`, payload => {
  let conObject = {
    event: `${event}`,
    payload: payload,
    time: time.consoleTime(),
  };
  console.log('#####################################');
  console.log();
  console.log(conObject);
  console.log();
  console.log('#####################################');
});
