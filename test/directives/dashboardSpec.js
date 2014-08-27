describe('dashboard', function() {
  //load the module that has the dashboard directives
  var $scope, element;
  beforeEach(module('oxford.directives.dashboard'));
  //load the rootscope and ox-dashboard directive and save reference for future tests
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    element = $compile('<ox-dashboard></ox-dashboard>')($scope);
  }));

  //test to see if the directive is replaced with a element that has a class='dashboard'
  it('should replace the element with the template', function() {
    $scope.$digest();
    expect(element).to.be.an('object');
  });

});