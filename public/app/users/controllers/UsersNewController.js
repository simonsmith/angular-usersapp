angular.module('app.users')
    .controller('UsersNewController', function($scope, $routeParams, UserService) {
        $scope.saveUser = function() {
            UserService.save($scope.user);
        };
    });
