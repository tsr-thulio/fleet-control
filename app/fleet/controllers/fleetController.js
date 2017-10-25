module.exports = function(FleetService, $mdDialog) {

  'ngInject';

  var $ctrl = this;
  var $this = {

    /**
     * Constructor method
     */
    main: function () {
      $this.init(function () {
        $this.addEventListeners();
      });
    },

    /**
     * Init method
     * @param {Function} - callbalck function to be executed
     */
    init: function (callback) {
      $ctrl.fleet = FleetService.getFleetByPage(1);
      $ctrl.bla = true;
      $ctrl.selectedVehicles = [];

      callback();
    },

    /**
     * Add EventListeners method
     */
    addEventListeners: function () {
      $ctrl.addCar = $this.addCar.bind($this);
      $ctrl.removeCar = $this.removeCar.bind($this);
      $ctrl.search = $this.search.bind($this);
    },

    /**
     * Add new vehicle
     */
    addCar: function() {
      $this.openVehicleModal();
    },

    /**
     * Remove vehicle
     */
    removeCar: function() {
      FleetService.removeVehicles($ctrl.selectedVehicles);
      $ctrl.fleet = FleetService.getFleetByPage(1);
    },

    /**
     * Add search vehicle
     */
    search: function() {
      alert('Search something');
    },

    openVehicleModal: function() {
      $mdDialog.show({
        controller: 'vehicleModalController as vehicle',
        template: require('../views/VehicleModal.html'),
        clickOutsideToClose: false,
        escapeToClose: false,
        parent: angular.element(document.body)
      });
    }
  }

  $this.main();
  
};
