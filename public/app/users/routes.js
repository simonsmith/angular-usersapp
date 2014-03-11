angular.module('app.users').config(function($routeProvider) {
  $routeProvider
    .when('/users', {
      controller: 'UsersListController',
      templateUrl: '/public/app/users/views/user-list.html'
    })
    .when('/users/new', {
      controller: 'UsersNewController',
      templateUrl: '/public/app/users/views/user-edit.html'
    })
    .when('/users/edit/:userId', {
      controller: 'UsersEditController',
      templateUrl: '/public/app/users/views/user-edit.html'
    })
    .when('/users/:userId', {
      controller: 'UsersViewController',
      templateUrl: '/public/app/users/views/user-view.html'
    });
});
