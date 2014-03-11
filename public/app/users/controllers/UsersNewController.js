angular.module('app.users')
  .controller('UsersNewController', function($scope, $routeParams, $location, UserService) {
    $scope.saveUser = function() {
      UserService.save($scope.user);

    };
  });
