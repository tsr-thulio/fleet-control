var moduleName = 'Fleet.Control';

angular
  .module(moduleName, [])
  .controller('fleetController', require('./controllers/FleetController'))
  .controller('vehicleModalController', require('./controllers/VehicleModalController'))
  .service('FleetService', require('./services/FleetService'))
  .factory('Vehicle', require('./models/VehicleBean'));

module.exports = moduleName;
