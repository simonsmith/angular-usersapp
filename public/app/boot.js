angular.module('app.filters', []);
angular.module('app.users');
angular.module('app.home');


angular.module('app', [
    'app.users',
    'app.home',
    'app.filters',
    'ngResource',
    'ngRoute'
]);

