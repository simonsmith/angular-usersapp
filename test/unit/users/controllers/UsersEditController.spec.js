describe('UsersEditController', function() {
  beforeEach(module('app.users'));

  var UsersEditController,
      $controller,
      $httpBackend,
      $scope,
      $window,
      UserService,
      controllerConfig;

  beforeEach(inject(function(_$controller_, $rootScope, _$window_, _$httpBackend_, _UserService_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $window = _$window_;
    $controller = _$controller_;
    UserService = _UserService_;

    controllerConfig = {
      $scope: $scope,
      $routeParams: { userId: 12345 },
      $window: $window,
      UserService: UserService
    };
  }));

  describe('Editing a single user', function() {
    beforeEach(function() {
      spyOn(UserService, 'update').and.callThrough();
      spyOn(UserService, 'get').and.callThrough();
      spyOn($window.history, 'back');
    });

    it('should assign the user to the scope', function() {
      $httpBackend.expectGET('/users/12345').respond(200, { id: 12345 });
      UsersEditController = $controller('UsersEditController', controllerConfig);
      $httpBackend.flush();

      expect(UserService.get).toHaveBeenCalledWith({ id: 12345 });
      expect($scope.user.id).toBe(12345);
    });

    it('should update a user when saved', function() {
      $httpBackend.whenGET('/users/12345').respond(200);
      $httpBackend.expectPUT('/users/12345', { name: 'Simon' }).respond(204);
      UsersEditController = $controller('UsersEditController', controllerConfig);

      $scope.user = {
        name: 'Simon'
      };
      $scope.saveUser();
      $httpBackend.flush();

      expect(UserService.update.calls.mostRecent().args[0]).toEqual({ id: 12345 });
      expect(UserService.update.calls.mostRecent().args[1]).toEqual({ name: 'Simon' });
      expect($window.history.back).toHaveBeenCalled();
    });
  });
});
