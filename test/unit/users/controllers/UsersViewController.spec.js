describe('UsersViewController', function() {
  beforeEach(module('app.users'));

  var UsersViewController,
      $scope,
      $httpBackend,
      $controller,
      UserService,
      createController;

  beforeEach(inject(function(_$controller_, $rootScope, _$httpBackend_, _UserService_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    UserService = _UserService_;

    createController = function() {
      return $controller('UsersViewController', {
        $scope: $scope,
        $routeParams: { userId: 12345 },
        UserService: UserService
      });
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
      $httpBackend.expectGET('/users/12345').respond(200, { id: 12345 });
      createController();
      $httpBackend.flush();

      expect(UserService.get).toHaveBeenCalledWith({ id: 12345 });
      expect($scope.user.id).toBe(12345);
    });
  });
});
