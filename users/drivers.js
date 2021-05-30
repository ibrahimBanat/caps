'use strict';

const events = require('../events/events');

let bData;
setTimeout(() => {
  events.on('pick-up', data => {
    bData = data;
    console.log(`DRIVER: picked up the order : ${bData.orderID}`);
    events.emit('in-transit', data);

    setTimeout(() => {
      console.log('delivered');
      events.emit('delivered', bData);
    }, 3000);
  });
}, 1000);
