describe('list', function() {
  var $scope, element;

  beforeEach(module('oxford.directives.list'));

  beforeEach(inject(function($rootScope, $compile) {
    $rootScope.$new();

    element = '<ox-list></ox-list>';
    element = $compile(element)($scope);

    $scope.digest();
  }));
  it('should have a list class', function() {
    console.log(element.class);
    // expect(element)
  });
});