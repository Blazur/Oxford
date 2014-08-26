;(function() {
  'use strict';

  angular.module('oxford.directives.sideMenu', [

  ])
  .directive('oxNav', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      scope: true,
      template:'<div class="side-nav">' +
      '<div ng-transclude></div>' +
      '</div>',
      controller: function($scope) {
        console.log($scope);
        this.name = 'Parent';
      },
      link: function() {
        console.log('link parent');
      }
    };
  })
  .directive('oxNavContent', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      require: '^oxNav',
      template: '<div class="nav-content">' +
        '<div ng-transclude></div>' +
      '</div>',
      link: function($scope, $element, $attr, navController) {
        console.log(navController.name);
        $scope.name = navController.name;
      }
    };
  })
  .directive('oxMainContent', function() {
    return {
      replace: true,
      require: '^oxNav',
      restrict: 'EA',
      template: '<div class="main-content">' +
        '<div ui-view></div>' +
      '</div>',
      link: function($scope, $element, $attr, navController) {

      }
    };
  });
}());