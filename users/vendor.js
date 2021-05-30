'use strict';

const events = require('../events/events');
const faker = require('faker');

setInterval(() => {
  const store = {
    store: faker.company.companyName(),
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()} , ${faker.address.streetAddress()}`,
  };
  events.emit('pick-up', store);
}, 5000);

setTimeout(() => {
  events.on('in-transit', data => {
    console.log();
    console.log('in-transit', data);
    console.log();
  });
}, 3000);

events.on('delivered', () => {
  console.log();
  console.log('Thank You for selecting us!');
  console.log();
});
