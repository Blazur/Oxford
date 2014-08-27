;(function() {
  'use strict';

  angular.module('oxford.directives.dashboard', [

  ])
  .directive('oxDashboard', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      scope: true,
      template:'<div class="dashboard">' +
      '<div ng-transclude></div>' +
      '</div>',
      controller: function($scope) {

      },
      link: function() {
      }
    };
  })
  .directive('oxDashboardNav', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      require: '^oxDashboard',
      template: '<div class="dashboard-nav g-medium--half">' +
        '<div ng-transclude></div>' +
      '</div>',
      link: function($scope, $element, $attr, navController) {
      }
    };
  })
  .directive('oxDashboardContent', function() {
    return {
      replace: true,
      require: '^oxDashboard',
      restrict: 'EA',
      template: '<div class="dashboard-content">' +
        '<div ui-view></div>' +
      '</div>',
      link: function($scope, $element, $attr, navController) {

      }
    };
  });
}());