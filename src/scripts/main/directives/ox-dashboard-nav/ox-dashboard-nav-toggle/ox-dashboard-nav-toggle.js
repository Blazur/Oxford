;(function(){
  'use strict';
  angular
    .module('oxford.directives.dashboard')
    .directive('oxDashboardNavToggle', oxDashboardNavToggle);
    function oxDashboardNavToggle($window) {
      return {
        replace: true,
        restrict: 'EA',
        link: function($scope, $element, $attr, navController) {
          $element.on('click', toggleNav);

          function toggleNav(){
            angular.element('body').toggleClass('show-dashboard-nav')
          }

        }
      };
    }
}).call(this);