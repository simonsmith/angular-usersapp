describe('UsersViewController', function() {
  beforeEach(module('app.users'));

  var UsersViewController, $scope;
  var UserServiceSpy = jasmine.createSpyObj('UserService', ['get']);

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();

    UsersViewController = $controller('UsersViewController', {
      $scope: $scope,
      $routeParams: { userId: 12345 },
      UserService: UserServiceSpy
    });
  }));

  it('should call the UserService with an id parameter on init', function() {
    expect(UserServiceSpy.get).toHaveBeenCalledWith({ id: 12345 });
  });
});
