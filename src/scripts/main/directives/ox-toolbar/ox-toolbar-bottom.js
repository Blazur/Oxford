;(function() {
  'use strict';

  angular
    .module('oxford.directives.toolbar.bottom', [])
    .directive('oxToolbarBottom', oxToolbarBottom);
    function oxToolbarBottom() {
      return {
        transclude: true,
        replace: true,
        restrict: 'EA',
        scope: true,
        template: '<div class="ox-toolbar ox-toolbar-bottom bg-{{color}}" ng-class="{\'ox-toolbar-has-title\': title }">' +
          '<ox-toolbar-header ng-if="title">'+
            '<ox-brand>{{title}}</ox-brand>'+
          '</ox-toolbar-header>'+
          '<ox-toolbox ng-if="title" ng-transclude></ox-toolbox>' +
          '<ox-toolbox ng-if="!title" ng-transclude></ox-toolbox>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {
          if( $attr.fixed === "true" ){
            $element.addClass('fixed-bottom')
          }
          $scope.color = $attr.color || 'default';

          $scope.title = $attr.title;
        }
      };
    }
}());