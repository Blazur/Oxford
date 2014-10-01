;(function(){
  'use strict';
  angular
    .module('oxford.directives.toolbar.left.toggle', [])
    .directive('oxToggleToolbarLeft', oxToggleToolbarLeft);
    function oxToggleToolbarLeft($window) {
      return {
        replace: true,
        restrict: 'EA',
        link: function($scope, $element, $attr, navController) {
          $element.on('click', toggleNav);

          function toggleNav(){
            document.querySelector('body').classList.toggle('show-toolbar-left')
            document.querySelector('body').classList.toggle('has-ox-toolbar-left')
          }

        }
      };
    }
}).call(this);