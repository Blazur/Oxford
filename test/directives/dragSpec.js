describe('Drag Directive', function() {

  var $scope, element;

  beforeEach(module('oxford.directives.drag'));

  beforeEach(inject(function($rootScope, $compile) {

    $scope = $rootScope.$new();
    element = "<draggable></draggable>";
    element = $compile(element)($scope);
    $scope.$digest();
  }));
  it('should have a draggable directive', function() {
  //   console.log(element);
    expect(element).to.be.an('object');
  });
});