;(function(){
  'use strict';

  angular.module('oxford.directives.card', [])

  .directive('oxCard', function() {
    return {
      restrict: 'EAC',
      replace: true,
      template: '<div class="card-material"></div>',
      link: function(scope, element, attr) {
        Draggable.create(element);
      }
    };
  });
}());