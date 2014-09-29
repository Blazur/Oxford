;(function() {
  'use strict';

  angular.module('oxford.directives.toolbar', [
    'oxford.directives.toolbar.header',
    'oxford.directives.toolbar.brand',
    'oxford.directives.toolbar.toolbox',
    'oxford.directives.toolbar.tools',
    'oxford.directives.toolbar.tool',
    'oxford.directives.toolbar.top'
  ])
  /*.directive('oxToolbar', function() {
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
  });*/
}());