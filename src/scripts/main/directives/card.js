;(function(){
  'use strict';

  angular.module('oxford.directives.card', [])

  .directive('oxCard', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      template: '<div class="card-material" draggable>' +
        '<div ng-transclude></div>' +
      '</div>',
      link: function(scope, element, attr) {
      }
    };
  });
}());