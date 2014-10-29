;(function() {
  'use strict';
  angular
    .module('oxford.directives.toolbar.tool', [])
    .directive('oxTool', oxTool);
    function oxTool() {
      return {
        transclude: true,
        // replace: true,
        restrict: 'E',
        scope: {
          // color: '=color',
          // icon: '=',
          // link: '=link',
          // title: '=title'
        },
        template: '<a href="{{link}}" class="tool withripple button-{{color}}">' +
                  '<i ng-if="icon" class="ox-icon fa fa-{{icon}}"></i>' +
                  '<span class="title">{{title}}</span>' +
                  '<paper-ripple fit></paper-ripple>'+
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