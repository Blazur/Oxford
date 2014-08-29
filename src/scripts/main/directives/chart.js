;(function(c3){
  'use strict';

  angular.module('oxford.directives.chart', [

  ])
  .directive('oxChart', [function() {
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
        var chartId;
        if(element.attr('id')) {
          chartId = element.attr('id');
        }
        else {
          chartId = 'c3-chart-' + chartIdCounter;
          element.attr('id', chartId);
          chartIdCounter += 1;
        }
        scope.data.onclick = function(d, elem) {
          console.log(elem, ' elem');
          console.log(d, ' d');
        };
        //generate c3 chart data
        var chartData = {
          bindto: '#' + element.attr('id'),
          data: scope.data,
          axis: scope.axis,
          options: scope.options
        };
        chartData.data.type = attrs.chart? attrs.chart : scope.data.type? scope.data.type : 'line';

        if(scope.options) {
          Object.keys(scope.options).forEach(function(key) {
            chartData[key] = scope.options[key];
          });
        }
        //Reload the chart if the data changes
        var onDataChanged = function(data, oldData) {
          if(chart) {
            chart.load(data);
            if(data.columns.length < oldData.columns.length) {
              chart.unload(['data' + oldData.columns.length]);
            }
          }
        };
        // scope.$watch('data', onDataChanged, true);

        var onChartChanged = function(chart) {
          if(chart) {
            scope.data.type = chart;
            chart.load(data);
          }
        };
        scope.$watch(function() {
          console.log('yoooooo');
        }, onChartChanged);
        //Generating the chart
        var chart = c3.generate(chartData);
        console.log(chart.internal);

        // chart.internal.config.data_colors['Profile Completion'] = '#9c27b0';
        // console.log(chart.internal.config.data_colors['Profile Completion'], ' chart');
      }
    };
  }]);
}(c3));
