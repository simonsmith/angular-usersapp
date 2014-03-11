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

        $scope.deleteUser = function() {
            UserService.delete({
                id: $routeParams.userId
            });
        }
    });
