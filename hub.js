'use strict';

const events = require('./events');
require('./modules/vendor');
require('./modules/driver');

events.on('pickup', payload => assignTheDate('pickup', payload)); 

function assignTheDate(event, payload){
  let date = new Date();
  console.log('EVENT', 
  {event, 
    date, 
    payload});
};

