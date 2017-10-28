module.exports = function($mdToast) {

  'ngInject';

  return function(position, delay, content) {
    this.toast = $mdToast
      .simple()
      .position(position)
      .hideDelay(delay)
      .content(content);

    this.getInstance = function() {
      return this.toast;
    };

    this.show = function() {
      $mdToast.show(this.toast);
    };
  };
};
