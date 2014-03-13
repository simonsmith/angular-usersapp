describe('UsersViewController', function() {
  beforeEach(module('app.users'));

  var UsersViewController,
      $scope,
      $httpBackend,
      $controller,
      UserService,
      controllerConfig;

  beforeEach(inject(function(_$controller_, $rootScope, _$httpBackend_, _UserService_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    UserService = _UserService_;

    controllerConfig = {
      $scope: $scope,
      $routeParams: { userId: 12345 },
      UserService: UserService
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('Getting a single user', function() {
    beforeEach(function() {
      spyOn(UserService, 'get').and.callThrough();
    });

    it('should assign the user to the scope', function() {
      $httpBackend.expectGET('/users/12345').respond(200, { _id: 12345 });
      UsersViewController = $controller('UsersViewController', controllerConfig);
      $httpBackend.flush();

      expect(UserService.get).toHaveBeenCalledWith({ id: 12345 });
      expect($scope.user._id).toBe(12345);
    });
  });
});
