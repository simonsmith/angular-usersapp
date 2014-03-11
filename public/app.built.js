angular.module('app.filters', []);
angular.module('app.users', ['ngRoute']);
angular.module('app.home', ['ngRoute']);


angular.module('app', [
    'app.users',
    'app.home',
    'app.filters',
    'ngResource'
]);


angular.module('app.filters').filter('capitalise', function() {
    "use strict";
    return function(input) {
        if (!angular.isString(input)) {
            return input;
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
});

angular.module('app.home')
    .controller('HomeController', function($scope) {
        $scope.test = 'Hello'
    });

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

angular.module('app.users')
    .controller('UsersEditController', function($scope, $routeParams, $location, UserService) {
        if (angular.isString($routeParams.userId)) {
            $scope.user = UserService.get({
                'id': $routeParams.userId
            });
        }

        $scope.saveUser = function() {
            UserService.update({
                id: $routeParams.userId
            }, $scope.user);
        };

        $scope.canDeleteUser = function() {
            return true;
        };

        $scope.deleteUser = function() {
            UserService.delete({
                id: $routeParams.userId
            }, function() {
                $location.href = '/users';
            });
        }
    });

angular.module('app.users')
    .controller('UsersListController', function($scope, UserService) {
        $scope.users = UserService.query();
    });

angular.module('app.users')
    .controller('UsersNewController', function($scope, $routeParams, UserService) {
        $scope.saveUser = function() {
            UserService.save($scope.user);
        };
    });

angular.module('app.users')
    .controller('UsersViewController', function($scope, $routeParams, UserService) {
        $scope.user = UserService.get({
            'id': $routeParams.userId
        });
    });

angular.module('app.users').config(function($routeProvider) {
    $routeProvider
        .when('/users', {
            controller: 'UsersListController',
            templateUrl: '/public/app/users/views/user-list.html'
        })
        .when('/users/new', {
            controller: 'UsersNewController',
            templateUrl: '/public/app/users/views/user-edit.html'
        })
        .when('/users/edit/:userId', {
            controller: 'UsersEditController',
            templateUrl: '/public/app/users/views/user-edit.html'
        })
        .when('/users/:userId', {
            controller: 'UsersViewController',
            templateUrl: '/public/app/users/views/user-view.html'
        });
});

angular.module('app.users')
    .factory('UserService', function($resource) {
        return $resource('/users/:id', {}, {
            update: { method: 'PUT' }
        });
    });
