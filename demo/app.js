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
      ['sample1', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400],
      ['sample2', 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30],
      ['sample3', 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350],
      ['sample4', 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
    ],
    type: 'area'
  };

  $scope.axis = {
    x: {
      type: 'category',
      categories: ['Josh', 'Mase', 'Xianhui', 'James', 'Joe', 'That One Guy']
    }
  };

});
