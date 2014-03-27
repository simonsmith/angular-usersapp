angular.module('app.filters', []);
angular.module('app.users', ['ngRoute', 'ui.bootstrap', 'ngResource']);
angular.module('app.home', ['ngRoute']);


angular.module('app', [
  'app.users',
  'app.home',
  'app.filters'
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

angular.module('app.users')
  .controller('UsersDeleteController', function($scope, user, UserService) {
    $scope.deleteUser = function() {
      UserService.delete({
        'id': user._id
      }, function() {
        $scope.$close();
      });
    };
  });

angular.module('app.users')
  .controller('UsersEditController', function($scope, $routeParams, $window, UserService) {
    $scope.user = UserService.get({
      'id': $routeParams.userId
    });

    $scope.saveUser = function() {
      UserService.update({
        id: $routeParams.userId
      }, $scope.user, function() {
        $window.history.back();
      });
    };
  });

angular.module('app.users')
  .controller('UsersListController', function($scope, UserService) {
    $scope.users = UserService.query();
  });

angular.module('app.users')
  .controller('UsersNewController', function($scope, $location, UserService) {
    $scope.saveUser = function() {
      UserService.save($scope.user, function() {
        $location.path('/users');
      });
    };
  });

angular.module('app.users')
  .controller('UsersViewController', function($scope, $routeParams, UserService) {
    $scope.user = UserService.get({
      'id': $routeParams.userId
    });
  });

angular.module('app.users')
  .directive('confirmDelete', function() {
    return {
      restrict: 'A',
      scope: true,
      controller: function($scope, $modal) {
        $scope.confirmDelete = function() {
          var modal = $modal.open({
            templateUrl: '/public/app/users/views/modal-delete.html',
            scope: $scope,
            controller: 'UsersDeleteController',
            resolve: {
              user: function() {
                return $scope.user;
              }
            }
          });

          modal.result.then(function() {
            $scope.users.splice($scope.users.indexOf($scope.user), 1);
          });
        };
      }
    }
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
    })
    .otherwise({
      redirectTo: '/users'
    });
});

angular.module('app.users')
  .factory('UserService', function($resource) {
    return $resource('/users/:id', {}, {
      update: { method: 'PUT' }
    });
  });
