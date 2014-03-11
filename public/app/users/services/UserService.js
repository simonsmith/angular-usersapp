angular.module('app.users')
    .factory('UserService', function($resource) {
        return $resource('/users/:id', {}, {
            update: { method: 'PUT' }
        });
    });
