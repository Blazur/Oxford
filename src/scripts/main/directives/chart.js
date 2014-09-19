;(function(c3){
  'use strict';

  angular.module('oxford.directives.chart', [])

  .directive('oxChart', ['$timeout', function($timeout) {

    //color patterns for chart coloring
    var patterns = {
      light: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896'],
      dark: ['#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7'],
      material: ['#e51c23', '#673ab7', '#5677fc', '#03a9f4', '#00bcd4', '#259b24', '#ffeb3b', '#ff9800']
    };

    //random number to attach to the chart id
    var chartIdCounter = Math.floor((Math.random()*1000)+1);

    return {
      restrict: 'EA',
      scope: {
        data: '=',
        options: '=',
        axis: '='
      },
      template: '<div draggable class="chart"></div>',
      replace: true,
      link: function(scope, element, attrs) {
        //available option to show gridlines for chart
        if(attrs.grid === 'true') {
          scope.grid = {
            x: { show: true },
            y: { show: true}
          };
        }
        //option to view subchart
        if(attrs.subchart === 'true') {
          scope.subchart = {
            show: true
          };
        }
        //option to zoom in on chart
        if(attrs.zoom === 'true') {
          scope.zoom = { zoom: { enabled: true } };
        }
        //ability to change the color pattern
        if(attrs.pattern) {
          scope.color = {};
          scope.color.pattern = patterns[attrs.pattern];
        } else {
          scope.color = {};
          scope.color.pattern = patterns.dark ;
        }


        var chartId;

        if(element.attr('id')) {
          chartId = element.attr('id');
        }
        else {
          chartId = 'c3-chart-' + chartIdCounter;
          element.attr('id', chartId);
          chartIdCounter += 1;
        }

        //will be called on click
        // scope.data.onclick = function(d, elem) {
        //   console.log(elem.style.fill, ' elem');
        //   elem.style.fill = '#ce93d8';
        //   console.log(d, ' d');
        // };

        //generate c3 chart data
        var chartData = {
          bindto: '#' + element.attr('id'),
          data: scope.data,
          axis: scope.axis,
          options: scope.options,
          grid: scope.grid,
          subchart: scope.subchart,
          zoom: scope.zoom,
          color: scope.color,
          // x: scope.x,
          size: {
            height: 300,
            width: 950
          }
        };
        //assign a type of line if undefined
        chartData.data.type = attrs.chart? attrs.chart : scope.data.type? scope.data.type : 'line';

        //if scope.options are given replace the data with the options data
        if(scope.options) {
          Object.keys(scope.options).forEach(function(key) {
            chartData[key] = scope.options[key];
          });
        }
        //Reload the chart if the data changes
        // scope.$watch('data', function(data, prevData) {
        //   if(chart) {
        //     chart.load(data);
        //     if(data.columns.length < prevData.columns.length) {
        //       chart.unload(['data' + prevData.columns.length]);
        //     }
        //   }
        // });
        //ran if there are changes to the chart
        var onChartChanged = function(chart) {
          if(chart) {
            scope.data.type = chart;
            chart.load(data);
          }
        };
        //watch the chart for any changes
        scope.$watch(function() {
          return attrs.chart;
        }, onChartChanged);

        //Generating the chart
        var chart = c3.generate(chartData);

        //mocking data incoming from a server to test the $watch function
        setInterval(function() {
          $timeout(function() {
            chart.load({
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
            chart.load({
              columns: [
                ['data1', 130, 120, 150, 140, 160, 150],
                ['data4', 30, 20, 50, 40, 60, 50],
              ],
              unload: ['data2', 'data3'],
            });
          }, 2000);

          $timeout(function () {
            chart.load({
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
            chart.load({
              columns:[
                ['data4', 30, 20, 50, 40, 60, 50,100,200]
              ],
              type: 'bar'
            });
          }, 4000);

          $timeout(function () {
            chart.unload({
              ids: 'data4'
            });
          }, 5000);

          $timeout(function () {
            chart.load({
              columns:[
                ['data2', null, 30, 20, 50, 40, 60, 50]
              ]
            });
          }, 6000);

          $timeout(function () {
            chart.unload();
          }, 7000);

          $timeout(function () {
            chart.load({
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
            chart.load({
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
            chart.unload({
              ids: ['data2', 'data3']
            });
          }, 10000);
        }, 11000);
        /////////////////
      }
    };
  }]);
}(c3));
