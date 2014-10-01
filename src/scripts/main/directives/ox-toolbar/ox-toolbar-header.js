;(function() {
  'use strict';
  angular
    .module('oxford.directives.toolbar.header',[])
    .directive('oxToolbarHeader', oxToolbarHeader);
    function oxToolbarHeader() {
      return {
        transclude: true,
        replace: true,
        restrict: 'EA',
        scope: true,
        template: '<div class="ox-toolbar-header">' +
          '<div ng-transclude></div>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {

        }
      };
    }
}());