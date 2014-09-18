;(function(){
  'use strict';

  angular.module('oxford.directives.drag', [])

  .directive('draggable', function() {
    return function(scope, element, attr) {
      console.log(element);
      if(attr.draggable !== 'false') {
        Draggable.create(element, {
          bounds: {top: 10, left: 10, width: 925},
          type: 'x,y',
          edgeResistance: 0.65,
          throwProps: true
        });
      }
    };
  });
}());