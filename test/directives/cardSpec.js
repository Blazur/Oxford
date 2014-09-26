describe('card', function() {

  var $scope, element;

  beforeEach(module('oxford.directives.card'));

  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    element = "<ox-card></ox-card>";
    element = $compile(element)($scope);
    $scope.$digest();
  }));
  it('should have a class of card-material', function() {
    expect(element.attr('class')).to.contain('card-material');
  });
});