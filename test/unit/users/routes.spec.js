describe('User routes', function() {
  beforeEach(module('app.users'));

  var $route;

  beforeEach(inject(function(_$route_) {
    $route = _$route_;
  }));

  it('should configure /users', function() {
    expect($route.routes['/users'].templateUrl).toMatch(/user-list\.html$/);
    expect($route.routes['/users'].controller).toBe('UsersListController');
  });

  it('should configure /users/new', function() {
    expect($route.routes['/users/new'].templateUrl).toMatch(/user-edit\.html$/);
    expect($route.routes['/users/new'].controller).toBe('UsersNewController');
  });

  it('should configure /users/edit/:userId', function() {
    expect($route.routes['/users/edit/:userId'].templateUrl).toMatch(/user-edit\.html$/);
    expect($route.routes['/users/edit/:userId'].controller).toBe('UsersEditController');
  });

  it('should configure /users/:userId', function() {
    expect($route.routes['/users/:userId'].templateUrl).toMatch(/user-view\.html$/);
    expect($route.routes['/users/:userId'].controller).toBe('UsersViewController');
  });

  it('should redirect to the /users when no route is found', function() {
    expect($route.routes['null'].redirectTo).toBe('/users');
  });
});
