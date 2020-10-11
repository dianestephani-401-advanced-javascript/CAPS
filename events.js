'use strict';

//Global event pool, shared by all modules

const eventEmitter = require('events');
const events = new eventEmitter();

module.exports = events;