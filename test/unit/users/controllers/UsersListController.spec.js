describe('UsersListController', function() {
  beforeEach(module('app.users'));

  var UsersListController, $scope;
  var UserServiceSpy = jasmine.createSpyObj('UserService', ['query']);

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();

    UsersListController = $controller('UsersListController', {
      $scope: $scope,
      UserService: UserServiceSpy
    });
  }));

  it('should call the UserService query method on init', function() {
    expect(UserServiceSpy.query).toHaveBeenCalled();
  });
});
