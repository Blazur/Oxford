describe('list', function() {
  var $scope, list, item;

  beforeEach(module('oxford.directives.list'));

  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    list = '<ox-list></ox-list>';
    list = $compile(list)($scope);
    item = $compile('<ox-item></ox-item>')($scope);

  }));

  it('should have a list class', function() {
    expect(list.attr('class')).to.contain('ox-list');
  });
  it('should have a list directive', function() {
    $scope.$digest();
    expect(list).to.be.an('object');
  });
  it('should have an item directive', function() {
    expect(item).to.be.an('object');
  });

});