'use strict';

const events = require('../events');
require('./vendor');
const chalk = require('chalk');

events.on('pickup', payload => pickItUp('pickup', payload));

function pickItUp(event, payload){
  setTimeout( () => {
    console.log(chalk.cyanBright('DRIVER', `picked up ${payload.orderId}`));

    events.emit('in transit', payload);
  }, 1000);


  setTimeout( () => {
    console.log(chalk.blueBright(`Delivered ${payload.orderId}`));

    events.emit('delivered', payload);
  }, 3000);
};
