;(function(){
  'use strict';

  angular.module('oxford.directives.drag', [])

  .directive('draggable', function() {
    var gridWidth = 200;
    var gridHeight = 100;
    var bounds = document.getElementsByClassName('dashboard-content');
    console.log(bounds, ' bounds');
    return function(scope, element, attr) {
      if(attr.draggable !== 'false') {
        Draggable.create(element, {
          bounds: bounds,
          type: 'x,y',
          edgeResistance: 0.90,
          throwProps: true,
          // liveSnap: true,
          snap: {
            x: function(endValue) {
              return Math.round(endValue / gridWidth) * gridWidth;
            },
            y: function(endValue) {
              return Math.round(endValue / gridHeight) * gridHeight;
            }
           },
           onDrag: function(e) {
            if(this.hitTest('.chart')) {
              console.log('hit!');
            }
           }
        });
      }
    };
  });
}());