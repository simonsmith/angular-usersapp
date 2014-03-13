describe('UsersNewController', function() {
  beforeEach(module('app.users'));

  var UsersNewController,
    $controller,
    $httpBackend,
    $scope,
    $location,
    UserService,
    controllerConfig;

  beforeEach(inject(function(_$controller_, $rootScope, _$location_, _$httpBackend_, _UserService_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $controller = _$controller_;
    UserService = _UserService_;

    controllerConfig = {
      $scope: $scope,
      $routeParams: { userId: 12345 },
      $location: $location,
      UserService: UserService
    };
  }));

  describe('Editing a single user', function() {
    beforeEach(function() {
      spyOn(UserService, 'save').and.callThrough();
      spyOn($location, 'path');
    });

    it('should save the new user', function() {
      $httpBackend.expectPOST('/users').respond(201);
      UsersNewController = $controller('UsersNewController', controllerConfig);

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
