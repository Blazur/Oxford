describe('Drag Directive', function() {

  var $scope, element;

  beforeEach(module('oxford.directives.card'));
  // beforeEach(module('oxford.directives.card'));

  beforeEach(inject(function($rootScope, $compile) {

    $scope = $rootScope.$new();
    element = "<ox-card></ox-card>";
    element = $compile(element)($scope);
    $scope.$digest();
  }));
  it('should have a draggable directive', function() {
    expect(element.attr('draggable')).to.equal('');
  });
});