;(function() {
  'use strict';

  angular.module('oxford.directives.list', [

  ])
  .directive('oxList', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      scope: true,
      template: '<ul class="ox-list">' +
        '<div ng-transclude></div>' +
      '</ul>',
      link: function($scope, $element, $attr, navController) {
      }
    };
  });
}());