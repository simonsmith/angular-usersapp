angular.module('app.users')
  .controller('UsersViewController', function($scope, $routeParams, UserService) {
    $scope.user = UserService.get({
      'id': $routeParams.userId
    });
  });
