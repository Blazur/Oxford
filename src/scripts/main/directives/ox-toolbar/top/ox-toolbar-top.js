;(function() {
  'use strict';

  angular
    .module('oxford.directives.toolbar.top', [   ])
    .directive('oxToolbarTop', oxToolbarTop);
    function oxToolbarTop() {
      return {
        transclude: true,
        replace: true,
        restrict: 'EA',
        scope: true,
        template: '<div class="ox-toolbar ox-toolbar-top">' +
          '<ox-toolbar-header ng-if="title">'+
            '<ox-brand>{{title}}</ox-brand>'+
          '</ox-toolbar-header>'+
          '<ox-toolbox ng-if="title" ng-transclude></ox-toolbox>' +
          '<ox-toolbox ng-if="!title" ng-transclude></ox-toolbox>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {
          if( $attr.fixed === "true" ){
            $lement.addClass('fixed-top')
          }
          $scope.title = $attr.title;
          if($attr.title){
            $element.toggleClass('ox-toolbar-has-title')
          }
        }
      };
    }
}());