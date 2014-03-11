angular.module('app.users')
    .controller('UsersListController', function($scope, UserService) {
        $scope.users = UserService.query();
    });
