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
