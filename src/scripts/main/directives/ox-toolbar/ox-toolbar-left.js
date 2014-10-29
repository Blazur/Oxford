;(function(){
  'use strict';
  angular
    .module('oxford.directives.toolbar.left', [])
    .directive('oxToolbarLeft', oxToolbarLeft);
    function oxToolbarLeft($window) {
      return {
        transclude: true,
        replace: true,
        scope: true,
        restrict: 'E',
        template: '<div class="ox-toolbar ox-toolbar-left bg-{{color}}">' +
          '<div ng-transclude></div>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {
          $scope.color = $attr.color;
          document.querySelector('body').classList.add('has-ox-toolbar-left')
        }
      };
    }
}).call(this);