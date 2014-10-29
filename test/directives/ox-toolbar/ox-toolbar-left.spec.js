describe('ox-toolbar-left', function() {
  var element, $scope, isolate, el
  beforeEach(module('oxford.directives.toolbar.left'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    //save a reference to the element
    // el = '<ox-toolbar-left></ox-toolbar-left>';
    //compile the element and pass in a new rootscope into the link function
    element = $compile('<ox-toolbar-left color="blue-400"></ox-toolbar-left>')($scope);
    //digest the scope to register the element
    $scope.$digest();
  }));
  it('should exist', function() {
    expect(element).to.be.an(Object);
  });
  it('should have basic ox-toolbar classes', function() {
    var el = angular.element(element)
    expect( el.hasClass('ox-toolbar') ).to.be(true);
    expect( el.hasClass('ox-toolbar-left') ).to.be(true);
  });
  it('should have a class that matches the color attr', function() {
    var el = angular.element(element)
    expect( el.hasClass('bg-blue-400') ).to.be(true);
  });
  it('Body should have class is toolbar-left exists', function() {

    var body = angular.element(document.querySelector('body'))
    expect( body.hasClass('has-ox-toolbar-left') ).to.be(true);

  });

});