describe('test', function() {
  //load variables in closure scope to be used throughout tests
  var $scope, element, isolate;
  //load the chart module to gain access to the chart directive
  beforeEach(module('oxford.directives.chart'));
  //inject the rootscope and compile function to test the chart directive
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    //data that is used to populate the chart directive
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
    $scope.options = {
      test: 'test'
    };


    element = "<ox-chart id='chart' data='data' axis='axis' options='options'></ox-chart>";
    //complile the element to gain access to the link function
    element = $compile(element)($scope);
    //digest the scope to register the element
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

  it('should have an options property on the isolate scope', function() {
    expect(isolate.options).to.be.an('object');
  });

  it('should update chart', function() {
    $scope.data.columns.pop();
    $scope.$digest();
    expect(isolate.data.columns.length).to.be(1);
  });
});