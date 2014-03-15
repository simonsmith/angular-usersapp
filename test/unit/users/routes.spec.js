describe('User routes', function() {
  beforeEach(module('app.users'));

  var $location,
      $route,
      $rootScope,
      $httpBackend;

  beforeEach(inject(function(_$location_, _$route_, _$rootScope_, _$httpBackend_) {
    $location = _$location_;
    $route = _$route_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  it('should load /users', function() {
    $httpBackend.whenGET('/public/app/users/views/user-list.html').respond(200);
    $location.path('/users');
    $rootScope.$digest();

    expect($route.current.controller).toBe('UsersListController');
  });

  it('should load /users/new', function() {
    $httpBackend.whenGET('/public/app/users/views/user-edit.html').respond(200);
    $location.path('/users/new');
    $rootScope.$digest();

    expect($route.current.controller).toBe('UsersNewController');
  });

  it('should load /users/edit/:id', function() {
    $httpBackend.whenGET('/public/app/users/views/user-edit.html').respond(200);
    $location.path('/users/edit/12345');
    $rootScope.$digest();

    expect($route.current.controller).toBe('UsersEditController');
  });

  it('should load /users/:id', function() {
    $httpBackend.whenGET('/public/app/users/views/user-view.html').respond(200);
    $location.path('/users/12345');
    $rootScope.$digest();

    expect($route.current.controller).toBe('UsersViewController');
  });

  it('should redirect to the /users when no route is found', function() {
    $httpBackend.whenGET('/public/app/users/views/user-list.html').respond(200);
    $location.path('/some/wrong/route');
    $rootScope.$digest();

    expect($route.current.controller).toBe('UsersListController');
  });
});
