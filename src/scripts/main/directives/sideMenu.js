;(function() {

  angular.module('oxford.directives.sideMenu', [

  ])

  .directive('oxNav', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      scope: true,
      template:'',
      controller: function() {

      }
    };
  })
  .directive('oxNavContent', function() {
    return {
      transclude: true,
      replace: true,
      restrict: 'EA',
      require: '^oxNav',
      link: function($scope, $element, $attr, navController) {

      }

    };
  })
  .directive('oxMainContent', function() {
    return {
      transclude: true,
      replace: true,
      require: '^oxNav',
      restrict: 'EA',
      link: function($scope, $element, $attr, navController) {

      }
    };
  });
}());