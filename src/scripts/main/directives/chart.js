;(function(c3){
  'use strict';

  angular.module('oxford.directives.chart', [])

  .directive('oxChart', [function() {

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
        axis: '=',
        chart: '='
      },
      template: '<div draggable class="chart"></div>',
      replace: true,
      link: function(scope, element, attrs) {
        var chartId;
        var options = element.attr('options');

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
        //ability to change the color pattern
        if(attrs.pattern) {
          scope.color = {};
          scope.color.pattern = patterns[attrs.pattern];
        } else {
          scope.color = {};
          scope.color.pattern = patterns.dark ;
        }

        if(element.attr('id')) {
          chartId = element.attr('id');
        }
        else {
          chartId = 'c3-chart-' + chartIdCounter;
          element.attr('id', chartId);
          chartIdCounter += 1;
        }

        //generate c3 chart data
        var chartData = {
          bindto: '#' + element.attr('id'),
          data: scope[options],
          axis: scope.axis,
          grid: scope.grid,
          subchart: scope.subchart,
          zoom: scope.zoom,
          color: scope.color,
          x: scope.x,
          size: {
            height: 300,
            width: 950
          }
        };


        if(!options) {
          throw 'You must have an options attribute on your chart directive!';
        }

        //Reload the chart if the data changes
        scope.$watch('options', function(data, prevData) {
          if(chart) {
            chart.load(data);
            if(data.columns) {
              if(data.columns.length < prevData.columns.length) {
                chart.unload(['options' + prevData.columns.length]);
              }
            }
            if(data.rows) {
              if(data.rows.length < prevData.rows.length) {
                chart.unload(['options' + prevData.rows.length]);
              }
            }
          }
        });

        //run if there are changes to the chart
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
        scope.$parent.chart = chart;
      }
    };
  }]);
}(c3));
