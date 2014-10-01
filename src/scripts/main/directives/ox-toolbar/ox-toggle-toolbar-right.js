;(function(){
  'use strict';
  angular
    .module('oxford.directives.toolbar.right.toggle', [])
    .directive('oxToggleToolbarRight', oxToggleToolbarRight);
    function oxToggleToolbarRight($window) {
      return {
        replace: true,
        restrict: 'EA',
        link: function($scope, $element, $attr, navController) {
          $element.on('click', toggleNav);

          function toggleNav(){
            document.querySelector('body').classList.toggle('show-toolbar-right')
            document.querySelector('body').classList.toggle('has-ox-toolbar-right')
          }

        }
      };
    }
}).call(this);