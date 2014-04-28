describe('UsersNewController', function() {
  beforeEach(module('app.users'));

  var UsersNewController,
    $controller,
    $httpBackend,
    $scope,
    $location,
    UserService,
    createController;

  beforeEach(inject(function(_$controller_, $rootScope, _$location_, _$httpBackend_, _UserService_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $controller = _$controller_;
    UserService = _UserService_;

    createController = function() {
      return $controller('UsersNewController', {
        $scope: $scope,
        $location: $location,
        UserService: UserService
      });
    };
  }));

  describe('Creating a new user', function() {
    beforeEach(function() {
      spyOn(UserService, 'save').and.callThrough();
      spyOn($location, 'path');
    });

    it('should save the new user', function() {
      $httpBackend.expectPOST('/users').respond(201);
      createController();

      $scope.user = {
        name: 'Simon'
      };
      $scope.saveUser();
      $httpBackend.flush();

      expect(UserService.save.calls.mostRecent().args[0]).toEqual({ name: 'Simon' });
      expect($location.path).toHaveBeenCalledWith('/users');
    });
  });
});
