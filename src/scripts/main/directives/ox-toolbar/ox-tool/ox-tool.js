;(function() {
  'use strict';
  angular
    .module('oxford.directives.toolbar.tool', [])
    .directive('oxTool', oxTool);
    function oxTool() {
      return {
        transclude: true,
        replace: true,
        restrict: 'E',
        scope: {
          // color: '=color',
          // icon: '=',
          // link: '=link',
          // title: '=title'
        },
        template: '<a href="{{link}}" class="tool {{color}}">' +
                  '<i ng-if="icon" class="fa fa-{{icon}}"></i>' +
                  '<span ng-if="title">{{title}}</span>' +
                  '</a>',
        link: function($scope, $element, $attr, navController) {
          $scope.icon = $attr.icon;
          $scope.color = $attr.color;
          $scope.title = $attr.title;
          $scope.link = $attr.link;
        }
      };
    }
}());