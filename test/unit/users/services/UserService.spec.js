describe('UserService', function() {
  beforeEach(module('app.users'));

  var UserService,
      $httpBackend;

  beforeEach(inject(function(_$httpBackend_, _UserService_) {
    $httpBackend = _$httpBackend_;
    UserService = _UserService_;
  }));

  it('should return an instance of $resource', function() {
    expect(UserService.prototype.constructor.name).toBe('Resource');
  });

  it('should have an update method', function() {
    expect(typeof UserService.update).toBe('function');
  });

  it('should call with the /users endpoint', function() {
    $httpBackend.expectGET('/users').respond(200);
    UserService.get();
    $httpBackend.flush();
  });
});
