;(function() {
  'use strict';

  angular.module('oxford.directives.toolbar', [

  ])
  .directive('oxToolbar', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      scope: true,
      template: '',
      link: function() {
      }
    };
  });
}());