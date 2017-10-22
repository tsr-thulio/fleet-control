module.exports = function($mdThemingProvider) {

  'ngInject';

  var contaAzulBlueMap = $mdThemingProvider.extendPalette('blue', {
    '500': '#2585e9',
    // 'contrastDefaultColor': 'dark'
  });

  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('contaAzul', contaAzulBlueMap);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('contaAzul')
    .accentPalette('amber');

  $mdThemingProvider.alwaysWatchTheme(true);

};