;(function() {
  'use strict';
  angular
    .module('oxford.directives.toolbar.brand', [])
    .directive('oxBrand', oxBrand);
  function oxBrand() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      scope: true,
      template: '<div class="ox-brand">' +
        '<div ng-transclude></div>' +
      '</div>',
      link: function($scope, $element, $attr, navController) {

      }
    };
  }
}());