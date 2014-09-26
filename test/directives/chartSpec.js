describe('chart', function() {
  //load variables in closure scope to be used throughout tests
  var $scope, element, isolate, errorElement, compile;
  //load the chart module to gain access to the chart directive
  beforeEach(module('oxford.directives.chart'));
  //inject the rootscope and compile function to test the chart directive
  beforeEach(inject(function($rootScope, $compile) {
    compile = $compile;
    $scope = $rootScope.$new();
    //data that is used to populate the chart directive
    $scope.options = {
      columns: [
        ['Profile Completion', 100, 90, 75, 88, 12, 40],
        ['Interests Declared', 75, 99, 65, 12, 24, 63]
      ]
    };
    $scope.axis = {
      x: {
        type: 'category',
        categories: ['Josh', 'Mase', 'Xianhui', 'James', 'Joe', 'That One Guy']
      }
    };

    element = "<ox-chart id='chart' options='options' axis='axis' pattern='dark' grid='true' subchart='true'></ox-chart>";
    //complile the element to gain access to the link function
    element = $compile(element)($scope);


    //digest the scope to register the element
    $scope.$digest();

    isolate = element.isolateScope();
  }));

  it('should have isolate scope', function() {
    expect(isolate).to.be.an('object');
  });

  it('should have an axis property on the isolate scope', function() {
    expect(isolate.axis).to.be.an('object');
  });

  it('should have an options property on the isolate scope', function() {
    expect(isolate.options).to.be.an('object');
  });

  it('should log an error when options property is not given', function() {
    errorElement = "<ox-chart></ox-chart>";
    errorElement = compile(errorElement);
    expect(errorElement).withArgs($scope).to.throwException();
  });

  it('should update chart', function() {
    $scope.options.columns.pop();
    $scope.$digest();
    expect(isolate.options.columns.length).to.be(1);
  });

  it('should have a color property', function() {
    expect(isolate.color).to.be.an('object');
  });

  it('should have grid attribute option', function() {
    $scope.$digest();
    expect(isolate.grid.x).to.be.an('object');
    expect(isolate.grid.y).to.be.an('object');
  });

  it('should have subchart attribute option', function() {
    $scope.$digest();
    expect(isolate.subchart.show).to.be(true);
  });

  it('assign a default id if not given', function() {
    errorElement = "<ox-chart options='options'></ox-chart>";
    errorElement = compile(errorElement)($scope);
    $scope.$digest();
    expect(errorElement.attr('id')).to.be.contain('c3-chart');
  });
});









