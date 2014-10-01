describe('ox-toggle-toolbar-right', function() {
  var element, $scope, isolate;
  beforeEach(module('oxford.directives.toolbar.right.toggle'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    //save a reference to the element
    element = '<ox-toggle-toolbar-right></ox-toggle-toolbar-right>';
    //compile the element and pass in a new rootscope into the link function
    element = $compile(element)($scope);
    //digest the scope to register the element
    $scope.$digest();
  }));
  it('Should exist', function() {
    expect(element).to.be.an(Object);
  });
  it('Should toggle class on body when opened', function() {
    var body = angular.element(document.querySelector('body'))
     angular.element(element).triggerHandler('click')
    expect(body.hasClass( 'show-toolbar-right' ) ).to.be(true);
    angular.element(element).triggerHandler('click')
    expect(body.hasClass( 'show-toolbar-right' ) ).to.be(false);
  });
});