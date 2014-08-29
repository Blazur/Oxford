describe('dashboard', function() {
  //load the module that has the dashboard directives
  var $scope, oxDashboard, oxDashboardNav, oxDashboardContent;
  beforeEach(module('oxford.directives.dashboard'));
  //load the rootscope and ox-dashboard directive and save reference for future tests
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    oxDashboard = $compile('<ox-dashboard></ox-dashboard>')($scope);
    oxDashboardNav = $compile('<ox-dashboard>' + '<ox-dashboard-nav></ox-dashboard-nav>' + '</ox-dashboard>')($scope);
    oxDashboardContent = $compile('<ox-dashboard>' + '<ox-dashboard-content></ox-dashboard-content>' + '</ox-dashboard>')($scope);
  }));

  //test to see if the ox-dashboard directive exists
  it('should have a oxDashboard directive', function() {
    $scope.$digest();
    expect(oxDashboard).to.be.an('object');
  });
  //test to see if the ox-dashboard directive exists and that it must be a child of the oxDashboard
  it('should have a oxDashboardNav directive', function() {
    $scope.$digest();
    expect(oxDashboardNav).to.be.an('object');
  });
  // test to see if the ox-dashboard-content directive exists and it must be a child of the oxDashboard
  it('should have a oxDashboardContent directive', function() {
    $scope.$digest();
    expect(oxDashboardContent).to.be.an('object');
  });
});