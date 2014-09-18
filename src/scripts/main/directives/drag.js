;(function(){
  'use strict';

  angular.module('oxford.directives.drag', [])

  .directive('draggable', function() {
    return function(scope, element, attr) {
      if(attr.draggable !== 'false') {
        Draggable.create(element, {
          bounds: document.getElementsByClassName('dashboard-content'),
          type: 'x,y',
          edgeResistance: 0.65,
          throwProps: true
        });
      }
    };
  });
}());