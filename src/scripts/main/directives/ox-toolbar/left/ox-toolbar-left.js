;(function(){
  'use strict';
  angular
    .module('oxford.directives.toolbar.left', [])
    .directive('oxToolbarLeft', oxToolbarLeft);
    function oxToolbarLeft($window) {
      return {
        transclude: true,
        replace: true,
        restrict: 'E',
        template: '<div class="ox-toolbar ox-toolbar-left {{color}}">' +
          '<div ng-transclude></div>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {
          angular.element('body').addClass('has-ox-toolbar-left')
          $scope.color = 'default'
          if($attr.color){ $scope.color = $attr.color; }
        }
      };
    }
}).call(this);