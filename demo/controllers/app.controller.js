;(function(){
'use strict';
  angular
    .module('demo')
    .controller('Controller', AppController);

  function AppController($scope, $timeout, logger) {
    logger.log('Restarted')
    $scope.options = {
      rows: [
        ['data1','data2','data3'],
        [120,80,200],
        [140,50,210],
        [170, 100, 250],
        [150, 70, 300],
        [180, 120, 280]
      ]
    };

    //mocking data incoming from a server to test the $watch function
    setInterval(function() {
      $timeout(function() {
        $scope.chart.load({
          rows: [
            ['data1', 'data2', 'data3'],
            [20,180,400],
            [40,150,310],
            [70,120,470],
            [50,170,400],
            [80,200,380]
          ]
        });
      }, 1000);
      $timeout(function () {
        $scope.chart.load({
          columns: [
            ['data1', 130, 120, 150, 140, 160, 150],
            ['data4', 30, 20, 50, 40, 60, 50],
          ],
          unload: ['data2', 'data3'],
        });
      }, 2000);

      $timeout(function () {
        $scope.chart.load({
          rows: [
            ['data2', 'data3'],
            [120, 300],
            [160, 240],
            [200, 290],
            [160, 230],
            [130, 300],
            [220, 320],
          ],
          unload: 'data4',
        });
      }, 3000);

      $timeout(function () {
        $scope.chart.load({
          columns:[
            ['data4', 30, 20, 50, 40, 60, 50,100,200]
          ],
          type: 'bar'
        });
      }, 4000);

      $timeout(function () {
        $scope.chart.unload({
          ids: 'data4'
        });
      }, 5000);

      $timeout(function () {
        $scope.chart.load({
          columns:[
            ['data2', null, 30, 20, 50, 40, 60, 50]
          ]
        });
      }, 6000);

      $timeout(function () {
        $scope.chart.unload();
      }, 7000);

      $timeout(function () {
        $scope.chart.load({
          rows: [
            ['data4', 'data2', 'data3'],
            [90, 120, 300],
            [40, 160, 240],
            [50, 200, 290],
            [120, 160, 230],
            [80, 130, 300],
            [90, 220, 320],
          ],
          type: 'bar'
        });
      }, 8000);

      $timeout(function () {
        $scope.chart.load({
          rows: [
            ['data5', 'data6'],
            [190, 420],
            [140, 460],
            [150, 500],
            [220, 460],
            [180, 430],
            [190, 520],
          ],
          type: 'line'
        });
      }, 9000);

      $timeout(function () {
        $scope.chart.unload({
          ids: ['data2', 'data3']
        });
      }, 10000);
    }, 11000);
          /////////////////
  }

}).call(this);