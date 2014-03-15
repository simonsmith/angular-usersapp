describe('Capitalise filter', function() {
  beforeEach(module('app.filters'));

  var $filter, capitalise;

  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
    capitalise = $filter('capitalise');
  }));

  it('should capitalise a string of text', function() {
    expect(capitalise('hello')).toBe('Hello');
    expect(capitalise('Hello')).toBe('Hello');
    expect(capitalise('heLLo')).toBe('HeLLo');
  });

  it('should ignore non-string types', function() {
    expect(capitalise(1234)).toBe(1234);
    expect(capitalise({})).toEqual({});
  });
});
