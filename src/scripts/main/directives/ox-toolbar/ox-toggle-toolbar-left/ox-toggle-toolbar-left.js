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
            angular.element('body').toggleClass('show-toolbar-left')
            angular.element('body').toggleClass('has-ox-toolbar-left')
          }

        }
      };
    }
}).call(this);