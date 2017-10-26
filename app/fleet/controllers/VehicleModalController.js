module.exports = function($mdDialog, Vehicle, FleetService, itemId) {

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
      if (itemId !== null && itemId !== undefined) {
        $ctrl.model = new Vehicle(FleetService.getVehicleById(itemId));
        $ctrl.modalTitle = 'Editar Veículo'
      } else {
        $ctrl.model = new Vehicle();
        $ctrl.modalTitle = 'Adicionar Veículo'
      }
      callback();
    },

    /**
     * Add EventListeners method
     */
    addEventListeners: function () {
      $ctrl.saveVehicle = $this.saveVehicle.bind($this);
      $ctrl.cancel = $this.cancel.bind($this);
    },

    /**
     * Save the vehicle filled in form
     */
    saveVehicle: function() {
      if ($ctrl.model.validate()) {
        FleetService.upsertVehicle($ctrl.model);
        $mdDialog.cancel();
      }
    },

    /**
     * Discard changes
     */
    cancel: function() {
      $mdDialog.cancel();
    },

  }

  $this.main();
  
};
