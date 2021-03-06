module.exports = function(FleetService, $mdDialog, ToastFactory) {

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
      if ($ctrl.selectedVehicles.length) {
        FleetService.removeVehicles($ctrl.selectedVehicles);
        $ctrl.fleet = FleetService.getFleetByPage($ctrl.currentPage || 1);
        $ctrl.totalItems = FleetService.getTotalItems();
        var toastText = 'Veículo excluído!';

        if ($ctrl.selectedVehicles.length > 1) {
          var toastText = 'Veículos excluídos!';
        }

        $ctrl.selectedVehicles = [];
        new ToastFactory('bottom left', 3000, toastText).show();
      }
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
      $ctrl.fleet = FleetService.getFleetByPage($ctrl.currentPage || 1);
    },

    /**
     * Edit specific vehicle
     */
    editVehicle: function(vehicleId, event) {
      if (!event || event.srcElement.id !== 'vehicle-img') {
        $this.openVehicleModal(vehicleId);
      }
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
        $ctrl.fleet = FleetService.getFleetByPage($ctrl.currentPage || 1);
        $ctrl.totalItems = FleetService.getTotalItems();
      });
    }
  }

  $this.main();
  
};
