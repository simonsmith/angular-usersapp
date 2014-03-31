angular.module('app.users')
  .controller('UsersNewController', function($scope, $location, UserService) {
    $scope.saveUser = function(isInvalid) {
      if (isInvalid) {
        return;
      }

      UserService.save($scope.user, function() {
        $location.path('/users');
      });
    };

    console.log($scope);
  });
