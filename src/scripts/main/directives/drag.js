;(function(){
  'use strict';

  angular.module('oxford.directives.drag', [])

  .directive('draggable', function() {
    var gridWidth = 200;
    var gridHeight = 100;
    var startX, startY;
    var bounds = document.getElementsByClassName('dashboard-content');
    return function(scope, element, attr) {
      if(attr.draggable !== 'false') {
        Draggable.create(element, {
          bounds: bounds,
          type: 'x,y',
          edgeResistance: 0.90,
          throwProps: true,
          onPress: function() {
            startX = this.x;
            startY = this.y;
          },
          snap: {
            x: function(endValue) {
              return Math.round(endValue / gridWidth) * gridWidth;
            },
            y: function(endValue) {
              return Math.round(endValue / gridHeight) * gridHeight;
            }
          },
          onDrag: function(e) {
            if(this.hitTest(element)) {
              console.log(this, ' this');
            }
          },
          onDragEnd: function() {
            if(this.hitTest(element, 20)) {
              console.log('hit');
              TweenLite.to(element, 0.5, {x: startX, y: startY, ease: Power2.easeInOut});
            }
          }
        });
      }
    };
  });
}());