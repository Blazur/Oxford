.directive('lineChart', function() {
  var chartIdCounter = Math.floor((Math.random()*1000)+1);
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
       //Assigning id to the element
      var chartId;
      if(element.attr('id')) {
        chartId = element.attr('id');
      }
      else {
        chartId = 'c3-chart-' + chartIdCounter;
        element.attr('id', chartId);
        chartIdCounter += 1;
      }

      //Preparing chart data and options
      var genData = {
        bindto: '#' + chartId,
        data: scope.data
      };
      console.log(genData, ' genData');
      genData.data.type = attrs.chart? attrs.chart : scope.data.type? scope.data.type : 'line';
      if(scope.options) {
        Object.keys(scope.options).forEach(function(key) {
          genData[key] = scope.options[key];
        });
      }
      //On data change, reload chart
      onDataChanged = function(data, oldData) {
        if(chart) {
          chart.load(data);
          console.log(data.columns.length);
          console.log(oldData.columns.length);
          if(data.columns.length < oldData.columns.length) {
            console.log('data' + oldData.columns.length);
            chart.unload(['data' + oldData.columns.length]);
          }
        }
      };
      scope.$watch('data', onDataChanged, true);

      //On chart type change, reload chart
      onChartChanged = function(chart) {
        if(chart) {
          scope.data.type = chart;
          chart.load(data);
        }
      };
      scope.$watch(function() {return attrs.chart; }, onChartChanged);
      //Generating the chart
      var chart = c3.generate(genData);
    }
  };
})