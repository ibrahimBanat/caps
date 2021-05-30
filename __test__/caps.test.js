'use strict';

const faker = require('faker');
const Time = require('../handlers/timeStamp')
let time = new Time();
const vendor = require('../users/vendor');
const driver = require('../users/drivers');

let oreder = {
  store: faker.company.companyName(),
  orderID: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: `${faker.address.city()}, ${faker.address.stateAbbr()} , ${faker.address.streetAddress()}`,
};
let data = {
    event: 'pickup',
    time: 

}
jest.useFakeTimers();

beforeAll(() => {
  jest.spyOn('log', console).mockImplementation();
});

describe('caps systen test', () => {});
