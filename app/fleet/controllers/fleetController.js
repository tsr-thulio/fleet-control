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
      $ctrl.totalItems = FleetService.getTotalItems();
      $ctrl.selectedVehicles = [];
      callback();
    },

    /**
     * Add EventListeners method
     */
    addEventListeners: function () {
      $ctrl.paginate = $this.paginate.bind($this);
      $ctrl.addCar = $this.addCar.bind($this);
      $ctrl.removeCar = $this.removeCar.bind($this);
      $ctrl.search = $this.search.bind($this);
      $ctrl.editVehicle = $this.editVehicle.bind($this);
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
      $ctrl.totalItems = FleetService.getTotalItems();
    },

    /**
     * Add search vehicle
     */
    search: function() {
      $ctrl.fleet = FleetService.searchVehicles($ctrl.searchText);
    },

    /**
     * Execute pagination behavior
     */
    paginate: function() {
      $ctrl.fleet = FleetService.getFleetByPage($ctrl.currentPage);
    },

    /**
     * Edit specific vehicle
     */
    editVehicle: function(vehicleId) {
      console.log(vehicleId);
      $this.openVehicleModal(vehicleId);
    },

    openVehicleModal: function(itemId) {
      $ctrl.searchText = null;
      $mdDialog.show({
        controller: 'vehicleModalController as vehicle',
        template: require('../views/VehicleModal.html'),
        clickOutsideToClose: false,
        escapeToClose: false,
        parent: angular.element(document.body),
        locals: {
          itemId: itemId
        }
      }).finally(function() {
        $ctrl.fleet = FleetService.getFleetByPage(1);
        $ctrl.totalItems = FleetService.getTotalItems();
      });
    }
  }

  $this.main();
  
};
