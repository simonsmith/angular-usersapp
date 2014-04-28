describe('UsersDeleteController', function() {
  beforeEach(module('app.users'));

  var UsersDeleteController,
    $controller,
    $httpBackend,
    $scope,
    UserService,
    createController;

  beforeEach(inject(function(_$controller_, $rootScope, _$httpBackend_, _UserService_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    UserService = _UserService_;

    createController = function() {
      return $controller('UsersDeleteController', {
        $scope: $scope,
        user: { _id: 12345 },
        UserService: UserService
      });
    };
  }));

  describe('Deleting a single user', function() {
    beforeEach(function() {
      spyOn(UserService, 'delete').and.callThrough();
      $scope.$close = jasmine.createSpy('$close');

      $httpBackend.expectDELETE('/users/12345').respond(200);
      createController();
    });

    it('should delete the user', function() {
      $scope.deleteUser();
      $httpBackend.flush();

      expect(UserService.delete.calls.mostRecent().args[0]).toEqual({ id: 12345 });
    });

    it('should call $scope.$close() after delete', function() {
      $scope.deleteUser();
      $httpBackend.flush();

      expect($scope.$close).toHaveBeenCalled();
    });
  });
});
