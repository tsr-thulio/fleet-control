module.exports = function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

  'ngInject';

  $urlMatcherFactoryProvider.strictMode(false);

  $urlRouterProvider
    .when('/', '');

  $stateProvider
    .state('home', {
      url: '',
      views: {
        'manager@': {
          template: require('./fleet/views/list.html'),
          controller: 'fleetController as fleet'
        }
      }
    })
};
