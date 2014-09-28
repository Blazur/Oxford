;(function(){
  'use strict';
  angular
    .module('oxford.directives.dashboard')
    .directive('oxDashboardNav', oxDashboardNav);
    function oxDashboardNav($window) {
      return {
        transclude: true,
        replace: true,
        restrict: 'EA',
        require: '^oxDashboard',
        template: '<div class="dashboard-nav">' +
          '<div ng-transclude></div>' +
        '</div>',
        link: function($scope, $element, $attr, navController) {
        }
      };
    }
}).call(this);