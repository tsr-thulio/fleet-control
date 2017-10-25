module.exports = function($mdDialog, Vehicle, FleetService) {

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
      $ctrl.model = new Vehicle();
      $ctrl.modalTitle = 'Adicionar Veículo'
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
        FleetService.addVehicle($ctrl.model);
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
