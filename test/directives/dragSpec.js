describe('Drag Directive', function() {

  var $scope, element;

  beforeEach(module('oxford.directives.drag'));

  beforeEach(inject(function($rootScope, $compile) {

    $scope = $rootScope.$new();
    element = "<draggable></draggable>";
    element = $compile(element)($scope);
    $scope.$digest();
    console.log(element);
  }));
  it('should have a draggable directive', function() {
    expect(element).to.be.an('object');
  });
});