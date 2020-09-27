'use strict';

const faker = require('faker');
const storeName = 'Kyle Roberts x Johnny Rockets'
const orderId = faker.random.number();
const customerName = faker.name.findName();
const address = faker.address.streetAddress();

class Order {
  constructor(storeName, orderId, customerName, address){
    this.storeName = storeName;
    this.orderId = orderId;
    this.customerName = customerName;
    this.address = address;
  };
}

let customerOrder = new Order;

console.log(`New order: ${customerOrder}`);




