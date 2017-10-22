module.exports = function($mdThemingProvider) {

  'ngInject';

  var contaAzulBlueMap = $mdThemingProvider.extendPalette('blue', {
    '500': '#2585e9'
  });

  var contaAzulWarn = $mdThemingProvider.extendPalette('red', {
    '500': '#b54948'
  });

  var contaAzulAccent = $mdThemingProvider.extendPalette('green', {
    'A200': '#4aba58',
    'contrastDefaultColor': 'light'
  });

  $mdThemingProvider.definePalette('contaAzul', contaAzulBlueMap);
  $mdThemingProvider.definePalette('contaAzulWarning', contaAzulWarn);
  $mdThemingProvider.definePalette('contaAzulAccent', contaAzulAccent);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('contaAzul')
    .accentPalette('contaAzulAccent')
    .warnPalette('contaAzulWarning');

  $mdThemingProvider.alwaysWatchTheme(true);

};
