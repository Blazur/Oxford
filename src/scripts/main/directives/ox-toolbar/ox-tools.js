;(function() {
  'use strict';
  angular
    .module('oxford.directives.toolbar.tools',[])
    .directive('oxTools', oxTools);
    function oxTools() {
      return {
        transclude: true,
        replace: true,
        restrict: 'EA',
        scope: {
          side: '=side'
        },
        template: '<div class="tools tools-{{side}}">' +
          '<div ng-transclude></div>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {
          $scope.side = $attr.side;
        }
      };
    }
}());