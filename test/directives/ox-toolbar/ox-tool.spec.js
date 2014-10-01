describe('ox-tool', function() {
  var element, $scope, isolate;
  beforeEach(module('oxford.directives.toolbar.tool'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    //save a reference to the element
    element = '<ox-tool color="red-300" link="#/home" title="test" icon="user"></ox-tool>';
    //compile the element and pass in a new rootscope into the link function
    element = $compile(element)($scope);
    //digest the scope to register the element
    $scope.$digest();
  }));
  it('should exist', function() {
    expect(element).to.be.an(Object);
  });
  it('Should have children <A></A> & <I></I> & <SPAN></SPAN>', function() {
    expect( angular.element(element).children('a')).to.be.an(Object);
    expect( angular.element(element).children('i')).to.be.an(Object);
    expect( angular.element(element).children('span')).to.be.an(Object);
  });
  it('Should have child <A></A> with Specific Attributes', function() {
    var Aelement = angular.element(element).children('a')
    expect( Aelement.hasClass('button-red-300')).to.be(true);
    expect( Aelement.hasClass('tool')).to.be(true);
    expect( Aelement.attr('href')).to.be('#/home');
  });
  it('Should have child <I></I> with Specific Attributes', function() {
    var Ielement = angular.element(element).children('a').children('i')
    expect( Ielement.hasClass('fa-user')).to.be(true);
    expect( Ielement.hasClass('ox-icon')).to.be(true);
  });
  it('Should have child <SPAN></SPAN> with Specific Attributes', function() {
    var SPANelement = angular.element(element).children('a').children('span')[1]
    var span = angular.element(SPANelement)
    expect( span ).to.be.an(Object)
    expect( span.hasClass('title') ).to.be(true);
    expect( span.text() ).to.be('test')
  });
});