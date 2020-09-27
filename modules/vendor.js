'use strict';

const faker = require('faker');
const storeName = 'Kyle Roberts x Johnny Rockets'
// const orderId = faker.random.number();
// const customerName = faker.name.findName();
// const address = faker.address.streetAddress();

function Order() {
    this.storeName = 'Kyle Roberts x Johnny Rockets'
    this.orderId = faker.random.number();
    this.customerName = faker.name.findName();
    this.address = faker.address.streetAddress();
};

let customerOrder = new Order();

console.log(`New order: ${customerOrder.customerName}`);




