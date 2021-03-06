module.exports = function($mdDialog, Vehicle, FleetService, itemId, $scope, ToastFactory) {

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
      $ctrl.fuelList = FleetService.getFuelList();
      if (itemId !== null && itemId !== undefined) {
        $ctrl.model = new Vehicle(FleetService.getVehicleById(itemId));
        $ctrl.modalTitle = 'Editar Veículo'
        $this.toast = new ToastFactory('bottom left', 3000, 'Veículo alterado com sucesso!');
      } else {
        $ctrl.model = new Vehicle();
        $ctrl.modalTitle = 'Adicionar Veículo'
        $this.toast = new ToastFactory('bottom left', 3000, 'Veículo criado com sucesso!');
      }
      callback();
    },

    /**
     * Add EventListeners method
     */
    addEventListeners: function () {
      $ctrl.saveVehicle = $this.saveVehicle.bind($this);
      $ctrl.cancel = $this.cancel.bind($this);
      $ctrl.selectFuel = $this.selectFuel.bind($this);
    },

    /**
     * Save the vehicle filled in form
     */
    saveVehicle: function() {
      if ($ctrl.model.validate() && !$scope.vehicleForm.$invalid) {
        FleetService.upsertVehicle($ctrl.model);
        $mdDialog.cancel();
        $this.toast.show();
      }
    },

    /**
     * Discard changes
     */
    cancel: function() {
      $mdDialog.cancel();
    },

    /**
     * Fuel select action
     */
    selectFuel: function() {
      if ($ctrl.model.combustivel === '- Selecione -') {
        $ctrl.model.combustivel = null;
      }
    }

  }

  $this.main();
  
};
