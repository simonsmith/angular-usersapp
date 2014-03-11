angular.module('app.home').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: '/public/app/home/views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
