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
            angular.element('body').toggleClass('show-toolbar-right');
            angular.element('body').toggleClass('has-ox-toolbar-right');
          }

        }
      };
    }
}).call(this);