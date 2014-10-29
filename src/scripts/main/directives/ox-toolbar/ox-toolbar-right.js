;(function(){
  'use strict';
  angular
    .module('oxford.directives.toolbar.right', [])
    .directive('oxToolbarRight', oxToolbarRight);
    function oxToolbarRight($window) {
      return {
        transclude: true,
        replace: true,
        scope: true,
        restrict: 'E',
        template: '<div class="ox-toolbar ox-toolbar-right bg-{{color}}">' +
          '<div ng-transclude></div>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {
          document.querySelector('body').classList.add('has-ox-toolbar-right')
          $scope.color = $attr.color || 'default'
        }
      };
    }
}).call(this);