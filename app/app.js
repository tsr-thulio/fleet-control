require('angular');

angular.module('Fleet', [
  require('angular-aria'),
  require('angular-animate'),
  require('angular-messages'),
  require('angular-material'),
  require('angular-sanitize'),
  require('angular-material-data-table'),
  require('@uirouter/angularjs').default,
  require('./core'),
  require('./fleet')
])

.config(require('./routes'))
.config(require('./config'));
