angular.module('app.users')
  .controller('UsersEditController', function($scope, $routeParams, $window, UserService) {
    if (angular.isString($routeParams.userId)) {
      $scope.user = UserService.get({
        'id': $routeParams.userId
      });
    }

    $scope.saveUser = function() {
      UserService.update({
        id: $routeParams.userId
      }, $scope.user, function() {
        $window.history.back();
      });
    };
  });
