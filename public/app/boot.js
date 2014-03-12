angular.module('app.filters', []);
angular.module('app.users', ['ngRoute', 'ui.bootstrap', 'ngResource']);
angular.module('app.home', ['ngRoute']);


angular.module('app', [
  'app.users',
  'app.home',
  'app.filters'
]);

