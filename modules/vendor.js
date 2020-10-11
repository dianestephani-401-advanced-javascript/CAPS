'use strict';

const faker = require('faker');
const express = require('express');
const events = require('../events');
require('dotenv').config();
const chalk = require('chalk');

//Function via Ben
setInterval(() => {
    let payload = {
      store: process.env.STORE_NAME,
      orderId: faker.random.uuid(),
      customerName: faker.name.findName(),
      address: faker.address.streetAddress(),
    }
    events.emit('pickup', payload); 
}, 5000);


events.on('delivered', payload => {
    console.log(`Thank you for delivering ${payload.orderId}`);
});