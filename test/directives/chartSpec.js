describe('test', function() {
  var $scope, element, isolate;

  beforeEach(module('oxford.directives.chart'));

  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    $scope.data = {
      columns: [
        ['Profile Completion', 100, 90, 75, 88, 12, 40],
        ['Interests Declared', 75, 99, 65, 12, 24, 63]
      ],
      type: 'area'
    };
   $scope.axis = {
      x: {
        type: 'category',
        categories: ['Josh', 'Mase', 'Xianhui', 'James', 'Joe', 'That One Guy']
      }
    };
    element = "<ox-chart data='data' axis='axis'></ox-chart>";
    element = $compile(element)($scope);
    $scope.$digest();
    isolate = element.isolateScope();
  }));

  it('should have isolate scope', function() {
    expect(isolate).to.be.an('object');
  });

  it('should have a data property on the isolate scope', function() {
    expect(isolate.data).to.be.an('object');
  });

  it('should have an axis property on the isolate scope', function() {
    expect(isolate.axis).to.be.an('object');
  });

});