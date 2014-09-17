;(function(){
  'use strict';

  angular.module('oxford.directives.drag', [])

  .directive('draggable', function() {
    return function(scope, element, attr) {
      if(attr.draggable !== 'false') {
        Draggable.create(element, {
        bounds: {top: 10, left: 10, width: 1000, height: 800},
        throwProps: true
        });
      }
    };
  });
}());