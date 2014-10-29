describe('ox-toolbar-brand', function() {
  var element, $scope, isolate;
  beforeEach(module('oxford.directives.toolbar.brand'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    //save a reference to the element
    element = '<ox-brand></ox-brand>';
    //compile the element and pass in a new rootscope into the link function
    element = $compile(element)($scope);
    //digest the scope to register the element
    $scope.$digest();
  }));
  it('Should exist', function() {
    expect(element).to.be.an(Object);
  });
  it('Should have the class ox-brand', function() {
    expect(angular.element(element).hasClass('ox-brand')).to.be(true);
  });
});