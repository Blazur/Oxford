'use strict';

angular.module('demo', [
  'oxford',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template:
      '<div>Home Tpl</div>'
    });
})
.controller('Controller', function($scope) {
  $scope.data = {
    columns: [
      ['Profile Completion', 100, 90, 75, 88, 12, 40],
      ['Interests Declared', 100, 10, 65, 40, 24, 100, 80]
    ],
    type: 'spline'
  };
   $scope.axis = {
    x: {
      type: 'category',
      categories: ['Josh', 'Mase', 'Xianhui', 'James', 'Joe', 'That One Guy']
    }
  };

  console.log();
});
