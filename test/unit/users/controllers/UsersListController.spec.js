describe('UsersListController', function() {
  beforeEach(module('app.users'));

  var UsersListController,
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
      return $controller('UsersListController', {
        $scope: $scope,
        UserService: UserService
      });
    };
  }));

  describe('Getting a list of users', function() {
    beforeEach(function() {
      spyOn(UserService, 'query').and.callThrough();
    });

    it('should assign the users to the scope', function() {
      $httpBackend.expectGET('/users').respond(200, [{id: '1'}]);
      createController();
      $httpBackend.flush();

      expect(UserService.query).toHaveBeenCalled();
      expect($scope.users[0].id).toEqual('1');
    });
  });
});
