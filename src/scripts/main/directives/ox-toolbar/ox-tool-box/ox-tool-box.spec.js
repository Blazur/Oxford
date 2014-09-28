describe('toolbar tool-box', function() {
  var element, $scope, isolate;
  beforeEach(module('oxford.directives.toolbar.toolbox'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    //save a reference to the element
    element = '<ox-tool-box></ox-tool-box>';
    //compile the element and pass in a new rootscope into the link function
    element = $compile(element)($scope);
    //digest the scope to register the element
    $scope.$digest();
  }));
  it('should exist', function() {
    expect(element).to.be.an(Object);
  });
});
