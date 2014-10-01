describe('ox-toolbar-top', function() {
  var element, $scope, isolate, el
  beforeEach(module('oxford.directives.toolbar.top'));
  beforeEach(module('oxford.directives.toolbar.header'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    //save a reference to the element
    // el = '<ox-toolbar-left></ox-toolbar-left>';
    //compile the element and pass in a new rootscope into the link function
    element = $compile('<ox-toolbar-top color="blue-400" title="Oxford"></ox-toolbar-top>')($scope);
    //digest the scope to register the element
    $scope.$digest();
  }));
  it('should exist', function() {
    expect(element).to.be.an(Object);
  });
  it('should have basic ox-toolbar classes', function() {
    var el = angular.element(element)
    expect( el.hasClass('ox-toolbar') ).to.be(true);
    expect( el.hasClass('ox-toolbar-top') ).to.be(true);
  });
  it('should have a class that matches the color attr', function() {

    var el = angular.element(element)
    expect( el.hasClass('bg-blue-400') ).to.be(true);
  });
  it('Body should have a ox-toolbar-header element if title is specified', function() {

    var children = angular.element(element).children()
    var title = angular.element(children[0])
    expect( title.hasClass('ox-toolbar-header') ).to.be(true);

  });

});