;(function() {
  'use strict';

  angular.module('oxford.directives.toolbar', [

  ])
  .directive('oxToolbar', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      scope: true,
      template: '<div class="ox-toolbar">' +
        '<div ng-transclude></div>' +
      '</div>',
      link: function($scope, $element, $attr, navController) {
      }
    };
  });
}());