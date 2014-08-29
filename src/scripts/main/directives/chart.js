;(function(c3){
  'use strict';

  angular.module('oxford.directives.chart', [

  ])
  .directive('oxChart', ['$timeout', function($timeout) {
    var lightPattern = ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896'];
    var darkPattern = ['#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7'];


    //random number to attach to the chart id
    var chartIdCounter = Math.floor((Math.random()*1000)+1);

    return {
      restrict: 'E',
      scope: {
        data: '=',
        options: '=',
        axis: '='
      },
      replace: true,
      link: function(scope, element, attrs) {
        //assign an id to the chart if it doesn't have one
        console.log(attrs);

        //available option to show gridlines for chart
        if(attrs.grid === 'true') {
          console.log('trueee');
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
        if(attrs.pattern === 'light') {
          scope.color = {};
          scope.color.pattern = lightPattern;
        } else {
          scope.color = {};
          scope.color.pattern = darkPattern;
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
        scope.data.onclick = function(d, elem) {
          console.log(elem.style.fill, ' elem');
          elem.style.fill = '#ce93d8';
          console.log(d, ' d');
        };
        //generate c3 chart data
        var chartData = {
          bindto: '#' + element.attr('id'),
          data: scope.data,
          axis: scope.axis,
          options: scope.options,
          grid: scope.grid,
          subchart: scope.subchart,
          zoom: scope.zoom,
          color: scope.color
        };
        chartData.data.type = attrs.chart? attrs.chart : scope.data.type? scope.data.type : 'line';

        if(scope.options) {
          Object.keys(scope.options).forEach(function(key) {
            chartData[key] = scope.options[key];
          });
        }
        //Reload the chart if the data changes
        scope.$watch('data', function(data, prevData) {
          if(chart) {
            chart.load(data);
            if(data.columns.length < prevData.columns.length) {
              chart.unload(['data' + prevData.columns.length]);
            }
          }
        });

        var onChartChanged = function(chart) {
          if(chart) {
            scope.data.type = chart;
            chart.load(data);
          }
        };
        scope.$watch(function() {
          return attrs.chart;
        }, onChartChanged);
        //Generating the chart
        var chart = c3.generate(chartData);
        // chart.internal.config.data_colors['Profile Completion'] = '#9c27b0';
        // console.log(chart.internal.config.data_colors['Profile Completion'], ' chart');
      }
    };
  }]);
}(c3));
