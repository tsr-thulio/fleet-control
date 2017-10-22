var moduleName = 'Fleet.Control';

angular
  .module(moduleName, [])
  .controller('fleetController', require('./controllers/fleetController'));

  module.exports = moduleName;
  