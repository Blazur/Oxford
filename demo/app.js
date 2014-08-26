angular.module('demo', [
  'oxford'
])

.controller('Controller', function($scope) {
  $scope.data = {
    columns: [
      ['Profile Completion', 100, 90, 75, 88, 12, 40],
      ['Interests Declared', 75, 99, 65, 12, 24, 63]
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
