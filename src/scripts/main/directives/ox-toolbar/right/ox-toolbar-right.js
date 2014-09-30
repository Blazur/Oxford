;(function(){
  'use strict';
  angular
    .module('oxford.directives.toolbar.right', [])
    .directive('oxToolbarRight', oxToolbarRight);
    function oxToolbarRight($window) {
      return {
        transclude: true,
        replace: true,
        restrict: 'E',
        template: '<div class="ox-toolbar ox-toolbar-right {{color}}">' +
          '<div ng-transclude></div>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {
          angular.element('body').addClass('has-ox-toolbar-right')
          $scope.color = 'default'
          if($attr.color){ $scope.color = $attr.color; }
        }
      };
    }
}).call(this);