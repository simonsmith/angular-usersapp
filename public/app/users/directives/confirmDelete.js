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
