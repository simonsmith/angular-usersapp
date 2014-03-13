angular.module('app.users')
  .controller('UsersNewController', function($scope, $location, UserService) {
    $scope.saveUser = function() {
      UserService.save($scope.user, function() {
        $location.path('/users');
      });
    };
  });
