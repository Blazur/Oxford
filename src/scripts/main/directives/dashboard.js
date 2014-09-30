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
  .directive('oxDashboardContent', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      scope: true,
      template:'<div class="dashboard-content">' +
                '<ox-dashboard-view></ox-dashboard-view>' +
              '</div>',
      controller: function($scope) {

      },
      link: function() {
      }
    };
  })
  .directive('oxDashboardView', function() {
    return {
      replace: true,
      require: '^oxDashboard',
      restrict: 'EA',
      template: '<div class="dashboard-view">' +
        '<div ui-view></div>' +
      '</div>',
      link: function($scope, $element, $attr, navController) {

      }
    };
  });
}());