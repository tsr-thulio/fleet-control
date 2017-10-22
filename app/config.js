module.exports = function($mdThemingProvider) {

  'ngInject';

  var contaAzulBlueMap = $mdThemingProvider.extendPalette('blue', {
    '500': '#2585e9',
  });

  $mdThemingProvider.definePalette('contaAzul', contaAzulBlueMap);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('contaAzul')
    .accentPalette('amber');

  $mdThemingProvider.alwaysWatchTheme(true);

};
